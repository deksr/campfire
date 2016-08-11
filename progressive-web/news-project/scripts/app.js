console.log("this is app.js");

$(document).ready(function(){
  // e.preventDefault();
  console.log("ajax-jquery");
  var theNewsData;
  var theimageData = [];
  var poppedimage = [];


//   $.ajax({
//     url: 'sometsecretkey',
//     method: 'GET',
//     dataType: "json"
//   }).then(function(data) {
//     console.log(data.results); 


//     theNewsData = data.results 

//     for (var i = 0; i < theNewsData.length; i++) {
//       // console.log(theNewsData[i].abstract);
//       if (theNewsData[i].multimedia == ""){
//         console.log("no image found")
//         $(".hello").append('<li class="col-sm-4">' + theNewsData[i].abstract  +'</li>' + '<br>') 
//       }
//       else{
//         $(".hello").append('<li class="col-sm-4">' + theNewsData[i].abstract + '<img class="col-sm-2 img-responsive" src='+ theNewsData[i].multimedia[3].url+ '>' +'</li>' + '<br>');
//         console.log(theNewsData[i].multimedia[3].url);
//       }
//     };
//   });



// // run the service worker

//   (function(){  
//   	'use strict';
//      console.log("hello hello");

//     if ('serviceWorker' in navigator) {
//   	  navigator.serviceWorker
//   	  .register('./serviceworker.js')
//   	  .then(function() { 
//   	  	console.log('Service Worker Registered'); 
//   	  });
//     }
//   })()


});



// simple pop example 

//   var allArrays = [['a', 'b'], ['c'], ['d', 'e', 'f']]
//   var emptarry = [];

//   for(var j = 0; j < allArrays.length; j++) {
//      // console.log("first" + " "+  allArrays[j].pop());
//      emptarry.push(allArrays[j].pop())
//      console.log(emptarry)
// }


