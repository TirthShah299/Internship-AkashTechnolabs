var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});



router.get('/training/php/laravel', function(req, res, next) {
  res.send("Sure we will provide training in Laravel");
});

router.get('/training/nodejs/expressjs', function(req, res, next) {
  res.send("Sure we will provide training in expressjs");
});

router.get('/master', function(req, res, next) {
  res.render('master');
});

router.get('/myform', function(req, res, next) {
  res.render('form');
});


router.post('/form-process', function(req, res, next) {
  var a = parseInt(req.body.txt1);
  var b = parseInt(req.body.txt2);
  var c = a + b;
  var msg ="";
  var mycolor ="";
  
  if(c>100){
    msg = "Pass"
    mycolor = "green"
  }
  else{
    msg = "Fail"
    mycolor = "red"
    
  }
  console.log(req.body);
  console.log("A value is " + a + " B value is" +b);
  res.render('ans', {mya:a, myb:b, myc:c, mymsg:msg,mycolor:mycolor});
});

router.get('/form1', function(req, res, next) {
  res.render('form1');
});
router.post('/form-process1', function(req, res, next) {
  console.log(req.body);
});


module.exports = router;