import ReactDOM from 'react-dom';
import React, { Component } from 'react';

// mainpage
var Article = React.createClass({
  render: function () {
    return (
      <div> 
        {this.props.name}
      </div>
    )
  } 
});


var Comment = React.createClass({
  render: function () {
    return (
      <div> 
        {this.props.post}
      </div>
    )
  } 
});


var Cartoon = React.createClass({
  render: function () {
    return (
      <div> 
        {this.props.joke}
      </div>
    )
  } 
});


var Feedback = React.createClass({

	render: function () {
    return (
    	<div> 
	      <h1> leave a feedback </h1>
	      <form onSubmit={this.submitEvent}>
          <input type="text" placeholder="color title..." required/><br/><br/>  
          <button>ADD</button>
        </form>
	    </div>
    )
  }

	



	submitEvent: function(){
	  console.log("clicked");
	}

});



var MainApp = React.createClass({
  render: function () {
    return (
      <div> 
	      <div> 
	        <h1> News Story </h1>
	        <Article name = "Brad"/>
	        <Article name = "Mary"/>
	      </div>

	      <div>
	        <h1> Comments </h1>
	        <Comment post = "This is so cool"/>
	        <Comment post = "I like this!"/>
	      </div>

	      <div> 
	        <h1> Side Stuff </h1>
	        <Cartoon joke = "snoopy"/>
	        <Cartoon joke = "popey"/>
	      </div>

	      <div> 

	      <Feedback />

	      </div>


	   

      </div>
    )
  } 
});



// sidebarstuff






// var Parent = React.createClass({
//   render: function () {
//     return (
//       <form onSubmit={e=>e.preventDefault()}>
//         <input type="text" placeholder="color title..." required/>  
//         <input type="color" required/>
//         <button>ADD</button>
//       </form>
//     )
//   } 
// });



ReactDOM.render(<MainApp/>, document.getElementById("root"));

