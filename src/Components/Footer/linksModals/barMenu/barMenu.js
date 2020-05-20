import React from 'react';

import Page1 from '../../../../Images/food1.jpg';
import Page2 from '../../../../Images/food2.jpg';
import Page3 from '../../../../Images/desserts.jpg';
import Page4 from '../../../../Images/drink1.jpg';
import Page5 from '../../../../Images/drink2.jpg';
import Page6 from '../../../../Images/drink3.jpg';
import Page7 from '../../../../Images/drink4.jpg';

const BarMenu = () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    return (
        <div>

            <div className="row container my-3">
                <div className="col-12" id="page1">
                    <img id="barMenu" src={Page1} />
                </div>
                <div className="col-12" id="page2">
                    <img id="barMenu" src={Page2} />
                </div>
                <div className="col-12" id="page3">
                    <img id="barMenu" src={Page3} />
                </div>
                <div className="col-12" id="page4">
                    <img id="barMenu" src={Page4} />
                </div>
                <div className="col-12">
                    <img id="barMenu" src={Page5} />
                </div>
                <div className="col-12">
                    <img id="barMenu" src={Page6} />
                </div>
                <div className="col-12">
                    <img id="barMenu" src={Page7} />
                </div>
            </div>

        </div>
    );

}

export default BarMenu;