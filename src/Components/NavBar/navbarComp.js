import React, { Component } from 'react';

import HomeIcon from '@material-ui/icons/Home';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import CakeIcon from '@material-ui/icons/Cake';

import { Link } from 'react-router-dom';

class navBarComponent extends Component {

    render() {

        return (
            <div className="row no-gutters" >

                {/* COMPUTER */}
                < div className="main-navbar col-12 shadow" >
                    <div className="row my-3">
                        <div className="col-xl-12">
                            <div className="row" style={{ textDecoration: "none" }}>
                                <Link className="col-3 link" to="/milka/milkaevents" style={{ borderRight: "1px solid black" }}><p> אירועים</p></Link>
                                <Link className="col-3 link" id="bar" to="/milka/milkabar" style={{ borderRight: "1px solid black" }}><p > בר</p></Link>
                                <Link className="col-3 link" to="/milka/milkacafe" style={{ borderRight: "1px solid black" }}><p> קפה </p></Link>
                                <Link className="col-3 link" to="/milka"><p> עמוד הבית </p></Link>
                            </div>
                        </div>
                    </div>
                </div>


                {/* MOBILE */}
                < div className="phone-navbar col-12" >
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="navbar-brand"></div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto mt-3">
                                <li className="nav-item my-1">
                                    <Link className="link" to="/milka"> עמוד הבית <HomeIcon /></Link>
                                </li>
                                <li className="nav-item my-1">
                                    <Link className="link" to="/milka/milkacafe" > קפה <LocalCafeIcon /></Link>
                                </li>
                                <li className="nav-item my-1">
                                    <Link className="link" to="/milka/milkabar" > בר <LocalBarIcon /> </Link>
                                </li>
                                <li className="nav-item my-1">
                                    <Link className="link" to="/milka/milkaevents" > אירועים <CakeIcon /> </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div >
            </div >
        );
    }

}


export default navBarComponent;
