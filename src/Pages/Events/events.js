import React from 'react';
import { Col, Row } from 'react-bootstrap';

import './events.css';

import image1 from '../Events/images/image1.jpg';
import image2 from '../Events/images/image2.jpg';
import image3 from '../Events/images/image3.jpg';

const Events = () => {

    return (
        <div className="container">


            {/* Computer */}
            <div id="main-body">
                <Row className="mt-5 no-gutters">
                    <Col xs={12} xl={6} className="p-5">
                        <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
                    </Col>
                    <Col xs={12} xl={6}>
                        <img src={image1} style={{ width: "100%" }} />
                    </Col>
                </Row>
                <Row className="no-gutters mb-5">
                    <Col xs={12} xl={6}>
                        <img src={image3} style={{ width: "100%" }} />
                    </Col>
                    <Col xs={12} xl={6} className="p-5">
                        <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
                    </Col>
                </Row>
            </div>



            {/* MOBILE */}
            <div id="phone-body">
                <Row className="mt-5 no-gutters">
                    <Col xs={12} xl={6} className="p-5">
                        <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
                    </Col>
                    <Col xs={12} xl={6}>
                        <img src={image1} style={{ width: "100%" }} />
                    </Col>
                </Row>
                <Row className="no-gutters mb-5">
                    <Col xs={12} xl={6} className="p-5">
                        <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
                    </Col>
                    <Col xs={12} xl={6}>
                        <img src={image3} style={{ width: "100%" }} />
                    </Col>
                </Row>
            </div>

        </div>

    );
}


export default Events;