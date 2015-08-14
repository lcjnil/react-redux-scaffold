var Router = require('express').Router();

Router.get('/api/test', function(req, res) {
  res.json(200, {status: 'OK'});
});

module.exports = Router;

