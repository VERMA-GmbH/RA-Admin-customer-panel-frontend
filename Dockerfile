# build environment
FROM node:alpine as builder
WORKDIR /app
COPY . ./
RUN yarn install
RUN yarn build

# server environment
FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/conf.d/configfile.template
COPY --from=builder /app/build /usr/share/nginx/html


ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080
CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
