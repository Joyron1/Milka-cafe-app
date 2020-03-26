import React from 'react';

import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/navBar';

import { Route, BrowserRouter } from 'react-router-dom';
// import reducers from './redux/reducers';
// import { createStore } from "redux";
// import { Provider } from 'react-redux';


function App() {
  return (

    <BrowserRouter>
      <div className="App">

        {/* <div className="row">
          <Header></Header>
        </div> */}

        <div>
          <NavBar></NavBar>
        </div>

        <div className="Main row">
          <div className="">
            <Main></Main>
          </div>
        </div>

        <div className="footer row">
          <Footer></Footer>
        </div>

      </div>
    </BrowserRouter>

  );
}

export default App;

