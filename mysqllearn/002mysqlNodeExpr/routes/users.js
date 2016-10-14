var express = require('express');
var router = express.Router();
var path    = require("path");
// var Post = require('../models/posts');




/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');


  req.getConnection(function(err, connection){
		if(err) return next(err);

		connection.query('SELECT * FROM users', function(err, rows){
			if(err) console.log('Error selecting: %s ', err);
			console.log(rows)
      // res.json(rows);
			res.render('users', {page_title: 'Customers - CMR', data: rows});
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


  // exports.create = function(userId, text, done) {
//   var values = [userId, text, new Date().toISOString()]
  
//   db.get().query('INSERT INTO comments (user_id, text, date) VALUES(?, ?, ?)', values, function(err, result) {
//     if (err) return done(err)
//     done(null, result.insertId)
//   })
// }


 //  req.getConnection(function(err, connection){
	// 	if(err) return next(err);

	// 	connection.query('SELECT * FROM users', function(err, rows){
	// 		if(err) console.log('Error selecting: %s ', err);
	// 		console.log(rows)
 //      // res.json(rows);
	// 		res.render('users', {page_title: 'Customers - CMR', data: rows});
	// 	});
	// });

});

module.exports = router;
