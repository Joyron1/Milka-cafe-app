import React from 'react';

import Logo from '../NavBar/logo.jpg';

import { Route, Link } from 'react-router-dom';

const navbarComp = () => {
    console.log("navbarComp COMPONENT");


    return (

        <div className="row">

            {/* COMPUTER */}
            <div className="main-navbar col-12 shadow">
                <div className="row my-3">
                    <div className="col-2 pl-5" >
                        <a >
                            <Link to="/milka"> <img src={Logo} className="navLogo" /> </Link>
                        </a>
                    </div>
                    <div className="col-xl-10 col-md-10 col-sm-12 pl-4">
                        <div className="row">
                            <Link className="col-4 link" to="/milkaevents" style={{ borderRight: "1px solid black" }}><p> אירועים</p></Link>
                            <Link className="col-4 link" to="/milkabar" style={{ borderRight: "1px solid black" }}><p> בר</p></Link>
                            <Link className="col-4 link" to="/milkacafe"><p> קפה </p></Link>
                        </div>
                    </div>
                </div>
            </div>


            {/* MOBILE */}
            <div className="phone-navbar col-12 shadow">
                <div className="row p-1 mt-2">
                    <Link className="col-3 link" to="/milkaevents" style={{ borderRight: "1px solid black" }}>אירועים</Link>
                    <Link className="col-3 link" to="/milkabar" style={{ borderRight: "1px solid black" }}>בר</Link>
                    <Link className="col-3 link" to="/milkacafe" style={{ borderRight: "1px solid black" }}>קפה</Link>
                    <Link className="col-3 link" to="/milka">עמוד הבית</Link>
                </div>
            </div>
        </div>
    );
}


export default navbarComp;
