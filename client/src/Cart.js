import React from 'react'
import CartItem from './Components/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { setCartItems } from './actions'
import useArrows from './hooks/useArrows'

const Cart = () => {
    const dispatch = useDispatch()
    const [orderComplited, setOrderComplited] = React.useState(false)
    const totalPrice = useSelector(state => state.updateTotalPrice)
    const cartItems = useSelector(state => state.cartItemsReducer);
    const num = window.innerWidth <= 630 ? 1 : window.innerWidth <= 888 ? 2 : window.innerWidth <= 1500 ? 3 : 4;
    const showArrows = useArrows(cartItems.length, num);


    const getDate = () => {
        const dateObj = new Date();
        const month = dateObj.getMonth() + 1;
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();

        return year + "/" + month + "/" + day;
    }

    const submitOrder = () => {
        try {
            fetch('http://localhost:5000/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({ totalPrice, date: getDate(), orderdItems: cartItems })
            })
            fetch('http://localhost:5000/cartItems', {
                method: 'DELETE'
            })
        } catch (error) {
            alert(':(');
        }
        setOrderComplited(true)
        dispatch(setCartItems([]))
    }

    const navItems = () => {
        if (cartItems.length <= num) return cartItems;
        else {
            return cartItems.filter((e, i) => {
                return i < showArrows.counter * num && i > showArrows.counter * num - (num+1)
            })
        }
    }
    return (
        <div className='cart' >
            {cartItems.length ?
                <>
                    <h2 className='cartTotalPrice' >Total: ${Number(totalPrice.toFixed(2))}</h2>
                    <div className='cartItems'>
                        {
                            showArrows.showLeftArrow ?
                                <svg onClick={() => showArrows.counterHandler(0)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 nextIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg> : ''
                        }
                        {
                            navItems().map((item, index) => (
                                <CartItem
                                    key={item.id}
                                    {...item}
                                />
                            ))
                        }
                        {
                            showArrows.showRightArrow ?
                                <svg onClick={() => showArrows.counterHandler(1)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 nextIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg> : ''
                        }
                    </div>
                    <button onClick={submitOrder} className='cartButton'>BUY</button>
                </>


                :  orderComplited ? <h2>Your order is on its way</h2> : <h2>Ups nothing here</h2>}
        </div>
    )
}

export default Cart