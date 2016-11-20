import ReactDOM from 'react-dom';
import React, { Component } from 'react';

// here I'm learning events





var MainApp = React.createClass({

  getInitialState: function(){
    return {
      rstatus: null
    } 
  }, 


  submitEvent:function(event){
    event.preventDefault();
    console.log("clicked");


  },


  render: function () {
    return (
      <div>
        <div> 
          <h1> leave a feedback </h1>
          <form onSubmit={this.submitEvent}>
            <input type="text"/><br/><br/>  
            <button>ADD</button>
          </form>
        </div>

        <div> 
          <h1> showing feedbacks: </h1>
          <p> {this.state.rstatus}</p>
        </div>
      </div>
    )
  }
});

ReactDOM.render(<MainApp/>, document.getElementById("root"));
