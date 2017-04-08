var express = require('express');
var router = express.Router();
var db = require('./db.js');
/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  result=db.sensing(req.body.id,req.body.posture_l,req.body.posture_r,req.body.waist,req.body.neck);
  res.json({success:result});
});

module.exports = router;
