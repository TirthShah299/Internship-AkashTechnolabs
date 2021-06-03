var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Product and Form');
});

router.get('/display', function(req, res, next) {
  res.render('Product Form');


module.exports = router;
