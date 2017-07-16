const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/tweets/:id', function(req, res) {
  var id = req.params.id;
  var list = tweetBank.find({'id': id});
  res.render('index', { tweets: list });
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find({'name': name});
  res.render('index', { tweets: list });
});

router.get('/', function(req, res) {
  let tweets = tweetBank.list();
  res.render('index', { tweets: tweets, showForm: true });
});

module.exports = router;
