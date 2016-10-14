var express = require('express');
var router = express.Router();
var path    = require("path");
// var Post = require('../models/posts');




/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');

  req.getConnection(function(err, connection){
		if(err) return next(err);
	  res.render('users/users-form', {page_title: 'Customers - CMR'});
	});
});




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


router.post('/postme', function(req, res, next) {
  // res.send('respond with a resource');
  console.log(req.body)
  console.log(req.body.name + req.body.age)
  var eachuser = {
    name: req.body.name,
    age: req.body.age
  };

  connection.query('INSERT INTO users VALUES ?',eachuser, function(err, rows){
			if(err) console.log('Error selecting: %s ', err);
			console.log(rows)
      // res.json(rows);
			// res.redirect('/');;
	});

});

module.exports = router;
