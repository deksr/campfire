import ReactDOM from 'react-dom';
import React, { Component } from 'react';


  
var ComponentOne = React.createClass({

    // eventhandler on the page:
  edit: function () {
    alert('Editing comment');
  },

  remove: function () {
    alert('Removing comment');
  },


  render: function () {
    return (
      <div>
      {this.props.name}
        <button onClick={this.edit}>Edit</button>
        <button onClick={this.remove}>Remove</button>
      </div>
    )
  }

})



var FakeDom = React.createClass({
  //this should have state, you cant pass state from one component to another unlike props.


  getInitialState: function() {
    return {
      uidata: []
    } 
  },


  componentDidMount: function() {

    // ajaxed data:
    var data = [{
      name: "Ann",
      hobby: "music"
    },
    {
      name: "Jill",
      hobby: "trecking"
    },
    {
      name: "Karen",
      hobby: "books"
    }]


    var that  = this;
    that.setState({
      uidata: data
    })//setting the data
  },


  // render on dom
  render: function () {
    return (
      <div>
    
          {this.state.uidata.map(function(eachone) {
            return <ComponentOne name={eachone.name}/>
            console.log(eachone.name)
          })}     
    
      </div>
    );
  }
});



// render on node on dom
ReactDOM.render( <FakeDom /> , document.getElementById("root"));