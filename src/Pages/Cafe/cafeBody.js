import React from 'react';

import CafeLogo from '../Cafe/Images/cafe-logo.jpg';
import Mefaneket from '../Cafe/Images/mefaneket.jpg';

const CafeBody = () => {
    console.log("CafeBody COMPONENT");


    return (

        <div className="container">
            <div id="main-body">
                <div className="row">
                    <div className="col-6 p-5" >
                        <img id="HeaderImg" src={CafeLogo} />
                    </div>
                    <div className="col-6 p-5" id="text">
                        <h5> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </h5>
                    </div>
                </div>
                <div className="row">
                    <img id="BannerImg" src={Mefaneket} />
                </div>
            </div >

            {/* ********* Mobile View ********* */}
            <div id="phone-body">
                <div className="row">
                    <div className="col-12 p-5" >
                        <img id="HeaderImg" src={CafeLogo} />
                    </div>
                    <div className="col-12 p-5" id="text">
                        <h5> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </h5>
                    </div>
                </div>
                <div className="row">
                    <img id="BannerImg" src={Mefaneket} />
                </div>
            </div >

        </div >
    );
}


export default CafeBody;
