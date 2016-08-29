
$(document).ready(function(){

	$.ajax({
    url: "http://api.nytimes.com/svc/news/v3/content/all/all/720.json?api-key=a85d3df0df755fb46e711b6288cc1714:8:73611994",
    method: 'GET',
    dataType: "json"
  }).then(function(data) {
    console.log(data.results); 
  })
})

