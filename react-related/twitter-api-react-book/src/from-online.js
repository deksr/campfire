import ReactDOM from 'react-dom';
import React, { Component } from 'react';



var GifItem = function(image){
	return (
		<div>
    <li>
      <img src={image.gif.url} />
    </li>

    </div>
  )
}





var GifList = function(props){


	console.log(props.gifs)
	var gifItems= props.gifs.map(function(image){
		console.log(image)
		return
		<GifItem key={image.id} gif={image} />
  })
  return(
		<div> 
			{gifItems}
		</div>
	)

}






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



var App = React.createClass({

	getInitialState: function () {
    return {
     
      gifs: [
        {
          id: 1,
          url: 'http://fakeimg.pl/300/'
        },
        {
          id: 2,
          url: 'http://fakeimg.pl/300/'
        },
        {
          id: 3,
          url: 'http://fakeimg.pl/300/'
        }
      ]
    }
  },




	handleTermChange: function(bla){
		console.log("handle" + bla)
	},


	render: function(){
		return (
		  <div>
        <h1>Giphy Search!</h1>
        <Searchbar onTermChange = {this.handleTermChange} />
      {/* we are storing a function handleTermChange inside a props so that it can be used in another component.  */}
       <GifList gifs={this.state.gifs} />
      </div>
		)
	}

})


ReactDOM.render(<App />, document.getElementById('app'));