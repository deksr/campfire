import React from 'react';
import ReactDOM from 'react-dom';
import  axios from 'axios';

 
var MainApp = React.createClass({


	submitForm: function (e){
    event.preventDefault();
    console.log("clicked");
    console.log(this.refs.pinky.value);



    // learning how to set chrome cookies
    //***********************************

    chrome.cookies.set({
      "url": "http://developer.chrome.com/extensions/cookies.html",
      "name": "Sample1cookie",
      "value": "Dummy Data ok"}, function (cookie){
      console.log(JSON.stringify(cookie));
      console.log(chrome.extension.lastError);
      console.log(chrome.runtime.lastError);
    })


    ////


   // learning how to make request and  save the data in storage
    //************
     
    chrome.storage.sync.set({'newsValue': ["dummy data, dummy data"]}, function() {
      console.log('Settings saved');
    });


    var makeRequest = function(){
      var recieveData;
      var storedata = [];

       

      axios.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=60941c39a76e4f14902097a5030f4cab').then(function (response) {
        console.log(response.data.articles)
        recieveData = response.data.articles

        for (var i = 0; i < recieveData.length; i++) {
          storedata = recieveData[0].title //{newsValue: "some 
          // storedata.push(recieveData[i].title)
       
        };


        chrome.storage.sync.get('newsValue', function(result){
          console.log(result);

          if(result.newsValue === storedata ){
            console.log("same old news")
          }
          else{
            console.log("new news");
            chrome.storage.sync.set({'newsValue': storedata}, function() {
              console.log('new news saved');
            });
          }

        })

      })
    }

    window.setInterval(makeRequest, 50000)

   
    //   // learning how to save data in chrome extension's storage
    //   //************
  		// console.log("clicked");

  		// var oldWord = [this.refs.pinky.value, "hellothere"];
  		// var neWord = [];

  		// chrome.storage.sync.set({'oldvalue': oldWord}, function() {
    //         // Notify that we saved.
    //         console.log('Settings saved');
    //       });

  		// chrome.storage.sync.get('oldvalue', function(result){
  		// 	 console.log(result);
  		// })

    //   var id = "0"

    //   chrome.notifications.create(
    //     'id1', {
    //       type: "basic",
    //       title: "Hello",
    //       message: "world",
    //       iconUrl:"chro-ext-news-logo.png"
    //     },
    //     function(){
    //       console.log("yes please")

    //     }
    //   )
    //   //************

	},

  render: function () {
    return (
      <div>
        <p>hello there from react </p>
        <input type="text" ref="pinky"/> 
        <button onClick={this.submitForm}> click me! </button>

      </div>
    )
  }
});
 
ReactDOM.render(<MainApp/>, document.getElementById('hello'));