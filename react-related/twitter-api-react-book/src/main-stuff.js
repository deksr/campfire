import ReactDOM from 'react-dom';
import React, { Component } from 'react';


// notes: you can set state in events or simple functions 

var App = React.createClass({

	getInitialState: function () {
    return {
      collectionTweets: {}
    }; 
  },



  addTweetTocCollection: function (tweet) {
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