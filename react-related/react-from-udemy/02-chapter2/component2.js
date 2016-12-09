import React from 'react';
import ReactDOM from 'react-dom';
// import ApiKey from './api-key-env.js'
import Searchbar from './searchBar.js'

 
class App extends React.Component {

  render() {
    return (
    <div>
       <Searchbar />
      </div>
    )
    
  }
}
 
ReactDOM.render(<App/>, document.querySelector('.world'));