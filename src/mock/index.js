const express = require('express');
const router = new express.Router();

router.get('/', (req, res) => {
  res.end('Hello, world!');
});

module.exports = router;
