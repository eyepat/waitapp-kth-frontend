

FROM --platform=$BUILDPLATFORM oven/bun:latest AS builder

WORKDIR /app

COPY package*.json bun.lockb ./

RUN bun i

COPY .env.development scripts/ ./

RUN ./docker-envs.ts .env.production && \
    ./nginx-entrypoint.ts && \
    rm .env.development

COPY .eslintrc.cjs prod.index.html tsconfig*.json vite.config.ts ./
COPY src src
COPY public public
RUN mv prod.index.html index.html

RUN bun run build

FROM nginx:latest

COPY --from=builder --link /app/dist/ /usr/share/nginx/html/
COPY --from=builder /app/src/locales/ /usr/share/nginx/html/textcontent/
COPY --link docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder --chmod=777 --link /app/entrypoint.sh .

EXPOSE 8080

# default env values
ENV API_BASE_URL=http://localhost:8080
ENV API_BASE_OPENAPI_PATH="/q/openapi?format=json"
ENV KEYCLOAK_URL="http://localhost:9090"
ENV KEYCLOAK_REALM="waitapp"
ENV KEYCLOAK_CLIENT_ID="frontend"
ENV FETCH_LANG_JSON="false"
ARG COMMIT_HASH
ENV COMMIT_HASH=${COMMIT_HASH}

ENTRYPOINT ["/entrypoint.sh"]
