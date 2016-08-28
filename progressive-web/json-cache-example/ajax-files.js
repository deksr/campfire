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




    // pushing data to the indexdb

    if("indexedDB" in window) { 
      console.log("Indexeddb suppported");
      indexedDB.deleteDatabase("json-cache-example-db",1)


      var db;
      var openRequest = indexedDB.open("json-cache-example-db",1);//creates a db

     
      // check to see if the tabel name exisits. if no then create a table
      openRequest.onupgradeneeded = function(e) { 
        console.log("running onupgradeneeded");
        var thisDB = e.target.result;
        if(!thisDB.objectStoreNames.contains("employeeOS")) {
          console.log("makng a new object store");
          thisDB.createObjectStore("employeeOS", {keyPath: "lastName"});
        }
      }// this console logs at the very first time the database is created




      openRequest.onsuccess = function(e) { 
        console.log("running onsuccess"); 
        db = e.target.result;

        var transaction = db.transaction(["employeeOS"],"readwrite");
        var store = transaction.objectStore("employeeOS");
        var singleperson;
        var request;

        //pushing each object nto the database as one entry
        for (var i = 0; i < employeeObjects.length; i++) {
          console.log(employeeObjects[i])
          singleperson = employeeObjects[i]

          request = store.add(singleperson); 
        };


        request.onerror = function(e) { 
          console.log("Error",e.target.error.name); //some type of error handler
        }

        request.onsuccess = function(e) { 
          console.log("Woot! Did it");
        }

      }
  
      openRequest.onerror = function(e) { 
        console.log("onerror!"); 
        console.dir(e);
      };

    }


    /////

	  for (var i = 0; i < employeeObjects.length; i++) {
	  	console.log(employeeObjects[i].firstName)
		  $("ul").append('<li>'  + employeeObjects[i].firstName  +'</li>' + '<br>');
	  };
    
  })

})