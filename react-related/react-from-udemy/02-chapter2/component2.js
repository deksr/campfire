import React from 'react';
import ReactDOM from 'react-dom';
// import ApiKey from './api-key-env.js'
import Searchbar from './searchBar.js';
import Ytsearch from 'youtube-api-search';
import VideoList from './video-list.js'



var API_SECRET= 'sjaksj';


 
class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {videos: []}

		Ytsearch({key: API_SECRET, term: 'surfboards'}, (ytvideos) => {
      console.log(ytvideos);
      this.setState({videos: ytvideos});
      // this.setState({videos});//syntatic sugar

    })	
	}


  render() {
    return (
    <div>
       <Searchbar/>
       <VideoList videosToUl={this.state.videos}/>
       // you can iterate here itself but since we have to pass it to the child component, we will 
      </div>
    )
    
  }
}
 
ReactDOM.render(<App/>, document.querySelector('.world'));