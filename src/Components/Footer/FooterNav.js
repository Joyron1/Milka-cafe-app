import React from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom';

import Whatsapp from '../Footer/whatsappimg.png';
import Facebook from '../Footer/facebook.png';
import Instagram from '../Footer/instagram_PNG11.png';

const FooterNav = (props) => {
    console.log("FooterNav COMPONENT");
    console.log(props)

    return (
        <div>
            <ul className="nav" id="Footer-nav">
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">יצירת קשר </Link>
                </li>
                <li className="nav-item">
                    <Link to="/lookforjob" className="nav-link">דרושים</Link>
                </li>
                <li className="nav-item">
                    <Link to="questans" className="nav-link">שאלות ותשובות</Link>
                </li>
                <li className="nav-item">
                    <button onClick={props.goToWhatsapp} type="button" class="btn btn-sm "> <img
                        id="contact" src={Whatsapp} /></button>
                </li>
                <li className="nav-item">
                    <button onClick={props.goToFacebook} type="button" class="btn btn-sm "><img
                        id="contact" src={Facebook} /></button>
                </li>
                <li className="nav-item">
                    <button onClick={props.goToInstagram} type="button" class="btn btn-sm "><img
                        id="contact" src={Instagram} /></button>
                </li>
            </ul>
        </div >
    );
}


export default FooterNav;
