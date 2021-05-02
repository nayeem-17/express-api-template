FROM node
WORKDIR /app
COPY package.json /app
RUN npm i
COPY . /app
EXPOSE 8080
CMD ["npm", "start"]