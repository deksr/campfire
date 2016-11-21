import ReactDOM from 'react-dom';
import React, { Component } from 'react';

// here I'm learning events



// Basic event 
// *****************

// var MainApp = React.createClass({

//   getInitialState: function(){
//     return {
//       rstatus: null
//     } 
//   }, 


//   submitEvent:function(event){
//     event.preventDefault();
//     console.log("clicked");


//   },


//   render: function () {
//     return (
//       <div>
//         <div> 
//           <h1> leave a feedback </h1>
//           <form onSubmit={this.submitEvent}>
//             <input type="text"/><br/><br/>  
//             <button>ADD</button>
//           </form>
//         </div>

//         <div> 
//           <h1> showing feedbacks: </h1>
//           <p> {this.state.rstatus}</p>
//         </div>
//       </div>
//     )
//   }
// });

// ReactDOM.render(<MainApp/>, document.getElementById("root"));






// // This is simple form submitting:
// // *******************************
// // reference:
// // http://stackoverflow.com/questions/23427384/get-form-data-in-reactjs


// var MainApp = React.createClass({

//   getInitialState: function(){
//     return {
//       feedback: null
//     } 
//   }, //always set an initial state. this diesplys none. 


//   submitInput: function(e){
//     this.setState({
//       feedback: e.target.value //pull out the value /set the value
//     });
//   }, //this is for the input form


//   submitButton:function(event){
//     event.preventDefault(); //if this iis not used then the page will refresh after the submit
//     console.log("clicked");
//     console.log(this.state.feedback); //here you can sens it to backend

//   }, //this is the events for the submit button



//   render: function () {
//     return (
//       <div>
//         <div> 
//           <h1> leave a feedback </h1>
//           <form >
//             <input type="text" name="feedbackMe" onChange={this.submitInput}/><br/><br/>  
//             <button onClick={this.submitButton}>ADD</button>
//           </form>
//         </div>

//         <div> 
//           <h1> showing feedbacks: </h1>
//           // <p> {this.state.feedback}</p> 
//         </div>
//       </div>
//     )
//   }
// });


// ReactDOM.render(<MainApp/>, document.getElementById("root"));



// to-do list:
// *******************************
// reference:
// http://stackoverflow.com/questions/23427384/get-form-data-in-reactjs


var MainApp = React.createClass({

  getInitialState: function(){
    return {
      feedback: []
    } 
  }, //always set an initial state. this displays empty array 



  submitButton:function(event){
    event.preventDefault(); //if this iis not used then the page will refresh after the submit
    console.log("clicked");
    console.log(this.refs.textInput.value);//extract the value

    var arrayDB = this.state.feedback; //assign the initial state to an array and then push it creating an object

    arrayDB.push({
      feedbackContent:this.refs.textInput.value,
      key: Date.now() //every object should have a key in react
    })

    this.setState({
    feedback: arrayDB
    });//try and set it to the initial state

    console.log(this.state.feedback)
  },



  render: function () {
    return (
      <div>
        <div> 
          <h1> leave a feedback </h1>
          <form >
            <input type="text" ref="textInput"/><br/><br/>  
            <button onClick={this.submitButton}>ADD</button>
          </form>
        </div>

        <div> 
          <h1> showing feedbacks: </h1>
          // <p> {this.state.feedback}</p> 
        </div>
      </div>
    )
  }
});


ReactDOM.render(<MainApp/>, document.getElementById("root"));


