import React, { Component } from 'react';
import './main.css';

import Home from '../../Pages/Home/home';
import MilkaCafe from '../../Pages/Cafe/cafe';
import MilkaBar from '../../Pages/Bar/bar';
import MilkaEvents from '../../Pages/Events/events';
import LookForJob from '../../Components/Footer/linksModals/lookForJob/LookForJob';
import BarMenu from '../../Components/Footer/linksModals/barMenu/barMenu';
import CafeMenu from '../../Components/Footer/linksModals/cafeMenu/cafeMenu';
import Members from '../../Components/Footer/linksModals/members/members';

import MainMenues from '../../Pages/Menues/mainMenues';

import { Route, Link, BrowserRouter } from 'react-router-dom';




class Main extends Component {

    state = {

    }

    render() {
        return (
            <div className="Main row no-gutters">
                {/* <Route path="/milka" exact component={Home} />
                <Route path="/milka/milkacafe" exact component={MilkaCafe} />
                <Route path="/milka/milkabar" exact component={MilkaBar} />
                <Route path="/milka/milkaevents" exact component={MilkaEvents} />
                <Route path="/milka/lookforjob" exact component={LookForJob} /> */}
                <Route path="/" exact component={MainMenues} />
                <Route path="/cafemenu" exact component={CafeMenu} />
                <Route path="/barmenu" exact component={BarMenu} />
                {/* <Route path="/milka/barmenu" exact component={BarMenu} />
                <Route path="/milka/cafemenu" exact component={CafeMenu} /> */}
                {/* <Route path="/milka/members" exact component={Members} /> */}
            </div>
        );
    }
}

export default Main;











