FROM node:6.11.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 4200
CMD npm run start:prod