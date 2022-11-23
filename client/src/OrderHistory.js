import React from 'react'
import PageNav from './Components/PageNav'
import Orders from './Components/Orders'
import AnimatedHeader from './Components/AnimatedHeader'
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from './actions';

const OrderHistory = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.pageCounter);
    const orders = useSelector(state => state.ordersReducer);


    React.useEffect(() => {
        dispatch(changePage(1))
    }, []);


    const navItems = () => {

        if (counter === orders.length) return orders;
        else {
            return orders.filter((e, i) => {
                return i < counter * 3 && i > counter * 3 - 4
            })
        }
    }

    return (
        <>
            <div className='shop'>
                <AnimatedHeader header={'Order history'} />
                <div className='orderHistory'>
                    {
                        navItems().map((item) => (
                            <Orders
                                key={item.id}
                                {...item}
                            />
                        ))
                    }
                </div>
            </div>
            <PageNav length={orders.length} itemsCount={3} />
        </>
    )
}

export default OrderHistory
