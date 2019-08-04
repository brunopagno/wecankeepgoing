FROM node:12.7.0-alpine

ADD . /app
RUN cd /app && npm install && npm run build

CMD npm run serve
