FROM node:10.13-alpine AS build
WORKDIR /app
COPY . .
RUN yarn install && \
    yarn storybook:build

FROM alpine
RUN apk update && apk add ca-certificates nginx && rm -rf /var/cache/apk/*
RUN mkdir /run/nginx && touch /run/nginx/nginx.pid
WORKDIR /app
COPY --from=build /app/build /app
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8001
CMD ["nginx", "-g", "daemon off;"]