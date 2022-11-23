

import React from 'react'
import { changePage, incrementPage, decrementPage } from '.././actions'
import { useDispatch, useSelector } from 'react-redux'


const PageNav = ({ length, itemsCount = 4 }) => {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.pageCounter);


    const makeButtons = () => {
        const pages = length / itemsCount;
        const buttons = [];
        for (let i = 0; i < pages; i++) {
            buttons[i] = <button key={i} onClick={() => dispatch(changePage(i + 1))} >{i + 1}</button>;

        }
        return buttons;
    };

    const showAllItems = () => {
        dispatch(changePage(length))
    }

    const showPageNav = () => {
        return length / itemsCount <= 1 || counter === length || !length;
    }

    const incrementPageByOne = () => {
        if (counter * itemsCount >= length) { return }
        else dispatch(incrementPage())
    }

    const decrementPageByOne = () => {
        if (counter === 1) { return }
        else dispatch(decrementPage())
    }



    return (
        <div className='pageNav'>
            {
                showPageNav() ? '' :
                    <>
                        <svg onClick={incrementPageByOne} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 nextIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        {makeButtons().map((item, index) => item)}
                        <button onClick={showAllItems} >see all</button>
                        <svg onClick={decrementPageByOne} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 nextIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </>
            }
        </div>
    )
}

export default PageNav