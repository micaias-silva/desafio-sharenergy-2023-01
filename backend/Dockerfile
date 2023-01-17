FROM node:lts-alpine

RUN apk update

WORKDIR /app/backend

EXPOSE 3000

COPY "package.json" .

RUN yarn

COPY . .

CMD ["yarn", "start"]

