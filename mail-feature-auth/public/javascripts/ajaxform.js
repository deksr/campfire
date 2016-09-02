console.log("ajax form here");

$('.sub-button').on('click', function(e) {
  e.preventDefault();
  console.log("button clicked")
   
  var theName = $(".person-name").val();
  var thesubject = $(".message-subject").val();
  var theText = $(".message-text").val();

  console.log(theName + " " + thesubject +" " + theText)
   

  $.ajax({
	  url: "/pluto",
	  type: "POST",
	  data: {
	  	from : theName,
	  	subject : thesubject,
	  	text : theText
	  },
	  dataType: "json"
  }).done(function(msg) {
    console.log("done function")
   });
    


  // $.ajax({
  //   url: 'Demo.json',
  //   dataType: 'json',
  //   beforeSend: function() {
  //       $loader.show();
  //   }
  // }).done(successFunction)
  //   .fail(errorFunction)
  //   .always(alwaysFunction);
});

