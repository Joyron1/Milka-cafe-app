import React, { Component } from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import './footer.css';

import FooterNav from '../Footer/FooterNav';


import Logo from '../Header/cafe-logo.jpg';

class Footer extends Component {

    goToWhatsapp = () => {
        window.location.href = "https://bit.ly/30N80Jy";
    }

    goToInstagram = () => {
        window.location.href = "https://www.instagram.com/milka.cafe/";
    }

    goToFacebook = () => {
        window.location.href = "https://www.facebook.com/milkacaffe/";
    }

    render() {

        let FooterNavBar = <FooterNav goToFacebook={() => this.goToFacebook()} goToWhatsapp={() => this.goToWhatsapp()} goToInstagram={() => this.goToInstagram()}> </FooterNav>;

        return (
            <div className="footerContainer">
                {/* {FooterNavBar} */}
                <div className="row justify-content-center my-5">

                    <Col xs={0} xl={3}>
                        {/* SPACE */}
                    </Col>

                    <Col xs={12} xl={6}>
                        <div className="row d-flex justify-content-center" >
                            <Link to="/milka"> <img className="Logo" src={Logo} /> </Link>
                        </div>
                        <div className="row mt-2 FooterTxt" style={{ justifyContent: "center" }}>
                            <p >All content belongs to Milka-Cafe-Bar 2020 © </p>
                        </div>
                    </Col>

                    <Col xs={0} xl={3} className="details pr-5" style={{ direction: "rtl", fontSize: "13px" }}>
                        <Row >
                            <p> מילקה קפה</p>
                        </Row>
                        <Row>
                            <p> עופר הקריון, דרך עכו 192, קרית ביאליק</p>
                        </Row>
                        <Row>
                            <p> 04-877-4343</p>
                        </Row>
                    </Col>
                </div>
            </div>
        );
    }
}

export default Footer;








