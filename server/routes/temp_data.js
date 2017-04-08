var express = require('express');
var router = express.Router();
var db = require('./db.js');
var fs = require('fs');
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query.temp);
  data=req.query.temp+'\n';
  fs.writeFile('data.txt', data, 'utf8', function(err) {
    console.log("write "+req.query.temp+" in data.txt");
  });

  res.send(db.temp_data(req.query.temp));
  //res.send({success:db.login(req.body.token)});
});

module.exports = router;
