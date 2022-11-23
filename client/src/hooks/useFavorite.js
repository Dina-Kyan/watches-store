import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFavorites } from '.././actions';


function useFavorite(item) {
    const dispatch = useDispatch();
    const [favorite, setFavorite] = React.useState(false);
    const favorites = useSelector(state => state.favoritesReducer);
    
    React.useEffect(() => {
        const isItemFavorite = favorites.find(obj => obj.id === item.id);
        if (isItemFavorite) setFavorite(true)
    }, [favorites]);

    function changeFavorite() {
        if (favorite) {
            try {
                fetch('http://localhost:5000/favorites/' + item.id, {
                    method: 'DELETE',
                })
            } catch (error) {
                alert(':(');
            }
            dispatch(setFavorites(favorites.filter(i=> i.id !== item.id)))
        } else {
            try {
                fetch('http://localhost:5000/favorites', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({ ...item })
                })
            } catch (error) {
                alert(':(');
            }
            dispatch(setFavorites([...favorites, item]))
        }
        setFavorite(!favorite)
    }

    return {
        favorite,
        changeFavorite,
    }

}

export default useFavorite