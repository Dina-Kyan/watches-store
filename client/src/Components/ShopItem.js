import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { updateItem } from '.././actions'
import useFavorite from '../hooks/useFavorite';
import useCartTotal from '../hooks/useCartTotal';



const ShopItem = ({ title, description, price, id, rating, img, gender }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartItemsReducer);
  const changeFav = useFavorite({ title, description, price, id, rating, img, gender });
  const total = useCartTotal({ title, description, price, id, rating, img, gender });

  const findTotal = () => {
    const item = cartItems.length ? cartItems.find(i=> i.id === id) : 0; 
    return item ? item.total : 0;
  }

  const totalCount = findTotal();

  return (
    <div className='shopItem' >
      <svg onClick={() => changeFav.changeFavorite()}
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={changeFav.favorite ? "red" : "currentColor"} className="w-6 h-6 heart">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
      <Link to={"/shop/" + id}>
        <img onClick={() => dispatch(updateItem({ title, description, price, id, rating, img, gender }))} src={img} alt='blabalbal' />
        <h2 onClick={() => dispatch(updateItem({ title, description, price, id, rating, img, gender }))} >{title}</h2>
      </Link>
      <span>Price ${price}</span>
      <div className='countBtn' >
        <svg onClick={() => total.changeTotal(1)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 plus" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        <span>{totalCount}</span>
        <svg onClick={() => total.changeTotal(-1)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 minus" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
        </svg>
      </div>
    </div>
  )
}

export default ShopItem