var express = require('express');
var nunjucks = require('nunjucks');
var routes = require('./routes')
var app = express();

var port = 3000 || process.env.PORT;

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

app.use(function(req, res, next) {
  console.log(req.originalUrl);
  console.log(req.method);
  next();
});

app.use(express.static('public'))

app.get('/', routes);

app.use(function(req, res, next) {
  res.send('you idiot');
});

app.listen(3000, function(){
	console.log(`Listening intently on port ${port}`)
})

