var express = require('express');
var router = express.Router();
var path    = require("path");
// var Post = require('../models/posts');




/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');


  req.getConnection(function(err, connection){
		if(err) return next(err);

		connection.query('SELECT * FROM people', function(err, rows){
			if(err) console.log('Error selecting: %s ', err);
			console.log(rows)
      res.json(rows);
			// res.render('customers', {page_title: 'Customers - CMR', data: rows});
		});
	});

});

module.exports = router;
