
import ShopItem from './Components/ShopItem'
import AnimatedHeader from './Components/AnimatedHeader'
import PageNav from './Components/PageNav'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from './actions';

const Favorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favoritesReducer);
    const header = "Favorites"
    const counter = useSelector(state => state.pageCounter);

    React.useEffect(() => {
        dispatch(changePage(1))
    }, []);


    const navItems = () => {

        if (counter === favorites.length) return favorites;
        else {
            return favorites.filter((e, i) => {
                return i < counter * 4 && i > counter * 4 - 5
            })
        }
    }



    return (
        <>
            <div className='shop'>
            <AnimatedHeader header={header} />
                {/* {favoriteItems.length > 0 ? '' : "ups nothing here"} */}
                <div className='shopItems '>
                    {
                        navItems().map((item) => (
                            <ShopItem
                                key={item.id}
                                {...item}
                            />
                        ))
                    }
                </div>
            </div>
            <PageNav length={favorites.length} />
        </>
    )
}

export default Favorites