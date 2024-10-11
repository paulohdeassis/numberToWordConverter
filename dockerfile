FROM node
WORKDIR /app
COPY package.json /app
COPY ./dist /app
RUN npm install
CMD [ "node", "index.js" ]
