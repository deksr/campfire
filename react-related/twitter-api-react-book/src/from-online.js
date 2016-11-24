import ReactDOM from 'react-dom';
import React, { Component } from 'react';

var Searchbar = React.createClass({

	getInitialState: function () {
    return {
      terms: ''
    }; 
  },


  // onInputChange: function(term){
  // 	this.setState({
  //   	terms: term
  //   });

  //   var boo = this.props.onTermChange(term);
  //   console.log("im from state" + this.state.terms)
  // },


  onInputChange: function(e){
  	this.setState({
    	terms: e.target.value
    });

    var boo = this.props.onTermChange(e.target.value);
    console.log("im from state" + this.state.terms)
  },



	render: function(){
		return (
      <div>
        <h3>Search!</h3>
        <input onChange={this.onInputChange} />
      </div>
    )
	}

})



var App = React.createClass({

	handleTermChange: function(bla){
		console.log("handle" + bla)
	},


	render: function(){
		return (
		  <div>
        <h1>Giphy Search!</h1>
        <Searchbar onTermChange = {this.handleTermChange} />
      </div>
		)
	}

})


ReactDOM.render(<App />, document.getElementById('app'));