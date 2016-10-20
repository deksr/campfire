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
      console.log(data.length);

      for (var i = 0; i < data.length; i++) {
        console.log(data[i])
        $("ul").append('<li>' + '<a href="'+ data[i].id +'">'+  data[i].name + '</a>'+ '</li>');
      }             
    }
  });

});




