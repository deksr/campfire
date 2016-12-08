import React from 'react';
import ReactDOM from 'react-dom';
 
var MainApp = React.createClass({

  render: function () {
    return (
      <div>
          hello there from react
          how cool right? yes
      </div>
    )
  }
});
 
ReactDOM.render(<MainApp/>, document.getElementById('hello'));