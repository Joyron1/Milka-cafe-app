import React from 'react';
import './carousel.css';

import FirstImage from './carouselImages/gnochi.jpg';
import SecondImage from './carouselImages/desserts.jpg';
import ThirdImage from './carouselImages/toastSalad.jpg';


const Carousel = () => {
    console.log("CAROUSEL COMPONENT");

    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-ride="carousel" >
                <div class="carousel-inner">
                    <div class="carousel-item">
                        <img src={FirstImage} className="CarImage d-block w-100" alt="ניוקי בטטה ערמונים" />
                        {/* <div class="carousel-caption  d-sm-block" >
                            <h5>ניוקי בטטה ערמונים</h5>
                            <p>מנות איטלקיות לא מהעולם הזה</p>
                        </div> */}
                    </div>
                    <div class="carousel-item active">
                        <img src={SecondImage} className="CarImage d-block w-100" alt="קינוחים" />
                        {/* <div class="carousel-caption  d-sm-block">
                            <h5>קינוחים בקפה מילקה</h5>
                            <p>מגוון קינוחים טעימים ומופלאים</p>
                        </div> */}
                    </div>
                    <div class="carousel-item">
                        <img src={ThirdImage} className="CarImage d-block w-100" alt="סלט טוסט" />
                        {/* <div class="carousel-caption d-sm-block">
                            <h5>הסלט טוסט שלנו</h5>
                            <p>בואו גם אתם לאכול מהסלט הכי נמכר שלנו !</p>
                        </div> */}
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div >
    );
}


export default Carousel;




