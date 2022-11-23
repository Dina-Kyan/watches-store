import React from 'react'
import { Link } from 'react-router-dom'
import useCartTotal from '../hooks/useCartTotal'
import { useDispatch, useSelector } from 'react-redux'
import { updateItem, increaseTotalPrice, decreaseTotalPrice } from '.././actions'

const CartItem = ({ title, description, price, id, rating, img, gender }) => {
    const total = useCartTotal({ title, description, price, id, rating, img, gender });
    const totalPrice = useSelector(state => state.updateTotalPrice);
    const cartItems = useSelector(state => state.cartItemsReducer);
    const dispatch = useDispatch()

    const totalHandler = (num) => {
        if (total - 1 < 0) return;
        total.changeTotal(num)

        if (num === 1) dispatch(increaseTotalPrice(price))
        else if (totalPrice > 0) dispatch(decreaseTotalPrice(price))
    }

    const findTotal = () => {
        const item = cartItems.find(i => i.id === id);
        return item ? item.total : 0;
    }

    const totalCount = findTotal();

    return (
        <div className='cartItem' >
            <img src={img} alt='blabalbal' />
            <div className='cartItemInfo'>
                <Link to={"/shop/" + id}>
                    <h2 onClick={() => dispatch(updateItem({ title, description, price, id, rating, img, gender }))} >{title}</h2>
                </Link>
                <span>Price ${Number((price * total.totalIncart).toFixed(2)) || price}</span>
                <div className='countBtn' >
                    <svg onClick={() => totalHandler(1)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 plus" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span>{totalCount}</span>
                    <svg onClick={() => totalHandler(-1)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 minus" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default CartItem