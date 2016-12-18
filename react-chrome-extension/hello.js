import React from 'react';
import ReactDOM from 'react-dom';
 
var MainApp = React.createClass({


  // learning how to save data in chrome extension's storage
	submitForm: function (e){
	  event.preventDefault(); 
		console.log("clicked");
		console.log(this.refs.pinky.value);

		var oldWord = [this.refs.pinky.value, "hellothere"];
		var neWord = [];

		chrome.storage.sync.set({'oldvalue': oldWord}, function() {
          // Notify that we saved.
          console.log('Settings saved');
        });

		chrome.storage.sync.get('oldvalue', function(result){
			 console.log(result);
		})

    var id = "0"

    chrome.notifications.create(
      'id1', {
        type: "basic",
        title: "Hello",
        message: "world",
        iconUrl:"chro-ext-news-logo.png"
      },
      function(){
        console.log("yes please")

      }
    )

	},
	//************

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