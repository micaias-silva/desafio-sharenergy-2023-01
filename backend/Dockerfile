FROM node:lts-alpine

RUN apk update

WORKDIR /app/backend

COPY "package.json" .

RUN yarn

COPY . .

CMD ["yarn", "start:dev"]

