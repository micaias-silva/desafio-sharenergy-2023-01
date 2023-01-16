FROM node:lts-alpine

RUN apk update

EXPOSE 5173

WORKDIR /app/frontend

COPY "package.json" .

RUN yarn

COPY . .

CMD ["yarn", "dev"]