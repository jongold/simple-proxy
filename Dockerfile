FROM node

ADD . /src
WORKDIR src
RUN npm install -g forever

EXPOSE 6060

CMD forever index.js
