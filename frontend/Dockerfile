FROM node:lts-alpine

RUN apk update

COPY package.json .

RUN yarn

COPY . .

CMD ["yarn", "dev"]