console.log("ajax loaded");


$('.submit-class').click(function(event) {
  event.preventDefault();
  console.log("ajax function started")
  var theName = $('.name-class').val();
  var theAge = $('.age-class').val()
  console.log(theName + theAge);

  $.ajax({
  	data: { name:theName, age:theAge },
    type: "POST",
    dataType: 'JSON', 
    url: "users/postme",
    success: function (msg) {
      console.log(msg);                
    }
  });
});

$( document ).ready(function() {
  console.log( "ready!" );

  $.ajax({
    type: "GET",
    dataType: 'JSON', 
    url: "users/usersjson",
    success: function (data) {
      console.log(data);                
    }
  });
  
    // $('.get-users')

    // for (var i = 0; i < cool.length; i++) {
    //   console.log(cool[i])
    //   $("ul").append('<li>' + cool[i] + '</li>');
    // }
});




