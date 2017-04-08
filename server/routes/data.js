var express = require('express');
var router = express.Router();
var db = require('./db.js');
/* GET users listing. */
ret_json=[];
router.post('/', function(req, res, next) {
  console.log("data");
  console.log(req.body);
  db.data(req.body.id,req.body.last_time,function(callback){
    res.json(callback);
  });
  //console.log(ret_json);
  //if(ret_json
  //res.json(ret_json);
  //console.log("done");
});
//function send_data(id,last_time, callback) 
module.exports = router;
