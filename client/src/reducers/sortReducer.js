
const sortReducer = (state = '', action) => {
    switch(action.type) {
        case 'SET_SORT_TYPE':
            return state = action.payload
        default:
            return state
    }
}

export default sortReducer;