var express = require('express');
var mysql = require('mysql');
const { response } = require('../app');
var router = express.Router();

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodecrud'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
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


// Form
router.get('/products/product-form', function(req, res, next) {
  res.render('product-form');
});

//Insert
router.post('/products/form-process-product', function(req, res, next) {
  console.log(req.body);

  const mypbodydata = {
    product_name : req.body.txt1,
    product_details : req.body.txt2,
    product_price : req.body.txt3,
    product_stock : req.body.txt4
  }

  connection.query("insert into tbl_products set ?", mypbodydata, function(err,result) {
    if (err) throw err;
    res.redirect("/products/product-form");
  });
});


// Display
router.get('/products/product-display', function (req, res, next) {

  connection.query("select * from tbl_products ", function (err, db_rows) {
    if (err) throw err;
    console.log(db_rows);
    res.render('product-display', { db_rows_array: db_rows });
  });
});

// Delete
router.get('/products/delete/:id', function (req, res, next) {
  var deleteid = req.params.id;
  console.log(deleteid);
  connection.query("delete from tbl_products where product_id = ?",[deleteid], function (err, db_rows) {
    if (err) throw err;
    console.log(db_rows);
    res.redirect('/products/product-display')
  });
});

// Edit route GET
router.get('/products/product-edit/:id', function (req, res, next) {
  var editid = req.params.id;
  console.log("editid");
  connection.query("select * from tbl_products where product_id = ?", [editid], function (err, db_rows) {
    if (err) throw err;
    console.log(db_rows);
    res.render('product-edit', { db_rows_array: db_rows });
  });
});
// Edit route POST
router.post('/products/product-edit/:id', function (req, res, next) {
  var editid = req.params.id;
  var pname = req.body.txt1;
  var pdetails = req.body.txt2;
  var pprice = req.body.txt3;
  var pstock = req.body.txt4;
  console.log("editid");
  connection.query("update tbl_products set product_name=?, product_details=?, product_price=?, product_stock=? where product_id=?", [pname, pdetails, pprice, pstock, editid], function (err, db_rows) {
    if (err) throw err;
    console.log(db_rows);
    res.redirect('/products/product-display');
  });
});


// Category

// Form
router.get('/categories/category-form', function(req, res, next) {
  res.render('category-form');
});

//Insert
router.post('/categories/form-process-category', function(req, res, next) {
  console.log(req.body);

  const mycbodydata = {
    category_name : req.body.txt5,
  }

  connection.query("insert into tbl_categories set ?", mycbodydata, function(err,result) {
    if (err) throw err;
    res.redirect("/categories/category-form");
  });
});


// Display
router.get('/categories/category-display', function (req, res, next) {

  connection.query("select * from tbl_categories ", function (err, db_rows) {
    if (err) throw err;
    console.log(db_rows);
    res.render('category-display', { db_rows_array: db_rows });
  });
});

// Delete
router.get('/categories/delete/:id', function (req, res, next) {
  var deleteid = req.params.id;
  console.log(deleteid);
  connection.query("delete from tbl_categories where category_id = ?",[deleteid], function (err, db_rows) {
    if (err) throw err;
    console.log(db_rows);
    res.redirect('/categories/category-display')
  });
});

// Edit route GET
router.get('/categories/category-edit/:id', function (req, res, next) {
  var editid = req.params.id;
  console.log("editid");
  connection.query("select * from tbl_categories where category_id = ?", [editid], function (err, db_rows) {
    if (err) throw err;
    console.log(db_rows);
    res.render('category-edit', { db_rows_array: db_rows });
  });
});
// Edit route POST
router.post('/categories/category-edit/:id', function (req, res, next) {
  var editid = req.params.id;
  var cname = req.body.txt5;
  console.log("editid");
  connection.query("update tbl_categories set category_name=? where category_id=?", [cname, editid], function (err, db_rows) {
    if (err) throw err;
    console.log(db_rows);
    res.redirect('/categories/category-display');
  });
});


// Users

  // Form
  router.get('/users/user-form', function(req, res, next) {
    res.render('user-form');
  });
  
  //Insert
  router.post("/users/form-process-user", function(req, res, next) {
    console.log(req.body);
  
    const myubodydata = {
      user_name : req.body.txt6,
      user_gender : req.body.txt7,
      user_email : req.body.txt8,
      user_password : req.body.txt9,
      user_mobile : req.body.txt10,
      user_address : req.body.txt11
    }
  
    connection.query("insert into tbl_users set ?", myubodydata, function(err,result) {
      if (err) throw err;
      res.redirect("/users/user-form");
    });
  });
  
  
  // Display
  router.get('/users/user-display', function (req, res, next) {
  
    connection.query("select * from tbl_users ", function (err, db_rows) {
      if (err) throw err;
      console.log(db_rows);
      res.render('user-display', { db_rows_array: db_rows });
    });
  });
  
  // Delete
  router.get('/users/delete/:id', function (req, res, next) {
    var deleteid = req.params.id;
    console.log(deleteid);
    connection.query("delete from tbl_users where user_id = ?",[deleteid], function (err, db_rows) {
      if (err) throw err;
      console.log(db_rows);
      res.redirect('/users/user-display')
    });
  });
  
  // Edit route GET
  router.get('/users/user-edit/:id', function (req, res, next) {
    var editid = req.params.id;
    console.log("editid");
    connection.query("select * from tbl_users where user_id = ?", [editid], function (err, db_rows) {
      if (err) throw err;
      console.log(db_rows);
      res.render('user-edit', { db_rows_array: db_rows });
    });
  });
  // Edit route POST
  router.post('/users/user-edit/:id', function (req, res, next) {
    var editid = req.params.id;
    var uname = req.body.txt6;
    var ugender = req.body.txt7;
    var uemail = req.body.txt8;
    var upassword = req.body.txt9;
    var umobile = req.body.txt10;
    var uaddress = req.body.txt11;
    console.log("editid");
    connection.query("update tbl_users set user_name=?, user_gender=?, user_email=?, user_password=?, user_mobile=?, user_address=? where user_id =?", [uname, ugender, uemail, upassword, umobile, uaddress, editid], function (err, db_rows) {
      if (err) throw err;
      console.log(db_rows);
      res.redirect('/users/user-display');
    });
  });
  


module.exports = router;