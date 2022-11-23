
const getTotalReducer = (state = 0, action) => {
    switch(action.type) {
        case 'GET_TOTAL':
            return state = action.payload;
        case 'SET_TOTAL':
            return state = action.payload;
        default:
            return state
    }
}

export default getTotalReducer