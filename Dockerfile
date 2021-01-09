FROM node:10.22-alpine

WORKDIR /app
COPY . .
RUN yarn install && \
    yarn storybook:build

FROM alpine:3.12.3

RUN apk update \ 
    && apk add ca-certificates nginx \
    && rm -rf /var/cache/apk/* \
    && mkdir /run/nginx \
    && touch /run/nginx/nginx.pid
WORKDIR /app
COPY --from=0 /app/build /app
COPY .config/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]