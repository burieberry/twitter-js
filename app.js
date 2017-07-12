var express = require('express');
var app = express();

var port = 3000 || process.env.PORT;

app.use(function(req, res, next) {
  console.log(req.originalUrl);
  console.log(req.method);
  next();
});

app.get('/', function(req, res, next){
	res.send('hello')
});

app.use(function(req, res, next) {
  res.send('you idiot');
});

app.listen(3000, function(){
	console.log(`Listening intently on port ${port}`)
})
