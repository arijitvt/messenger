var FbMessenger =  require("fb-messenger");
var MsgSender = new FbMessenger(token,"REGULAR");

console.log("Hiiiiii!!!!!");

function sendTextMessage(msg) {
	var msgId = "aaa";	
	MsgSender.sendTextMessage(msgId,msg,function(err,body){
		if(err) {
			return console.log(err) ;	
		}
		console.log(body);
	});
}

sendTextMessage("Arijit");
