var FCM = require('fcm-push');

var serverKey = 'AIzaSyAF6qqwpZNZU8vCJWkoHWUMhZLxa3NJS18'
var fcm = new FCM(serverKey);

var message = {
	to:'fjbeDkQ7VFc:APA91bGgciJh_ch64BzsQKA5-r0dY6zBx5pBjkOdGE6upjFk2zq6mt-gIthCRcJNnaOhdGgxtSwIJ88pp5Xhk-R17clLi6WHQtWWocvYDsFdS2WyRS28LQRyqzUTr1HKdRd2s9R8CEZc',
//	to:'crhp4gqBZUA:APA91bE1wwJ6OMhWm--pcYkKj75wEDDXl0bvfE82uH7MX-l_0G8Xl3vzVbUBiyO5u_fhSQIVKRZVsnNtazwuxmXauFctvST3888hoNZsqRlhN_pTd-5vbfsfTgRmnc3B8CwRk4t5a8ek',
//	to:'crhp4gqBZUA:APA91bE1wwJ6OMhWm--pcYkKj75wEDDXl0bvfE82uH7MX-l_0G8Xl3vzVbUBiyO5u_fhSQIVKRZVsnNtazwuxmXauFctvST3888hoNZsqRlhN_pTd-5vbfsfTgRmnc3B8CwRk4t5a8ek',
//	to:'fufAd3XjY1I:APA91bE5iTNgAD_PZCfsFLsDRaZTNZwD1U1XJp_vUv-htisH5XEQMVbHfNfHA6zKQ0lLdkCGqo2l0HWR79TPdq2JPMlGv2ehGBhl5XH3MxLLh9ePueAELvk29hbbqBguPz6j1qHmEnQX',
///	to:'cGTDcHY_YQU:APA91bFmZN1vrd8gUhrx1voYWO9fbONPGmndjHkrPU5l-E7ei-yzoWgtUJRoevzhDfHUr75Wzbgwd1K2OZCizJ5tPecv6JzW9AitOEaD4xvmb3I5meQWipjH0ai3rHxuSnEfUZHmSDNJ', 
//   to:'cohOZdxdITs:APA91bFDh0ybz1N-QSAyc83NQZpKRK5vFmJIWfE8RU2rXaaW5loJmTBWDqOoo1xN8mTyuaVzKYd5gCt_RcroNIAtiO5P2uQ6fdSTRdVHTozk5z58xKatSuJPDEHoBoFmqaNos2Yj8Ef1',
    data: {
        'code': process.argv[2]
    },
    notification: {
	title: 'Title of your push notification',
        body: 'Body of your push notification'    
    }
};

//callback style
fcm.send(message, function(err, response){
    if (err) {
        console.log("Something has gone wrong!");
    } else {
        console.log("Successfully sent with response: ", response);
    }
});                         
