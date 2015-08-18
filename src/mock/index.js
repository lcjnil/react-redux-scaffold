var Router = require('express').Router();

Router.get('/api/todos', function(req, res) {
  var data = [
    {text: 'Better demo'},
    {text: 'Make router into store'}
  ];
  res.status(200).json(data);
});

module.exports = Router;

