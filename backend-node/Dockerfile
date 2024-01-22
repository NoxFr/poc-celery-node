FROM node:20-slim

WORKDIR /home/node/app

COPY . .

RUN npm install

COPY --chown=node:node . .

CMD [ "npx", "ts-node", "server.ts" ]