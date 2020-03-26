import React from 'react';

import './bar.css'

import Body from '../Bar/barBody';
import Menu from '../Bar/menuAcordion';

const Bar = () => {

    return (
        <div className="Main">
            <div className="row">
                <Body></Body>
            </div>

            <hr />

            <div className="container">
                <Menu></Menu>
            </div>
        </div>
    );

}

export default Bar;

