FROM node:20-alpine
WORKDIR /src

COPY package*.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

EXPOSE 4173
CMD [ "npm", "run", "start" ]
