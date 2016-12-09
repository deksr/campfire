import React from 'react';
import ReactDOM from 'react-dom';


// function 
// ines5:
// function(something, somethingElse){
// 	return something*somethingElse
// }

// ines6:
// (something, somethingElse) =>  {
// 	return something*somethingElse
// }









// var FirstEs5 = React.createClass({
// 	render: function() {
//     return (
//       <div>React simple starter es5</div>
//     );
//   }
// })


class FirstEs6 extends React.Component {
  render() {
    return (
      <div>React simple starter</div>
    );
  }
}




ReactDOM.render(<FirstEs6/>, document.getElementById('es6-learning'));