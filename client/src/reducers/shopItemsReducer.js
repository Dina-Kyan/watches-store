

const shopItemsReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_SHOP_ITEMS':
            return state = action.payload;
        default:
            return state
    }
}

export default shopItemsReducer;