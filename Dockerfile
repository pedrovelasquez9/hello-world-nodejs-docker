FROM node:17

WORKDIR /usr/src/app
COPY . ./
RUN npm install
EXPOSE 8000
CMD ["node", "index.js"]