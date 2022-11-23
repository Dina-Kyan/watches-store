
const itemReducer = (state = {}, action) => {
    switch(action.type) {
        case 'UPDATE_ITEM':
            return state = action.payload;
        default:
            return state
    }
}

export default itemReducer