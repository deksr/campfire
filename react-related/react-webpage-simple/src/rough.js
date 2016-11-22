import ReactDOM from 'react-dom';
import React, { Component } from 'react';


// this an example for grabbing value from input field

var MainApp = React.createClass({

  submitButton:function(event){
    event.preventDefault(); 
    console.log("clicked");
    var author = this.refs.inputValue.value;
    console.log(author)

  }, 


  render: function () {
    return (
      <div>
          <form >
            <input type="text" ref="inputValue"/><br/><br/>  
            <button onClick={this.submitButton}>ADD</button>
          </form>
      </div>
    )
  }
});


ReactDOM.render(<MainApp/>, document.getElementById("root"));