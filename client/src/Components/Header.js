import React from 'react'
import SearchBar from './SearchBar'
import Cart from '../Cart';
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

const Header = () => {

    const [showSearch, setShowSearch] = React.useState()
    const [showCart, setShowCart] = React.useState()

    return (
        <div className='header' >
            <div className='logo' >It<span>'</span>s<span>.</span>Time</div>
            <nav>
                <Link to="/"  >Home</Link>
                <Link to="/shop"  >Shop</Link>
                <Link to="/Favorites" >Favorites</Link>
                <Link to="/OrderHistory" >Order History</Link>
            </nav>
            <div>
                <svg onClick={() => setShowSearch(!showSearch)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 searchIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <svg onClick={() => setShowCart(!showCart)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bagIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            </div>
            <CSSTransition
                in={showCart}
                timeout={500}
                classNames="cart-animation"
                unmountOnExit
            >
                <Cart />
            </CSSTransition>
            <CSSTransition
                in={showSearch}
                timeout={500}
                classNames="searchAnimation"
                unmountOnExit
            >
                <SearchBar />
            </CSSTransition>
        </div>
    )
}

export default Header