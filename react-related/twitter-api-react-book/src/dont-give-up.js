import ReactDOM from 'react-dom';
import React, { Component } from 'react';



var AllStuff = React.createClass({

	// ajax

	Allstufffunction: function(){
		console.log("hi there")
		this.props.sefuk("cool")
	},


	render: function () {
    return (
    	<div>
    	  <button onClick={this.Allstufffunction} /> 
      </div>
    )
  }

})


// ********************************
var SearchBar = React.createClass({

	getInitialState: function() {
		return {
			theInput: "hello"
		}		
	},



	changeState: function(){
		
		this.setState({
    	theInput: "theInputStuff"
    });
	},



	searchFunction: function(e){
		console.log(e.target.value);
		this.props.sefuk(e.target.value)
	  console.log("hi i am in searchbar ")
  },



	render: function (){
		return (
			<div> 
			<h4> This is the searchbar:{this.state.theInput}</h4>
			<input type="text" onChange={this.searchFunction}  /> 
			<button onClick={this.changeState} />
			</div>
		)
	}

})



// ********************************
var App = React.createClass({

	anotherFunkyFunction: function(something){
		console.log("hi from app" + something)
	},

	render: function () {
    return (
    	<div> 

    		<h4> list of albums </h4>
	      <AllStuff sefuk={this.anotherFunkyFunction}/> 

	    	<SearchBar sefuk={this.anotherFunkyFunction} />
    	</div>
    )  
  }

})


ReactDOM.render(<App/>, document.getElementById("root"));