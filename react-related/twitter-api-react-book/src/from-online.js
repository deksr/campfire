import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import request from 'superagent';



var GifItem = React.createClass({
  render: function () {
    return (
      <div> hello +  
      <img src={this.props.gif.url} />
      </div>
    )
  }
})


// **************
var GifList = React.createClass({


  render: function () {
    return (
  		<ul> 
  		{console.log("hohoh" + this.props.gifs)}
	  		{this.props.gifs.map((image)=>{
	  			console.log(image.images.downsized.url)
	  			return 
	  			<GifItem key={image.images.id} gif={image.images.downsized
} />
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
    this.handleTermChange = this.handleTermChange.bind(this);
  },


	handleTermChange: function(bla){
		console.log("handle" + bla)
		var url = 'http://api.giphy.com/v1/gifs/search?q=${bla.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC';
		request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data })
    });
    console.log("hi" + this.state.gifs)
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