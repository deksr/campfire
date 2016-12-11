import React, {Component} from 'react'; 
import ReactDOM from 'react-dom';


const VideoListItem = ({videoToLi})=>{

	// console.log(props.videoToLi) you can use props in paramete or just use videoToLi
		console.log(videoToLi)
		var imageurl= videoToLi.snippet.thumbnails.default.url

	return (
		<li>
		<img src={imageurl}/> 
		<p> {videoToLi.snippet.title}</p>

		</li>
	)
}

export default VideoListItem