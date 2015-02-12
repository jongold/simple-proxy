# Simple Proxy

Was building a webapp interacting with an API that didn't support CORS ヽ(。_°)ノ

Here's a proxy.

## Running
```
git clone git@github.com:jongold/simple-proxy.git && cd simple-proxy
npm install
export PROXY_ROOT=https://api.hipster-startup.io
node index.js
curl localhost:6060/whatever/you/want
```

## Running with Docker
```
docker run -p 6060:6060 -d -e "PROXY_ROOT=https://api.hipster-startup.io" jongold/simple-proxy
curl localhost:6060/whatever/you/want
```
