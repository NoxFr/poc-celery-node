FROM node:20-slim

WORKDIR /home/node/app

COPY . .

RUN npm install

COPY --chown=node:node . .

CMD [ "node", "server.js" ]