var weather = require('weather-js');
var geocoder = require('geocoder');




module.exports = {
  weatherDisplay: displayWeather
};


  // see seeyesyes/003-event/script.js for importing our own modules
  // see seeyesyes/013-promises/script.js for reference on using promises

function displayWeather(req, res){
  
  // Geocoding api 
  var geocoderApi = function(){
  	return new Promise(function(resolve, reject){
	    geocoder.geocode("Atlanta, GA", function ( err, data ) {
	      if(err) {
	      	console.log(err);
	      }
	      else{
	        // console.log(JSON.stringify(data))
          resolve(JSON.stringify(data));
	      }
	    });
    })
  }



  // weather-js api
	var weatherJsApi = function(){
    return new Promise(function(resolve, reject){
    	weather.find({search: 'San Francisco, CA', degreeType: 'C'}, function(err, result) { 
			  if(err){
			  	console.log(err);
			  }
			  else{
			  	// console.log(JSON.stringify(result, null, 2));
			  	resolve(JSON.stringify(result, null, 2))
			  }
      });
    })		
	}


  
  geocoderApi().then(function(resultfromGocodeapi){
  	console.log(resultfromGocodeapi)
  	return weatherJsApi();
  }).then(function(resultfromweatherapi){
  	console.log(resultfromweatherapi)
    res.render('index', { title: 'Express' });
  })


}
