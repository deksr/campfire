import ReactDOM from 'react-dom';
import React, { Component } from 'react';



var AllStuff = React.createClass({

	Allstufffunction: function(){
		console.log("hi there")
		this.props.sefuk("e.target.value")

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

	searchFunction: function(e){
		console.log(e.target.value);

	  console.log("hi i am in searchbar component but i can be stored in a prop like this-->{this.searchFunction} and then called in another component")
  },

	render: function (){
		return (
			<div> 
			<h4> This is the searchbar</h4>
			<input type="text" onChange={this.searchFunction}  /> 
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
	      <AllStuff/> 

	    	<SearchBar sefuk={this.anotherFunkyFunction} />

	     

    	</div>
    )  
  }

})


ReactDOM.render(<App/>, document.getElementById("root"));