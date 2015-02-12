FROM node

ADD . /src
WORKDIR src
RUN npm install
RUN ls node_modules

EXPOSE 6060

CMD ["node", "index.js"]
