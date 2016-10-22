console.log("ajax loaded");







$( document ).ready(function() {
  console.log( "ready!" );
  console.log(window.location.pathname.split('/'))



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



  $.ajax({
    type: "GET",
    dataType: 'JSON', 
    url: "users/usersjson",
    success: function (data) {
      console.log(data.length);

      for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        $("ul").append('<li>' + '<a class= "the-link" href="/users/'+ data[i].id +'">'+  data[i].name + '</a>'+ '</li>');
      }             
    }
  });


  // this should a href to some page path. it should have a class. When we click, even runs and ajax happens in turn calls the number and access the product and displays on the forward the path page


  $('.the-link').click(function(event) {
    $.ajax({
      type: "GET",
      dataType: 'JSON', 
      url: document.location.pathname,
      success: function (data) {
        console.log(data);            
      }
    });
  })
  

});




