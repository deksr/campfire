var express = require('express');
var router = express.Router();
var request = require('request');

const rootURL = 'https://api.github.com/';
// var token = process.env.GITHUB_TOKEN;

// ***********
// A very simple way of getting and posting the request
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.post('/', function(req, res, next) {
//   console.log(username: ${req.body.username});
//   res.render('index');
// });

// ***********
// This code makes a request to the api from the server and then parses the json and renders the ejs template. This involves making one request.
//While making a post request, we are making it to the same route (post (/)) and access the same route using get(/)

// router.post('/', function(req, res) {
// 	console.log(req.body.username)
//   var options = {
//     url: rootURL + 'users/' + req.body.username,
//     headers: {
//       'User-Agent': 'deksr',
//       'Authorization': 'token ' + process.env.GITHUB_TOKEN
//     }
//   };

// 	request(options, function(err, response, body) {
// 	  var userData = JSON.parse(body);
// 	  // console.log(userData);
// 	    res.render('index', {title: 'Express', userData: userData});
// 	});

// });


// ***********
// This code makes a request to the api from the server and then responds back with json so the freont end can use it through front end framework

// router.post('/pluto', function(req, res) {
// 	console.log(req.body.username)
//   var options = {
//     url: rootURL + 'users/' + req.body.username,
//     headers: {
//       'User-Agent': 'deksr',
//       'Authorization': 'token ' + process.env.GITHUB_TOKEN
//     }
//   };

//   var userData;

//   request(options, function(err, response, body) {
// 	  var userData = JSON.parse(body);
// 	  console.log(userData)
// 	  res.json(userData)
// 	});

// });


router.post('/', function(req, res) {
	console.log(req.body.username)
  var options = {
    url: rootURL + 'users/' + req.body.username,
    headers: {
      'User-Agent': 'deksr',
      'Authorization': 'token ' + process.env.GITHUB_TOKEN
    }
  };

	request(options, function(err, response, body) {
	  var userData = JSON.parse(body);
	  // console.log(userData); //this is object object in the front end
	  options.url = userData.repos_url; //
	  request(options, function(err, response, body) {
      userData.repos = JSON.parse(body);// add a repos property

      console.log(userData.repos[0]);
      res.render('index', {userData: userData, title: 'Express'});
    });
	});

});





router.get('/', function(req, res) {
  res.render('index', { title: 'Express', userData: null});
});

module.exports = router;
