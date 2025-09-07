const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');

const app = express();
const target = 'wss://GCSING1089.exitgames.com:443'; // Photon region server

app.use('/', createProxyMiddleware({
  target,
  changeOrigin: true,
  ws: true,
  secure: true
}));

app.listen(8080, () => {
  console.log(`Proxy running on port 8080 → ${target}`);
});
