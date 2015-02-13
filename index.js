var express = require('express')
  , httpProxy = require('http-proxy')
  , colors = require('colors')
  , cors = require('cors')
  , https = require('https')
  , app = express()
  , PORT = 6060
  , PROXY_ROOT = process.env.PROXY_ROOT;

var welcome = ["",
  "8b,dPPYba,   8b,dPPYba,   ,adPPYba,   8b,     ,d8  8b       d8",
  "88P'    \"8a  88P'   \"Y8  a8\"     \"8a   `Y8, ,8P'   `8b     d8'",
  "88       d8  88          8b       d8     )888(      `8b   d8'",
  "88b,   ,a8\"  88          \"8a,   ,a8\"   ,d8\" \"8b,     `8b,d8'",
  "88`YbbdP\"'   88           `\"YbbdP\"'   8P'     `Y8      Y88'",
  "88                                                     d8'",
  "88                                                    d8'",
""].join('\n');

app.use(cors());

var proxy = httpProxy.createProxyServer({
  target: PROXY_ROOT,
  agent: https.globalAgent,
  headers: {
    host: ''
  }
});

app.use(function(req, res) {
  console.log('-> '.green + req.path);
  proxy.web(req, res, function(err) {
    console.log(err);
    res.writeHead(502);
    res.end("There was an error proxying your response :(");
  });
});

app.listen(PORT);
console.log(welcome.rainbow);

console.log('Proxying ' + PROXY_ROOT.green + ' on port ' + PORT.toString().green);
