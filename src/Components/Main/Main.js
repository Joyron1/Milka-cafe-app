import React, { Component } from 'react';
import './main.css';

import Home from '../../Pages/Home/home';
import MilkaCafe from '../../Pages/Cafe/cafe';
import MilkaBar from '../../Pages/Bar/bar';
import MilkaEvents from '../../Pages/Events/events';
import ContactUs from '../../Pages/footerPages/contact/contact';
import QA from '../../Pages/footerPages/questAns/questAns';
import LookForJob from '../../Pages/footerPages/lookForJob/LookForJob';

import { Route, Link, BrowserRouter } from 'react-router-dom';




class Main extends Component {

    state = {

    }

    render() {
        return (
            <div className="Main row">
                <Route path="/milka" exact component={Home} />
                <Route path="/milkacafe" exact component={MilkaCafe} />
                <Route path="/milkabar" exact component={MilkaBar} />
                <Route path="/milkaevents" exact component={MilkaEvents} />
                <Route path="/contact" exact component={ContactUs} />
                <Route path="/questans" exact component={QA} />
                <Route path="/lookforjob" exact component={LookForJob} />
            </div>
        );
    }
}

export default Main;











