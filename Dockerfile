FROM node:18.19.1

WORKDIR /app/shopping

COPY package*.json .

RUN npm install

COPY . .
COPY .env.dev .env

EXPOSE 8003

CMD ["npm", "start"]