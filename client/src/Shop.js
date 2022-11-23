
import React from 'react'
import AnimatedHeader from './Components/AnimatedHeader'
import ShopItem from './Components/ShopItem'
import PageNav from './Components/PageNav'
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from './actions';

const Shop = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.pageCounter);
    const items = useSelector(state => state.shopItemsReducer);
    const sortType = useSelector(state => state.sortReducer);
    const filterType = useSelector(state => state.filterTypeReducer);
    const searchValue = useSelector(state => state.searchValueReducer);
    const header = "Shop"


    React.useEffect(() => {
        dispatch(changePage(1))
    }, [items, filterType, sortType, searchValue]);

    const filteredSearch = () => {
        return items.filter(item =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()),
        );
    }

    const filterTypes = () => {
        if (filterType === 'Men') {
            return filteredSearch().filter((i) => i.gender === 'male')
        } else if (filterType === 'Women') {
            return filteredSearch().filter((i) => i.gender === 'female')
        } else return filteredSearch();
    }


    const navItems = () => {

        if (counter === filterTypes().length) return filterTypes();
        else {
            return filterTypes().filter((e, i) => {
                return i < counter * 4 && i > counter * 4 - 5
            })
        }
    }

    return (
        <>
            <div className='shop'>
                <AnimatedHeader header={header} showFillters={true} />
                <div className='shopItems '>
                    {navItems().map((item, index) => (
                        <ShopItem
                            key={item.id}
                            {...item}
                        />
                    ))}

                </div>
            </div>
            <PageNav length={filterTypes().length} />
        </>
    )
}

export default Shop