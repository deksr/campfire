import { createStore } from 'redux'

var store_0 = createStore(function(){
	return {
	}
})

var reducer =  function(arg){
    console.log('Reducer was called with args', args)
}

var store_01= createStore(reducer)








// export default actions = {
// 	addToDo(text){
// 		return {
// 			type: 'add_todo',
// 		  text: text
// 		}
// 	}	
// }


// store.dispatch(addToDo('some-text gets fired'))
