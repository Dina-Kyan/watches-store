
import itemReducer from "./updateItem";
import pageCounter from "./pageCounter"
import updateTotalPrice from "./updateTotalPrice"
import getTotalReducer from "./getTotalReducer";
import shopItemsReducer from './shopItemsReducer'
import favoritesReducer from "./favoritesReducer";
import ordersReducer from './ordersReducer';
import cartItemsReducer from './cartItemsReducer';
import sortReducer from './sortReducer';
import filterTypeReducer from './filterTypeReducer';
import searchValueReducer from './searchValueReducer';
import { combineReducers } from "redux";

const allReducers = combineReducers({
    itemReducer,
    pageCounter,
    updateTotalPrice,
    getTotalReducer,
    shopItemsReducer,
    favoritesReducer,
    ordersReducer,
    cartItemsReducer,
    sortReducer,
    filterTypeReducer,
    searchValueReducer
})

export default allReducers;