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