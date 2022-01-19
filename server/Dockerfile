FROM node:14 as base

WORKDIR /usr/src/server

COPY package.json ./

RUN npm i
RUN npm i nodemon

COPY . .

FROM base as production

ENV NODE_PATH=./build

RUN npm run build
