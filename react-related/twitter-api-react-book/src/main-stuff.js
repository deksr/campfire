import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import SnapkiteStreamClient from 'snapkite-stream-client';


// notes: you can set state in events or simple functions 
// you can pass functions from one component to another in the form of a props


var StreamTweet = React.createClass({

	getInitialState: function () {
    console.log('[Snapterest] StreamTweet: 1. Running getInitialState()');
    return {
      numberOfCharactersIsIncreasing: null,
      headerText: null
    }; 
  },

  componentWillMount: function () {
    console.log('[Snapterest] StreamTweet: 2. Running componentWillMount()');
    this.setState({
      numberOfCharactersIsIncreasing: true,
      headerText: 'Latest public photo from Twitter'
    });
    window.snapterest = {
      numberOfReceivedTweets: 1,
      numberOfDisplayedTweets: 1
    }; 
  },



	render: function () {
    console.log('[Snapterest] StreamTweet: Running render()');
    return (
      <section>
        <Header text={this.state.headerText} />
        <Tweet tweet={this.props.tweet} 
          onImageClick={this.props.AddTweetToCollection} />
      </section>
    ); 
  }
})



var Stream = React.createClass({

	getInitialState: function () {
    return {
      tweet: null 
    }
  },



  componentDidMount: function () {
    SnapkiteStreamClient.initializeStream(this.handleNewTweet);
  },//calling an external library


  
  componentWillUnmount: function () {
    SnapkiteStreamClient.destroyStream();
  },//exiting the external library

  
  
  handleNewTweet: function (tweet) {
    this.setState({
    	tweet: tweet
    });
  },

  
  render: function () {
  	var tweet = this.state.tweet;

  	if (tweet) {
      return (
        <StreamTweet tweet={tweet}
        AddTweetToCollection={this.props.addTweetToCollection} />
      ); 
    }
       
    return (
      <Header text="Waiting for public photos from Twitter..." />
    ); 
  }

})





var App = React.createClass({

	getInitialState: function () {
    return {
      collectionTweets: {}
    }; 
  },



  addTweetToCollection: function (tweet) {
  	// tweets: This refers to our current collection of tweets


  	var collectionOfTweets = this.state.collectionTweets
  	collectionOfTweets[tweet.id]=tweet

    this.setState({
      collectionTweets: collectionOfTweets 
    });
    console.log("console from event"  + " "  + this.state.collectionTweets)
  },


  RemoveTweetFromcCollection: function (tweet) {
  	// RemoveTweetFromCollection: This refers to a function that removes a particular tweet from our collection

  	var collectionOfTweets = this.state.collectionTweets
  	// delete collectionOfTweets[tweet.id]=tweet

    this.setState({
      collectionTweets: collectionOfTweets 
    });
    console.log("console from event"  + " "  + this.state.collectionTweets)
  },



  removeAllTweetsFromCollection: function () {
    this.setState({
      collectionTweets: {}
    });
  },




  render: function () {
      return (

      	<div>
      	  <div> 
      	    <Stream onAddTweetToCollection={this.addTweetToCollection} />
          </div> 
 
          <div>
	          <Collection tweets={this.state.collectionTweets}
	            onRemoveTweetFromCollection={this.removeTweetFromCollection}
	            onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection} /> 
          </div>
           
      	</div>
      		
      )
    }
});


// parent of App
ReactDOM.render(<App/>, document.getElementById("root"));