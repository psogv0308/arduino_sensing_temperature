var express = require('express');
var router = express.Router();
var db = require('./db.js');
/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  res.json({success:db.create_id(req.body.id,req.body.pw,req.body.token)})
});

module.exports = router;
