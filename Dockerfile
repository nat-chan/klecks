FROM node

COPY . /var/www
WORKDIR /var/www

RUN yarn global add serve
RUN yarn install
RUN yarn run lang:build
RUN yarn run build
RUN yarn run build:help

ENTRYPOINT ["npx", "serve", "dist"]
EXPOSE 3000
