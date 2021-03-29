FROM node:6.4.0
MAINTAINER Oleksandr Galchenko <galchenko.a@gmail.com>
COPY . /bundle
RUN (cd /bundle/programs/server && npm install)
ENV MONGO_URL=mongodb://doctorS:doctorS123456@ds147599.mlab.com:47599/doctor-subbotin
ENV PORT=8080
EXPOSE 8080
CMD node /bundle/main.js
