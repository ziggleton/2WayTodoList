
FROM node:12-alpine3.11 as ui

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package*.json /app/

RUN npm install --silent

RUN npm install react-scripts -g --silent

COPY . .

RUN yarn build

FROM nginx:latest

EXPOSE 80

COPY --from=ui /app/build/ /var/www/html

COPY ./nginx/default.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]