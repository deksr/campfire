var express = require('express');
var router = express.Router();
var path    = require("path");
// var Post = require('../models/posts');




/* GET- users page with form and all. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');

  req.getConnection(function(err, connection){
		if(err) return next(err);
	  res.render('users/users-form', {page_title: 'Customers - CMR'});
	});
});



/* Index - this json resides on the server. */
router.get('/usersjson', function(req, res, next) {
  // res.send('respond with a resource');

  req.getConnection(function(err, connection){
		if(err) return next(err);

		connection.query('SELECT * FROM users', function(err, rows){
			if(err) console.log('Error selecting: %s ', err);
			console.log(rows)
      res.json(rows);
		});
	});

});



/* SHOW the item */
router.get('/:id', function(req, res, next) {

})








/* Create and insert objects to db. */
router.post('/postme', function(req, res, next) {
  // res.send('respond with a resource');
  console.log(req.body)
  console.log(req.body.name + req.body.age)
  var eachuser = {
    name: req.body.name,
    age: req.body.age
  };

  req.getConnection(function(err, connection){
    var query = connection.query("INSERT INTO users SET ?",eachuser,function(err, data){
      // console.log(query);
      if (err) {
        console.error(err);
        throw err;
      }
      res.send(200,'success');
       // res.json(rows);
       // res.redirect('/');;
    });
  });
});


router.delete('/:id', function(req, res, next) {


})

module.exports = router;
