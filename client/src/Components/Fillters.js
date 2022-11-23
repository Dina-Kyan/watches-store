import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShopItems, setSortType, setFilterType } from '../actions';

const Fillters = () => {
    const dispatch = useDispatch();
    let items = useSelector(state => state.shopItemsReducer);
    const sortType = useSelector(state => state.sortReducer);
    const filterType = useSelector(state => state.filterTypeReducer);

    const sort = (event) => {

        dispatch(setSortType(event.target.value));

        switch (event.target.value) {
            case 'default': {
                dispatch(setShopItems(
                    items.sort((a, b) => {
                        if (a.id > b.id) {
                            return 1;
                        }
                        if (a.id < b.id) {
                            return -1;
                        }
                        return 0;
                    })
                ))

            } break;
            case 'Price: low to high': {
                dispatch(setShopItems(
                    items.sort((a, b) => {
                        if (a.price > b.price) {
                            return 1;
                        }
                        if (a.price < b.price) {
                            return -1;
                        }
                        return 0;
                    })
                ))
            } break;
            case 'Price: high to low': {
                dispatch(setShopItems(
                    items = items.sort((a, b) => {
                        if (a.price < b.price) {
                            return 1;
                        }
                        if (a.price > b.price) {
                            return -1;
                        }
                        return 0;
                    })
                ))
            } break;
            default: break
        }


    }


    return (
        <div className='fillters' >
            <label htmlFor="sort">Sort by</label>
            <select defaultValue={sortType || 'default'} onChange={sort} name="sort" id="sort">
                <option value="default" >default</option>
                <option value="Price: low to high" >Price: low to high</option>
                <option value="Price: high to low" >Price: hight to low</option>
            </select>

            <label htmlFor="fillter">Fillter by</label>
            <select defaultValue={filterType || 'All'} onChange={(e)=> dispatch(setFilterType(e.target.value))} name="fillter" id="fillter">
                <option value="All">All</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
            </select>
        </div>
    )
}

export default Fillters