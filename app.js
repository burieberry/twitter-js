var express = require('express');
var app = express();

var port = 3000 || process.env.PORT;

app.get('/', function(req, res, next){
	res.send('hello')
})

app.listen(3000, function(){
	console.log(`Listening intently on port ${port}`)
})