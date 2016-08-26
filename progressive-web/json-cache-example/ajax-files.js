$(document).ready(function(){
	console.log("hello this is ajax-files.js");

	$.ajax({
    url: "json-data.json",
    method: 'GET',
    dataType: "json"
  }).then(function(data) {
  	console.log("what?")
    console.log(data.employees); 
  })

})