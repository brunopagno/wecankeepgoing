FROM node:12.7.0-alpine

RUN npm install
RUN npm run build
