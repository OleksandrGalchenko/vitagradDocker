FROM node:6.4.0
MAINTAINER Oleksandr Galchenko <galchenko.a@gmail.com>
COPY . /bundle
RUN (cd /bundle/programs/server && npm install)
ENV MONGO_URL="none"
ENV PORT=8080
EXPOSE 8080
CMD node /bundle/main.js
