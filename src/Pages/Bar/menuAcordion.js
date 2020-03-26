import React from 'react';

import Page1 from '../Bar/barImages/food1.jpg';
import Page2 from '../Bar/barImages/food2.jpg';
import Page3 from '../Bar/barImages/desserts.jpg';
import Page4 from '../Bar/barImages/drink1.jpg';
import Page5 from '../Bar/barImages/drink2.jpg';
import Page6 from '../Bar/barImages/drink3.jpg';
import Page7 from '../Bar/barImages/drink4.jpg';


const menuAcordion = () => {
    console.log("BAR menuAcordion COMPONENT");


    return (

        <div className="container">
            <div class="accordion my-3" id="accordionExample">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                לצפייה בתפריט לחצו כאן </button>
                        </h2>
                    </div>
                    <div id="collapseOne" class="collapse mt-2" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="MenuNav row d-flex justify-content-center">
                            <nav class="nav">
                                <a class="nav-link" href="#page1">ראשונות זורמות</a>
                                <a class="nav-link" href="#page2">לטורפים בלבד</a>
                                <a class="nav-link" href="#page3">מתוקים למתוקות</a>
                                <a class="nav-link" href="#page4">שתייה לקרחניסטים</a>
                            </nav>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12" id="page1">
                                <img id="Menu" src={Page1} />
                            </div>
                            <div className="col-12" id="page2">
                                <img id="Menu" src={Page2} />
                            </div>
                            <div className="col-12" id="page3">
                                <img id="Menu" src={Page3} />
                            </div>
                            <div className="col-12" id="page4">
                                <img id="Menu" src={Page4} />
                            </div>
                            <div className="col-12">
                                <img id="Menu" src={Page5} />
                            </div>
                            <div className="col-12">
                                <img id="Menu" src={Page6} />
                            </div>
                            <div className="col-12">
                                <img id="Menu" src={Page7} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default menuAcordion;
