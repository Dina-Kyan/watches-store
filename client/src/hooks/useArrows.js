
import React from 'react'

function useArrows(itemsLength, renderdItems) {
    const [counter, setCounter] = React.useState(1)
    const [showLeftArrow, setShowLeftArrow] = React.useState(false);
    const [showRightArrow, setShowRightArrow] = React.useState(itemsLength > renderdItems);

    function counterHandler(num) {
        if (num && itemsLength / counter + 1 >= renderdItems) {
            setCounter(counter + 1);
        } else if (counter - 1 !== 0 && !num) {
            setCounter(counter - 1);
        }

        num = num || -1

        if (itemsLength <= renderdItems || Math.ceil(itemsLength / renderdItems) === counter + num) {
            setShowRightArrow(false)
        } else if (itemsLength > renderdItems) {
            setShowRightArrow(true)
        }

        if (counter + num === 1) {
            setShowLeftArrow(false)
        } else if (itemsLength >= renderdItems && counter + num > 1) {
            setShowLeftArrow(true)
        }
    }






    return {
        showRightArrow,
        showLeftArrow,
        counterHandler,
        counter
    }

}

export default useArrows 