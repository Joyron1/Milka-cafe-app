import React from 'react';
import './cafe.css';

import Body from '../Cafe/cafeBody';
import Menu from '../Cafe/menuAcordion';

const Cafe = () => {

    return (

        <div className="Main mt-4">
            <Body></Body>
            <hr />
            <Menu></Menu>
        </div >
    );
}


export default Cafe;
