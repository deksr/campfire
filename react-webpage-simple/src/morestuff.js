import ReactDOM from 'react-dom';
import React, { Component } from 'react';


  
var ComponentOne = React.createClass({

  getInitialState: function() {
    return {
      edit: "hello"
    } 
  },



  // eventhandler on the page:
  editme: function () {
    alert('Editing comment');
    this.setState({
      edit: "there"
    })
    console.log(this.state.edit)  
  },

  removeme: function () {
    alert('Removing comment');
    this.setState({
      remove: true
    });

  },

  

  render: function(){
    return (
      <div>
      {this.props.name}
        <button onClick={this.editme}>Edit</button>
        <button onClick={this.removeme}>Remove</button>
      </div>
    )
  } 
    
})



var FakeDom = React.createClass({
  //you can't pass state from one component to another unlike props.


  getInitialState: function() {
    return {
      uidata: []
    } 
  },


  componentDidMount: function() {
    // ajaxed data:
    var data = [{
      name: "Ann",
      hobby: "music",
      id: Math.random(Date.now())
    },
    {
      name: "Jill",
      hobby: "trecking",
      id: Math.random(Date.now())
    },
    {
      name: "Karen",
      hobby: "books",
      id: Math.random(Date.now())
    }]


    var that  = this;
    that.setState({
      uidata: data
    })//setting the data
  },


  // you can have different types that you may want to render:




  // render on dom
  render: function () {
    return (
      <div>
    
          {this.state.uidata.map(function(eachone) {
            return <ComponentOne key= {eachone.id} name={eachone.name}/>
            console.log(eachone.name)
            console.log(eachone.id)

          })}     
    
      </div>
    );
  }
});



// render on node on dom
ReactDOM.render( <FakeDom /> , document.getElementById("root"));