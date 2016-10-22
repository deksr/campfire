$( document ).ready(function() {
  console.log( "ready!" );
  console.log(document.location.pathname)
  $.ajax({
    type: "GET",
    dataType: 'JSON', 
    url: document.location.pathname+'/display',
    success: function (data) {
      console.log(data);            
    }
  });
})