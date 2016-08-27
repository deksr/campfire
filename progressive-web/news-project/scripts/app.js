console.log("this is app.js");

$(document).ready(function(){
  // e.preventDefault();


 // time to display on the time-panel. using iffy here
  function ShowTimePanel(){
    var d = new Date();
    var hours = d.getHours()
    var minute = d.getMinutes()
    var day = d.getDay()

    var monthAndDate = d.toString().split(' ').splice(1,3).join(' ')// for month and date

    var amORpm = (hours >= 12) ? "p.m." : "a.m."; //for am or pm

    var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] //for weekday
    var weekDay;
    for (var i = 0; i < weekdays.length; i++) {
      if (day === i){
            weekDay=weekdays[i]
      }
    }
          // console.log( monthAndDate + " " + weekDay + " " + hours + ':' +minute + " " +amORpm);
          // console.log(new Date())
          // console.log(monthAndDate)
    $(".time-stamp").append(monthAndDate + " " + weekDay + " " + hours + ':' +minute + " " +amORpm)
  }

  ShowTimePanel();


 // ajax for the news
  console.log("ajax-jquery");
  var theNewsData;
  var theimageData = [];
  var poppedimage = [];

  $.ajax({
    url: "secret key",
    method: 'GET',
    dataType: "json"
  }).then(function(data) {
    console.log(data.results); 


    theNewsData = data.results 
    for (var i = 0; i < theNewsData.length; i++) {
      console.log(theNewsData[i].multimedia);


      if (theNewsData[i].multimedia == ""){
        console.log("no image found add a stock image" );
        $("ul").append('<li class="green-box">' +'<img class="the-image" src= "http://www.goseekadventures.com/wp-content/uploads/2014/06/New-York-Times-Social-Logo.jpg">' + theNewsData[i].abstract + '</div>' +'</li>' + '<br>');
      }
      else if((theNewsData[i].multimedia[3] == undefined || null)||(theNewsData[i].multimedia[2] == undefined || null) || (theNewsData[i].multimedia[1] == undefined || null)){
        console.log("if 4 images are not there in multimedia then print the the first one in the array:" + theNewsData[i].multimedia[1].url);
        $("ul").append('<li class="green-box">' +'<img class="the-image" src='+ theNewsData[i].multimedia[0].url+ '>' + '<div class="add-margin">' + theNewsData[i].abstract + '</div>' +'</li>' + '<br>');
      }
      
      else{
        console.log("this is the one babay" + theNewsData[i].multimedia[3].url);
        $("ul").append('<li class="green-box">' +'<img class="the-image" src='+ theNewsData[i].multimedia[3].url+ '>' + '<div class="add-margin">' + theNewsData[i].abstract + '</div>' +'</li>' + '<br>');
      }
    };

  });



  // run the service worker

  (function(){  
    'use strict';

    console.log("hello hello");


    if ('caches' in window) { 
      console.log("cache is present in the window");
    }



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


