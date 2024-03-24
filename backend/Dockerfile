FROM node:lts AS development

WORKDIR  /app/backend

FROM node:lts AS builder

RUN mkdir -p /app/backend

WORKDIR /app/backend

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]