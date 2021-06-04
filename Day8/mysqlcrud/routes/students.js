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

router.get('/students/add', function(req, res, next) {
  res.render('sform');
});

router.post('/students/add-process', function(req, res, next) {
  console.log(req.body);
  
  const mybodydata = {
    product_name : req.body.txt1,
    product_details : req.body.txt2,
    products_price : req.body.txt3
  }
  
  connection.query("insert into tbl_product set ?",mybodydata,function(err,result){
    if(err) throw err;
    res.redirect("/students/add");
  });
  
});

router.get('/students/display', function(req, res, next) {
  
  connection.query("select * from tbl_product ",function(err,db_rows){
    if(err) throw err;
    console.log(db_rows);
    res.render('display', {db_rows_array:db_rows});
  });
});



module.exports = router;
