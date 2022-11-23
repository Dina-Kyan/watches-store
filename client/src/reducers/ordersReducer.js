
const ordersReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_ORDERS':
            return state = action.payload;
        default:
            return state
    }
}

export default ordersReducer;