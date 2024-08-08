FROM node:18

WORKDIR /usr/src/app

COPY . .

EXPOSE 3000

RUN npm install

CMD ["npx", "nodemon", "index.js"]