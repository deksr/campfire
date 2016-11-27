import ReactDOM from 'react-dom';
import React, { Component } from 'react';

var App = React.createClass({
  getInitialState() {
  	return{
  		words: ''
  	}	
  },

  pressMe: function(){
  	this.state.words=="who?" ? this.setState({words: ["cool"]}) : this.setState({words: ["who?"]}) 	
  },


	render: function(){
		return (
		  <div>
        <button onClick={this.pressMe}> Press me </button>
        <p>{this.state.words} </p>
      </div>
		)
	}
})

ReactDOM.render(<App />, document.getElementById('app'));