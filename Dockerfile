# Frontend Builder
FROM node:latest AS frontend-builder

ENV KEYCLOAK_URL="{{__KEYCLOAK_URL__}}"
ENV KEYCLOAK_REALM="{{__KEYCLOAK_REALM__}}"
ENV KEYCLOAK_CLIENT_ID="{{__KEYCLOAK_CLIENT_ID__}}"
ENV API_BASE_URL=""

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN chmod +x /app/build-docker.sh

RUN npm run docker-build
RUN npm run build

# Runner
FROM nginx:latest
ENV BACKEND_SERVER=http://localhost:8080/
ENV API_BASE_URL=

COPY --from=frontend-builder /app/dist/ /usr/share/nginx/html/
COPY nginx.conf.template /etc/nginx/conf.d/default.conf.template

COPY entrypoint.sh .
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]