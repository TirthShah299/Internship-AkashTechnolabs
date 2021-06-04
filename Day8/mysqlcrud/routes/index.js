var express = require('express');
var mysql      = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'nodedemo'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

connection.connect(function(err){
  if(!err){
    console.log("DB Connected");
  }
  else{
    console.log("DB COnnection Issue")
  }
})
// Products
router.get('/products/add', function(req, res, next) {
  res.render('add-form');
});

router.post('/products/add-process', function(req, res, next) {
  console.log(req.body);
  
  const mybodydata = {
    product_name : req.body.txt1,
    product_details : req.body.txt2,
    products_price : req.body.txt3
  }
  
  connection.query("insert into tbl_product set ?",mybodydata,function(err,result){
    if(err) throw err;
    res.redirect("/products/add");
  });
  
});

router.get('/products/display', function(req, res, next) {
  
  connection.query("select * from tbl_product ",function(err,db_rows){
    if(err) throw err;
    console.log(db_rows);
    res.render('display', {db_rows_array:db_rows});
  });
});

// Students
router.get('/students/sform', function(req, res, next) {
  res.render('sform');
});

router.post('/students/sadd-process', function(req, res, next) {
  console.log(req.body);
  
  const mysbodydata = {
    student_name : req.body.txt4,
    student_mobile : req.body.txt5,
    student_class : req.body.txt6
  }
  
  connection.query("insert into tbl_students set ?",mysbodydata,function(err,result){
    if(err) throw err;
    res.redirect("/students/sform");
  });
  
});

router.get('/students/sdisplay', function(req, res, next) {
  
  connection.query("select * from tbl_students ",function(err,db_rows){
    if(err) throw err;
    console.log(db_rows);
    res.render('sdisplay', {db_rows_array:db_rows});
  });
});

// Users
router.get('/users/uform', function(req, res, next) {
  res.render('uform');
});

router.post('/users/uadd-process', function(req, res, next) {
  console.log(req.body);
  
  const myubodydata = {
    user_name : req.body.txt7,
    user_age : req.body.txt8,
    user_gender : req.body.txt9
  }
  
  connection.query("insert into tbl_users set ?",myubodydata,function(err,result){
    if(err) throw err;
    res.redirect("/users/uform");
  });
  
});

router.get('/users/udisplay', function(req, res, next) {
  
  connection.query("select * from tbl_users ",function(err,db_rows){
    if(err) throw err;
    console.log(db_rows);
    res.render('udisplay', {db_rows_array:db_rows});
  });
});

module.exports = router;
