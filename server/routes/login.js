var express = require('express');
var router = express.Router();
var db = require('./db.js');
/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  res.json({success:db.login(req.body.token)});
});

module.exports = router;
