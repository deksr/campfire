import ReactDOM from 'react-dom';
import React, { Component } from 'react';

// var stringword = "Devatha"
// console.log(stringword.substring(stringword.length - 1)) 

var App = React.createClass({
	getInitialState: function(){
    return {
      theWord: ''
    } 
  },



  displayFunction: function(e){
  	console.log(e.target.value)
  	this.setState({
    	theWord: e.target.value
    });
  }, 


  deleteLetter: function(){
  	console.log(this.state.theWord)
  	var typedWord = this.state.theWord;
  	this.setState({
    	theWord: typedWord.substring(0, typedWord.length - 1)
    });
  },
  

  render: function () {
    return (
      <div>
        <p> Delete letter app</p>
        <input type="text" onChange={this.displayFunction}/>
        <p> {this.state.theWord}</p> 
        <button onClick={this.deleteLetter}> Delete Last letter</button>
      </div>
    )
  } 
});


ReactDOM.render(<App/>, document.getElementById("root"));