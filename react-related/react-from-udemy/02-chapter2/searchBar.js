import React, {Component} from 'react'; //this replaces react.component { }
import ReactDOM from 'react-dom';




class Searchbar extends Component {

	// initialize the state inside the class based component
	constructor(props){
		super(props);//
		this.state = {term: 'Enter search term'}
	}
	
	// onInputChange(e) {
	// 	console.log(e.target.value)
	// }

  render() {
    return (
	    <div>
	      { /* Search <input onChange={this.onInputChange}/> */ }
	      { /*  Search <input onChange={(e)=>{console.log(e.target.value)}}/> //can also be written like this */ } 
	      <input 
	        value= {this.state.term} 
	        onChange={(e)=>{this.setState({term: e.target.value})}}/> 
   
	    </div>
     )
  }
}


export default Searchbar