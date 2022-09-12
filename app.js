

const express = require("express");
const app = express();

app.use(express.static("public"));


app.get("/", function(req, res){
	res.sendFile("views/index.html" , {root: __dirname});
});

app.get("/rpsls", function(req, res){
	res.sendFile("views/index2.html" , {root: __dirname});
});


app.listen(3000, function(){
	console.log("Server initiated on port 3000");
})
