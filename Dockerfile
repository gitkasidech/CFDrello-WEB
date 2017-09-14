# FROM node:6.11.0

# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app

# COPY package.json .
# RUN npm install

# COPY . .

# EXPOSE 4200
# CMD npm run start:prod
FROM node:8.1.1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install && npm cache clean --force
COPY . /usr/src/app
EXPOSE 4200
CMD npm run start:prod
#CMD [ "npm", "start:prod" ]