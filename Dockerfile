FROM node:latest

WORKDIR /usr/src/app

COPY default-env.json .
COPY index.js .
COPY package.json .
COPY xs-app.json .

RUN npm install

EXPOSE 8080

CMD ["npm","start"]
