import React from 'react'
import { setSearchValue } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";


const SearchBar = () => {
    const dispatch = useDispatch();
    const searchValue = useSelector(state => state.searchValueReducer);

    return (
        <div className='searchBar'>
            <input onChange={(e) => dispatch(setSearchValue(e.target.value))} value={searchValue} id="search" type='text' placeholder='Search watches here' />
            <label htmlFor="search">
                <Link to="/shop"  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 searchIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </Link>
            </label>
        </div>
    )
}

export default SearchBar