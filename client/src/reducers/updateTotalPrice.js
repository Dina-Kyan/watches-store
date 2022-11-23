
const updateTotalPrice = (state = 0, action) => {
    switch(action.type) {
        case 'INCREASE_TOTAL_PRICE':
            return state + action.payload
        case 'DECREASE_TOTAL_PRICE':
            return state - action.payload
        case 'ADD_TOTAL_PRICE':
            return state = action.payload
        default:
            return state
    }
}

export default updateTotalPrice;