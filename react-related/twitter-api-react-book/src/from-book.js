import ReactDOM from 'react-dom';
import React, { Component } from 'react';




// parent of User
var App = React.createClass({

	getInitialState: function () {
    return {
      isHidden: false
    }; 
  },

  render: function () {

  	if (this.state.isHidden){
  		return null;
  	}
    return (
      <div> 
        <h1> React component </h1>
      </div>
    )
  } 
});


// parent of App
ReactDOM.render(<App/>, document.getElementById("root"));

