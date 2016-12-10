import React from 'react';
import ReactDOM from 'react-dom';
// import ApiKey from './api-key-env.js'
import Searchbar from './searchBar.js';
import Ytsearch from 'youtube-api-search';



var API_SECRET= 'n,n,n,n,mn,';


 
class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {videos: []}

		Ytsearch({key: API_SECRET, term: 'surfboards'}, (videos) => {
      console.log(videos);
      // this.setState({videos: videos});
      this.setState({videos});//syntatic sugar

    })	
	}


  render() {
    return (
    <div>
       <Searchbar/>
      </div>
    )
    
  }
}
 
ReactDOM.render(<App/>, document.querySelector('.world'));