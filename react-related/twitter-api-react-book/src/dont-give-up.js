import ReactDOM from 'react-dom';
import React, { Component } from 'react';

// ********************************
var Header = React.createClass({
	render: function (){
		return (
			<div> 
				<h4>This is the logo of the app and stateless component</h4>
			</div>
		)
	}
})


// ********************************
var AllStuff = React.createClass({

	
	Allstufffunction: function(){
		this.props.searchFunct("hi")
	},


	render: function () {
    return (
    	<div>
    	  <h1> : {this.Allstufffunction}</h1> 
      </div>
    )
  }

})



// ********************************
var SearchBar = React.createClass({

	getInitialState() {
		return {
      inputStuff:''
		}
		// {console.log(this.state.inputStuff)}
	},



	searchFunction: function(something){
		console.log(something)
	  console.log("hi i am in searchbar component but i can be stored in a prop like this-->{this.searchFunction} and then called in another component")
	},

	

	render: function (){
		return (
			<div> 
			<h4> This is the searchbar</h4>
			<input type="text" onChange={this.searchFunction} /> 
			</div>
		)
	}
})

// ********************************
var App = React.createClass({

	render: function () {
    return (
    	<div> 
	    	<Header/>
	    	<SearchBar/> 
	      <h4> list of albums </h4>
	      <AllStuff/> 

    	</div>
    )  
  }

})

ReactDOM.render(<App/>, document.getElementById("root"));