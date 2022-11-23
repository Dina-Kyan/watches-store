import React from 'react'
import Home from './Home'
import Item from './Item'
import Shop from './Shop'
import Favorites from './Favorites'
import OrderHistory from './OrderHistory'
import { Route, Routes } from 'react-router-dom';
import useFetch from './hooks/useFetch'
import { useDispatch } from 'react-redux'
import { setShopItems, setFavorites, setOrders, setCartItems } from './actions';


const App = () => {
  const dispatch = useDispatch()
  const shopItems = useFetch('watches');
  const favorites = useFetch('favorites');
  const orders = useFetch('orders');
  const cartItems = useFetch('cartItems');

  React.useEffect(() => {
      dispatch(setShopItems(shopItems))
      dispatch(setFavorites(favorites))
      dispatch(setOrders(orders))
      dispatch(setCartItems(cartItems))
  }, [shopItems, favorites, orders, cartItems]);


  return (

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="shop" element={<Shop/>}></Route>
      <Route path="/shop/:itemId" element={<Item />}></Route>
      <Route path="/Favorites" element={<Favorites/>}></Route>
      <Route path="/OrderHistory" element={<OrderHistory/>}></Route>
    </Routes>
  )
}

export default App