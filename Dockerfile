FROM node:12
WORKDIR /app
ADD . /app
RUN npm ci
EXPOSE 8080
CMD ["npm", "run", "start"]
