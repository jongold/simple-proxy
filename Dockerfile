FROM node

ADD . /src
WORKDIR src
RUN npm install

EXPOSE 6060

CMD ["node", "index.js"]
