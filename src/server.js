var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer().listen(3000);
var app = express();
var Router = require('./mock');

var port = 3001;
var publicPath = path.resolve(__dirname, '../dist');

app.use(express.static(publicPath));

// write your fake server in Router!!!
app.use(Router);

// proxy all assets to webpack dev server
app.all('/assets/*', function (req, res) {
  proxy.web(req, res, {
    target: 'http://localhost:9999'
  });
});

app.use('/', function(req, res) {
  res.setHeader('Content-Type', 'text/html');
  require('fs').readFile(__dirname + '/index.html', function(err, text) {
    res.send(text);
  });
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});
