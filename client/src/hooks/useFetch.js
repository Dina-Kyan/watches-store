import React from "react";

function useFetch(url) {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
            try {
                fetch('http://localhost:5000/' + url)
                    .then(result => {
                        return result.json()
                    }).then(result => {
                        setItems(result);
                    })
            } catch (error) {
                alert(':(');
            }
    }, []);

    return items
}
export default useFetch