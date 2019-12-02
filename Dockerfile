FROM node:12.13.1

EXPOSE 3000

WORKDIR /app
COPY ./ ./

RUN npm i
CMD ["npm", "start"]

