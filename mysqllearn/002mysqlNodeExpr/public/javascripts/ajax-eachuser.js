$( document ).ready(function() {
  console.log( "ready!" );
  console.log(document.location.pathname)
  $.ajax({
    type: "GET",
    dataType: 'JSON', 
    url: document.location.pathname+'/display',
    success: function (data) {
      console.log(data); for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        $("ul").append('<li>' + data[i].name + '</li>');
      } 

    }
  });
})