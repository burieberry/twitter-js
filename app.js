const express = require('express');
const bodyParser = require('body-parser');
const app = express(); // store application instance in an app variable
const port = 3000 || process.env.PORT;
const chalk = require('chalk'); // color the console output
const nunjucks = require('nunjucks'); // templating engine
const routes = require('./routes');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // use nunjucks to give html files to res.render
nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

// route to homepage
app.use('/', routes);

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
});

// Log requests, url, status code
app.use('/', function(req, res, next) {
  console.log(chalk.blue(req.method, req.originalUrl));
  res.on('finish', function() {
     // console log the returned status code
    return console.log(chalk.cyan(res.statusCode));
  });
  next();
});

// Fallback for all page requests
app.use(function(req, res, next) {
  res.send('You idiot. This page does not exist.');
});

// listen for requests on port 3000
app.listen(port, function() {
  console.log(chalk.magenta(`Listening intently on port ${port}`));
});
