import React from 'react';
import './carousel.css';

import FirstImage from './carouselImages/gnochi.jpg';
import SecondImage from './carouselImages/desserts.jpg';
import ThirdImage from './carouselImages/toastSalad.jpg';


const Carousel = () => {
    console.log("CAROUSEL COMPONENT");

    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-ride="carousel" >
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img src={FirstImage} className="CarImage d-block w-100" alt="ניוקי בטטה ערמונים" />
                    </div>
                    <div className="carousel-item active">
                        <img src={SecondImage} className="CarImage d-block w-100" alt="קינוחים" />
                    </div>
                    <div className="carousel-item">
                        <img src={ThirdImage} className="CarImage d-block w-100" alt="סלט טוסט" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div >
    );
}


export default Carousel;




