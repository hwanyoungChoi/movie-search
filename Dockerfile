FROM node:lts as build

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

FROM nginx:stable-alpine

RUN rm -rf /etc/ngin/conf.d
COPY conf /etc/nginx

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
