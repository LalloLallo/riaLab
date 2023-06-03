FROM node:18-alpine3.17

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install
RUN npm install -g @ionic/cli
RUN ionic build

EXPOSE 8100

CMD [ "ionic", "serve", "--external" ]