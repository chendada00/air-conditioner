FROM node:lts-alpine AS builder

RUN corepack enable

WORKDIR /app
COPY . .

RUN pnpm install --frozen-lockfile && pnpm run react:build

FROM nginx:alpine

ENV AC_NGINX_PORT=80 AC_NGINX_DOMAIN=localhost
COPY --from=builder /app/packages/react/dist /usr/share/nginx/html
EXPOSE 80
