//var FbMessenger =  require("fb-messenger");
//var MsgSender = new FbMessenger(token,"REGULAR");
//

var express = require ("express"); 
var app = express(); 
var routes = require("./router.js");
app.use("/",routes);
app.listen(3000,function (){
	console.log("Start at port"+3000);
});
module.exports = app; 

//function sendTextMessage(msg) {
//	var msgId = "aaa";	
//	MsgSender.sendTextMessage(msgId,msg,function(err,body){
//		if(err) {
//			return console.log(err) ;	
//		}
//		console.log(body);
//	});
//}
//
//sendTextMessage("Arijit");
