var express = require('express');
var router = express.Router();
var path    = require("path");
// var Post = require('../models/posts');

//------------------------
// CRUD- create, read, update, delete, show, index
//------------------------




//------------------------
/* GET- users page with form and all. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  req.getConnection(function(err, connection){
		if(err) return next(err);
	  res.render('users/users-form', {page_title: 'Customers - CMR'});
	});
});


//------------------------
/* Index - this json resides on the server. When the form page requests for displaying all the users, the request is sent to this route and json is served which then is accessed by ajax*/
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




//------------------------
/* SHOW- the item. This is for each item. when each user is clicked 'user/1', request is sent for that page. When the page is rendered, the ajax script loads and makes a request for data to another route `'/:id/display'`*/ 
router.get('/:id', function(req, res, next) {
  // console.log("server got hit");
  // console.log(req.params.id);
  req.getConnection(function(err, connection){
    if(err) return next(err);
    connection.query('SELECT id, name, age FROM users WHERE id='+ req.params.id +';', function(err, rows){
      if(err) console.log('Error selecting: %s ', err);
      console.log(rows)
      // res.json(rows);
      // res.render('index', { title: 'Express', data: rows });
    });
  })
  res.render('users/each-user', { title: 'Express'});
})




router.get('/:id/display', function(req, res, next) {
  console.log("server got hit");
  console.log(req.params.id);


  req.getConnection(function(err, connection){
    if(err) return next(err);
    connection.query('SELECT id, name, age FROM users WHERE id='+ req.params.id +';', function(err, rows){
      if(err) console.log('Error selecting: %s ', err);
      console.log(rows)
      res.json(rows);

    });
  })
})



//------------------------
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



//------------------------
/* delete objects from db. */
router.delete('/:id', function(req, res, next) {


})

module.exports = router;
