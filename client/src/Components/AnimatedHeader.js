
import Header from './Header'
import OpenHeader from './OpenHeader'
import { CSSTransition } from "react-transition-group";
import React from 'react'
import Fillters from './Fillters';
import { useSelector } from 'react-redux';

const AnimatedHeader = ({header, showFillters = false}) => {
    const searchValue = useSelector(state => state.searchValueReducer)
    const [showHeader, setShowHeader] = React.useState(!!searchValue);

    return (
        // <CSSTransition
        //     in={showHeader}
        //     timeout={500}
        //     classNames="my-node"
        // >
        //     <div className='orangeBg' onMouseOver={() => setShowHeader(true)} onMouseLeave={() => setShowHeader(false)}>

        //         {showHeader ? <Header /> : <OpenHeader />}
        //         <div className='heading'>Shop</div>
        //     </div>
        // </CSSTransition>



        <div className='animatedHeader'>
            <CSSTransition
                in={showHeader}
                timeout={200}
                classNames="header-animation"
            >
                <div>
                    {showHeader ? <div onMouseLeave={() => setShowHeader(!showHeader)}  ><Header /></div>
                        : <div onMouseOver={() => setShowHeader(!showHeader)}   ><OpenHeader /></div>}
                    <div className='heading'>{header}</div>
                   { showFillters ? <Fillters/> : ''}
                </div>
            </CSSTransition>
        </div>


    )
}

export default AnimatedHeader
