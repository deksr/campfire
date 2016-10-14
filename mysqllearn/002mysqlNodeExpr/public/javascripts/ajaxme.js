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


