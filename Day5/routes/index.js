var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/training/php/laravel', function(req, res, next) {
  res.send("Sure we will provide training in Laravel");
});

router.get('/training/nodejs/expressjs', function(req, res, next) {
  res.send("Sure we will provide training in expressjs");
});

module.exports = router;