var express = require('express');
var router = express.Router();
var request = require('request');

const rootURL = 'https://api.github.com/';
// var token = process.env.GITHUB_TOKEN;



/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.post('/', function(req, res, next) {
//   console.log(username: ${req.body.username});
//   res.render('index');
// });


// This code makes a request to the api from the server and then parses the json and renders the ejs template

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
	    // update the options url to fetch the user's repos
	  options.url = userData.repos_url;
	  request(options, function(err, response, body) {
	      // add a repos property
	    userData.repos = JSON.parse(body);
	    console.log(userData.repos[0]);
	    res.render('index', {title: 'Express', userData: userData});
	  });
	});

});



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


router.get('/', function(req, res) {
  res.render('index', { title: 'Express', userData: null});
});

module.exports = router;
