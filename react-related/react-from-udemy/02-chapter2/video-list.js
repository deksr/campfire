import React, {Component} from 'react'; 
import ReactDOM from 'react-dom';
import VideoListItem from './video-list-item.js'


const VideoList = (props)=>{
		

	var blublu = props.videosToUl.map((eachvideo) => {
    return <VideoListItem key={eachvideo.etag} videoToLi = {eachvideo}  /> 
	});
	

	return (
		<ul className = "col-md-4 list-group">
		{props.videosToUl.length}
		{blublu}
		</ul>
	)
}

export default VideoList