FROM node 

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

ENV PORT=4002

EXPOSE 4002

CMD [ "npm", "start" ]

# RUN npm install ws && node server.js

# RUN npm install 

# EXPOSE 4002

# CMD [ "node", "server.js" ]