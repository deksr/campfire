var express = require('express');
var cookieParser = require('cookie-parser');
var request = require('request');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {

	var calArray;


	request('http://ipinfo.io', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    console.log(body) // Show the HTML for the Google homepage.
	    console.log(response) // Show the HTML for the Google homepage. 
	    if(response.body.region === 'New York' || 'NewYork'){
	    	calArray = ["a", "b", "c"]
	    	res.render('index', { title: 'Express', wishes: calArray });
	    }
	    else{
	    	console.log("nothing found")
	    	nyArray = ["d", "e", "f"]
	    	res.render('index', { title: 'Express', wishes: nyArray });
	    }
 
	  }
  })




});

module.exports = router;
