
import React from 'react'
import CartItem from './CartItem'
import useArrows from '../hooks/useArrows'


const Orders = ({ date, totalPrice, orderdItems }) => {
    const num = window.innerWidth <= 630 ? 1 : window.innerWidth <= 888 ? 2 : window.innerWidth <= 1500 ? 3 : 4;
    const showArrows = useArrows(orderdItems.length, num);

    const navItems = () => {
        if (orderdItems.length <= num) return orderdItems;
        else {
            return orderdItems.filter((e, i) => {
                return i < showArrows.counter * num && i > showArrows.counter * num - (num+1)
            })
        }
    }

    return (
        <div className='ordersContainer'>
            <h2 className='ordersHeading' >{`Order date: ${date} - Total: ${totalPrice}`}</h2>
            <div className='orders'>
                {
                    showArrows.showLeftArrow ?
                        <svg onClick={() => showArrows.counterHandler(0)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 nextIcon left" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg> : ''
                }
                {
                    navItems().map((item) => (
                        <CartItem
                            key={item.id}
                            {...item}
                        />
                    ))
                }
                {
                    showArrows.showRightArrow ?
                        <svg onClick={() => showArrows.counterHandler(1)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 nextIcon right" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg> : ''
                }
            </div>
        </div>
    )
}

export default Orders