var express = require('express');
var router = express.Router();
var db = require('./db.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  //res.send(req.query);
  var qstr = 'select * from sensors where time > date_sub(now(), INTERVAL 1 DAY) ';
  db.dump(function(rows, time_stamp, temp) {
    //console.log("Got "+ rows.length +" records");
    console.log(rows);
    var html = "<!doctype html><html><body>";
    html += "<H1> Sensor Data for Last 24 Hours</H1>";
    html += "<table border=1 cellpadding=3 cellspacing=0>";
    html += "<tr><td>Seq#<td>Time Stamp<td>Temperature";
    for (var i=0; i< rows; i++) {
       html += "<tr><td>"+(i+1)+"<td>"+time_stamp[i]+"<td>"+temp[i];
    }
    html += "</table>";
    html += "</body></html>";
    //console.log(html);
    res.send(html);
     //res.send("hello");
  });
});

module.exports = router;
