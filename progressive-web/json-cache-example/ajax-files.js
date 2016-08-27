$(document).ready(function(){
	console.log("hello this is ajax-files.js");

	$.ajax({
    url: "json-data.json",
    method: 'GET',
    dataType: "json"
  }).then(function(data) {
  	console.log("what?")
    console.log(data.employees);
    var employeeObjects =  data.employees

	  for (var i = 0; i < employeeObjects.length; i++) {
	  	console.log(employeeObjects[i].firstName)
		  $("ul").append('<li>'  + employeeObjects[i].firstName  +'</li>' + '<br>');
	  };
    
  })

})