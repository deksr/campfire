import ReactDOM from 'react-dom';
import React, { Component } from 'react';


// initially we set it as true but when we click the event, it should turn to falSE. If it is true then render
// one type of  element

// parent of User
var App = React.createClass({

	getInitialState: function () {
    return {
      isHeaderHidden: true
    }; 
  },

  handleClick: function () {

    this.setState({
      isHeaderHidden: !this.state.isHeaderHidden
    });
    console.log("console from event"  + " "  + this.state.isHeaderHidden)
  },

  render: function () {

  	var title = "Stateful React Component"
    console.log("console from render" + " "  + this.state.isHeaderHidden)

  	if (this.state.isHeaderHidden){
      return (
      	<div> 
      	 <h3> {title} </h3>
          <button onClick= {this.handleClick}> press me </button>
        </div>  	
      )
    }

    return (
    	<div> 
          <h1> {this.state.title} </h1>
          <button onClick= {this.handleClick}> press me </button>
        </div> 
    )
  } 
});


// parent of App
ReactDOM.render(<App/>, document.getElementById("root"));

