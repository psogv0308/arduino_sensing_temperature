var express = require('express');
var router = express.Router();
var FCM = require('fcm-push');
var serverKey = 'AIzaSyAF6qqwpZNZU8vCJWkoHWUMhZLxa3NJS18'
var fcm = new FCM(serverKey);
var message = {
    to:'fjbeDkQ7VFc:APA91bGgciJh_ch64BzsQKA5-r0dY6zBx5pBjkOdGE6upjFk2zq6mt-gIthCRcJNnaOhdGgxtSwIJ88pp5Xhk-R17clLi6WHQtWWocvYDsFdS2WyRS28LQRyqzUTr1HKdRd2s9R8CEZc',
    data: {
        'code': process.argv[2]
    },
    notification: {
        title: 'Title of your push notification',
        body: 'Body of your push notification'
    }
};

//callback style
/*fcm.send(message, function(err, response){
    if (err) {
        console.log("Something has gone wrong!");
    } else {
        console.log("Successfully sent with response: ", response);
    }
});
*/
/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body.code);
  message.data.code=req.body.code;
  console.log(message.data.code);

  fcm.send(message, function(err, response){
    if (err) {
        //console.log("Something has gone wrong!");
  	console.log(err);
	res.json({success:false});
    } else {
        //console.log("Successfully sent with response: ", response);
  	res.json({success:true});
    }
  });
});

module.exports = router;
