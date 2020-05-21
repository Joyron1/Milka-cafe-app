import React from 'react';
import ScrollUpButton from "react-scroll-up-button";

import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/navBar';

import './App.css';

import { BrowserRouter } from 'react-router-dom';


function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <ScrollUpButton />
        <NavBar></NavBar>
        <Main></Main>
        <Footer></Footer>
      </div>
    </BrowserRouter>

  );
}

export default App;

