
const favoritesReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_FAVORITES':
            return state = action.payload;
        default:
            return state
    }
}

export default favoritesReducer;