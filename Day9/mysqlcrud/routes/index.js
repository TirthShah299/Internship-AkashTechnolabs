var express = require('express');
var mysql = require('mysql');
const { response } = require('../app');
var router = express.Router();

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodedemo'
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

connection.connect(function (err) {
  if (!err) {
    console.log("DB Connected");
  }
  else {
    console.log("DB COnnection Issue")
  }
})
// Products
router.get('/products/add', function (req, res, next) {
  res.render('add-form');
});

//Insert
router.post('/products/add-process', function (req, res, next) {
  console.log(req.body);

  const mybodydata = {
    product_name: req.body.txt1,
    product_details: req.body.txt2,
    products_price: req.body.txt3
  }

  connection.query("insert into tbl_product set ?", mybodydata, function (err, result) {
    if (err) throw err;
    res.redirect("/products/add");
  });

});

// Display
router.get('/products/display', function (req, res, next) {

  connection.query("select * from tbl_product ", function (err, db_rows) {
    if (err) throw err;
    console.log(db_rows);
    res.render('display', { db_rows_array: db_rows });
  });
});

// Delete route
router.get('/products/delete/:id', function (req, res, next) {
  var deleteid = req.params.id;
  console.log(deleteid);
  connection.query("delete from tbl_product where product_id = ?", [deleteid], function (err, db_rows) {
    if (err) throw err;
    console.log(db_rows);
    res.redirect('/products/display');
  });
});

// Edit route GET
router.get('/products/edit/:id', function (req, res, next) {
  var editid = req.params.id;
  console.log("editid");
  connection.query("select * from tbl_product where product_id = ?", [editid], function (err, db_rows) {
    if (err) throw err;
    console.log(db_rows);
    res.render('edit', { db_rows_array: db_rows });
  });
});
// Edit route POST
router.post('/products/edit/:id', function (req, res, next) {
  var editid = req.params.id;
  var pname = req.body.txt1;
  var pdetails = req.body.txt2;
  var pprice = req.body.txt3;
  console.log("editid");
  connection.query("update tbl_product set product_name=?, product_details=?, products_price=? where product_id=?", [pname, pdetails, pprice, editid], function (err, db_rows) {
    if (err) throw err;
    console.log(db_rows);
    res.redirect('/products/display');
  });
});



module.exports = router;
