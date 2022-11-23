
const pageCounter = (state = 1, action) => {
    switch(action.type) {
        case 'INCERMENT_PAGE':
            return state +1
        case 'DECREMENT_PAGE':
            return state - 1
        case 'CHANGE_PAGE':
            return state = action.payload
        default:
            return state
    }
}

export default pageCounter