export default function reducer(state, action){
	switch(action.type){
		case 'add_todo':
		return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
		default:
		return state;
	}

}