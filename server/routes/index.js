var path = require('path');
var router = require('express').Router();

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

module.exports = router;