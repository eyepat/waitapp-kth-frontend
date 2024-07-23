# Frontend Builder
FROM --platform=$BUILDPLATFORM oven/bun:latest AS frontend-builder

ENV API_BASE_URL=""

WORKDIR /app

COPY package*.json ./
COPY bun.lockb ./
RUN bun i
COPY . .
RUN rm -f .env.development
RUN chmod +x /app/build-docker.sh

RUN bun run docker-build
RUN bun run build

# Runner
FROM nginx:latest
ENV BACKEND_SERVER=http://localhost:8080/
ENV API_BASE_URL=

COPY --from=frontend-builder /app/dist/ /usr/share/nginx/html/
COPY --from=frontend-builder /app/src/locales/ /usr/share/nginx/html/textcontent/
COPY nginx.conf.template /etc/nginx/conf.d/default.conf.template

COPY entrypoint.sh .
RUN chmod +x /entrypoint.sh

EXPOSE 8080

ENTRYPOINT ["/entrypoint.sh"]