import React from 'react';

import BlackMonday from '../Bar/barImages/blackmonday.png';
import Jam from '../Bar/barImages/Jam.png';
import FridayVibes from '../Bar/barImages/FridayVibes.png';

const BarBody = () => {
    console.log("BarBody COMPONENT");


    return (
        <div className="container">


            {/* Computer view */}
            <div id="main-body">
                <div className="row no-gutters mt-5 d-flex justify-content-center">
                    <div className="col- col-xl-6 " >
                        <img className="Image img-fluid" src={BlackMonday} />
                    </div>
                    <div className="col- col-xl-6  p-5" id="TextArea">
                        <div className="Text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </div>

                <div className="row no-gutters ">
                    <div className="col- col-xl-6  p-5" id="TextArea">
                        <div className="Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                    <div className="col- col-xl-6 d-flex justify-content-center" id="ImageArea">
                        <img className="Image img-fluid" src={Jam} />
                    </div>
                </div>

                <div className="row no-gutters ">
                    <div className="col- col-xl-6 d-flex justify-content-center">
                        <img className="Image img-fluid" src={FridayVibes} />
                    </div>
                    <div className="col- col-xl-6  p-5" id="TextArea">
                        <div className="Text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </div>
            </div >



            {/* ********* Mobile View ********* */}
            <div className="container" id="phone-body">
                <div className="row no-gutters mt-5">
                    <div className="col- col-xl-6 d-flex justify-content-center p-5" >
                        <div className="Text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                    <div className="col- col-xl-6 d-flex justify-content-center">
                        <img className="Image  img-fluid" src={BlackMonday} />
                    </div>
                </div>

                <div className="row no-gutters">
                    <div className="col- col-xl-6 d-flex justify-content-center p-5" >
                        <div className="Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                    <div className="col- col-xl-6 d-flex justify-content-center">
                        <img className="Image  img-fluid" src={Jam} />
                    </div>
                </div>

                <div className="row no-gutters">
                    <div className="col- col-xl-6 d-flex justify-content-center p-5" >
                        <div className="Text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                    <div className="col- col-xl-6 d-flex justify-content-center" >
                        <img className="Image  img-fluid" src={FridayVibes} />
                    </div>
                </div>
            </div >
        </div>
    );
}


export default BarBody;
