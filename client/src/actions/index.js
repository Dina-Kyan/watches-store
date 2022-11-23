
export const updateItem = (num) => {
    return {
        type: 'UPDATE_ITEM',
        payload: num
    }
}

export const incrementPage = () => {
    return {
        type: 'INCERMENT_PAGE',
    }
}

export const decrementPage = () => {
    return {
        type: 'DECREMENT_PAGE',
    }
}

export const changePage = (num) => {
    return {
        type: 'CHANGE_PAGE',
        payload: num
    }
}

export const increaseTotalPrice = (num) => {
    return {
        type: 'INCREASE_TOTAL_PRICE',
        payload: num
    }
}

export const decreaseTotalPrice = (num) => {
    return {
        type: 'DECREASE_TOTAL_PRICE',
        payload: num
    }
}

export const addTotalPrice = (num) => {
    return {
        type: 'ADD_TOTAL_PRICE',
        payload: num
    }
}

export const setShopItems = (arr) => {
    return {
        type: 'SET_SHOP_ITEMS',
        payload: arr
    }
}

export const setFavorites = (arr) => {
    return {
        type: 'SET_FAVORITES',
        payload: arr
    }
}

export const setOrders = (arr) => {
    return {
        type: 'SET_ORDERS',
        payload: arr
    }
}

export const setCartItems = (arr) => {
    return {
        type: 'SET_CART_ITEMS',
        payload: arr
    }
}

export const setSortType = (str) => {
    return {
        type: 'SET_SORT_TYPE',
        payload: str
    }
}
export const setFilterType = (str) => {
    return {
        type: 'SET_FILTER_TYPE',
        payload: str
    }
}

export const setSearchValue = (str) => {
    return {
        type: 'SET_SEARCH_VALUE',
        payload: str
    }
}