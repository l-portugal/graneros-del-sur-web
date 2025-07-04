FROM node:24-alpine3.21
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
USER node
CMD npm start