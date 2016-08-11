console.log("this is app.js");

$(document).ready(function(){
  // e.preventDefault();
  console.log("ajax-jquery");
  var theNewsData;
  var theimageData = [];
  var poppedimage = [];


  $.ajax({
    url: 'secret-key',
    method: 'GET',
    dataType: "json"
  }).then(function(data) {
    console.log(data.results); 


    theNewsData = data.results 

    for (var i = 0; i < theNewsData.length; i++) {
      // console.log(theNewsData[i].abstract);

      if (theNewsData[i].multimedia == ""){
        console.log("no image found")
        $("ul").append('<li class="green-box">' +'<img class="the-image" src= "http://www.photoville.com/wp-content/uploads/2015/08/NYTimes_T_ONLY2.jpg">' + '<div class="add-margin">' + theNewsData[i].abstract + '</div>' +'</li>' + '<br>');
      }


      else{
        $("ul").append('<li class="green-box">' +'<img class="the-image" src='+ theNewsData[i].multimedia[3].url+ '>' + '<div class="add-margin">' + theNewsData[i].abstract + '</div>' +'</li>' + '<br>');
        console.log(theNewsData[i].multimedia[3].url);
      }
    };
  });



// run the service worker

  (function(){  
  	'use strict';
     console.log("hello hello");

    if ('serviceWorker' in navigator) {
  	  navigator.serviceWorker
  	  .register('./serviceworker.js')
  	  .then(function() { 
  	  	console.log('Service Worker Registered'); 
  	  });
    }
  })()


});



// simple pop example 

//   var allArrays = [['a', 'b'], ['c'], ['d', 'e', 'f']]
//   var emptarry = [];

//   for(var j = 0; j < allArrays.length; j++) {
//      // console.log("first" + " "+  allArrays[j].pop());
//      emptarry.push(allArrays[j].pop())
//      console.log(emptarry)
// }


