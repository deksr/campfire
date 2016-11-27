import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import request from 'superagent';

{/*Math.random(Date.now())*/}



var GifItem = React.createClass({

  checktosee: function(){
    console.log(this.props.gif.images.downsized.url)
  },

  render: function(){
    return (
      <li>
        <img src={this.props.gif} />
        <button onClick={this.checktosee}> press me to console </button>
      </li>
    )
  }
})





// **************
var GifList = React.createClass({


  render: function () {
    return (
  		<ul> 

        {/*{console.log("hohoh" + this.props.gifs)} */}
	  	  {this.props.gifs.map((image)=>{
	  		  return
	  		  <GifItem key={image.id} gif={image.images}/> 
	  	  })} 
  		</ul>
  	)
  }
})


// **************
var Searchbar = React.createClass({

	getInitialState: function () {
    return {
      terms: ''
    }; 
  },


  // this is an event:
  onInputChange: function(e){
  	this.setState({
    	terms: e.target.value
    });

    var boo = this.props.onTermChange(e.target.value);
    console.log("im from state" + this.state.terms)
  },


	render: function(){
		return (
      <div>
        <h3>Search!</h3>
        <input onChange={this.onInputChange} />
      </div>
    )
	}

})


// **************
var App = React.createClass({

	getInitialState: function () {
    return {
      gifs: []
    }
    // this.handleTermChange = this.handleTermChange.bind(this);
  },


	handleTermChange: function(bla){
		console.log("handle" + bla)
		var url = 'http://api.giphy.com/v1/gifs/search?q=${bla.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC';
		request.get(url, (err, res) => {
      {/*console.log(res.body.data)*/}
      this.setState({ gifs: res.body.data })
    });
	},


	render: function(){
		return (
		  <div>
        <h1>Giphy Search!</h1>
        <Searchbar onTermChange = {this.handleTermChange} />
      {/* we are storing a function handleTermChange inside a props so that it is acessible by another component.  */}
       <GifList gifs={this.state.gifs} />
      </div>
		)
	}
})


ReactDOM.render(<App />, document.getElementById('app'));