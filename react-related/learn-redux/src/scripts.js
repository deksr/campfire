import ReactDOM from 'react-dom';
import React, { Component } from 'react';

var Users = React.createClass({

  render: function () {
    return (
      <div>
       hello there
      </div>
    )
  } 
});


ReactDOM.render(<Users/>, document.getElementById("root"));