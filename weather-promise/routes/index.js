var express = require('express');
var router = express.Router();
var thirdparty = require('../node-third-party-api-module/weather-api');



/* GET home page. */
// router.get('/', function(req, res, next) {

// 	thirdparty.weatherDisplay

//   res.render('index', { title: 'Express' });

// });

router.get('/', thirdparty.weatherDisplay );



module.exports = router;
