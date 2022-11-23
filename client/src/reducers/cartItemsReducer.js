
const cartItemsReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_CART_ITEMS':
            return state = action.payload
        default:
            return state
    }
}

export default cartItemsReducer;