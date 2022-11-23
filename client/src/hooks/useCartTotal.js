import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTotalPrice, setCartItems } from '.././actions'

function useCartTotal(item) {
    const [totalIncart, setTotalInCart] = React.useState(0);
    const cartItems = useSelector(state => state.cartItemsReducer);
    const dispatch = useDispatch();

    React.useEffect(() => {
        const cartItem = cartItems.find(obj => obj.id === item.id);
        if (cartItem) setTotalInCart(cartItem.total);
        dispatch(addTotalPrice(cartItems.reduce((num, obj) => num + obj.total * obj.price, 0)));
    }, [cartItems]);

    function changeTotal(num) {

        const patchTotal = (total) => {
            try {
                fetch('http://localhost:5000/cartItems/' + item.id, {
                    method: 'PATCH',
                    body: JSON.stringify({
                        total,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                })
            } catch (err) {
                alert(':(');
            }

            const newItems = (cartItems.map( (i)=> {
                if (i.id === item.id) {
                    i.total = total;
                } 
                return i;
            }))

            dispatch(setCartItems(newItems))
        }

        if (num === 1) {
            if (totalIncart > 0) patchTotal(totalIncart + num);
            else if (totalIncart === 0) {
                try {
                    fetch('http://localhost:5000/cartItems', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify({ ...item, total: num })
                    })
                } catch (error) {
                    alert(':(');
                }
                item.total = num;
                dispatch(setCartItems([...cartItems, item]))
            }
        } else {
            if (totalIncart + num < 0) return
            if (totalIncart + num === 0) {
                try {
                    fetch('http://localhost:5000/cartItems/' + item.id, {
                        method: 'DELETE',
                    })
                } catch (error) {
                    alert(':(');
                }
                dispatch(setCartItems(cartItems.filter(i=> i.id !== item.id)))
            } else patchTotal(totalIncart - 1)
        }
        setTotalInCart(totalIncart + num)
    }

    return {
        totalIncart,
        changeTotal
    }
}

export default useCartTotal