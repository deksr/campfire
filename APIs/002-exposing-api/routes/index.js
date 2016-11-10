var express = require('express');
var router = express.Router();
var request = require('request');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/pluto', function(req, res) {
  
  var latitude= 40.785091;
  var longitude= -73.968285;
  var userData;


  var options = {
    url: "http://api.wunderground.com/api/"+ process.env.secretkey +"/forecast/geolookup/conditions/q/" + latitude + "," + longitude + ".json"
  };


  request(options, function(err, response, body) {
	  var userData = JSON.parse(body);
	  console.log(userData)
	  res.status(200).json(userData)//always add status code
	});

});


module.exports = router;
