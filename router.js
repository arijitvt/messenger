var express = require("express"); 
var router = express.Router(); 

router.get("/",function(req,res) {
	console.log("getting load request");
	res.send("Got the load request");
})

module.exports = router;
