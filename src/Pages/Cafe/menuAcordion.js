import React from 'react';

import page1 from '../../Images/cafeMenu_p1.jpg';
import page2 from '../../Images/cafeMenu_p2.jpg';
import page3 from '../../Images/menu_dess-2.jpg';

const menuAcordion = () => {
    console.log("CAFE menuAcordion COMPONENT");


    return (

        <div className="container">
            <div className="accordion my-5" id="accordionExample">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                לצפייה בתפריט לחצו כאן </button>
                        </h2>
                    </div>
                    <div id="collapseOne" className="collapse mt-2" aria-labelledby="headingOne" data-parent="#accordionExample">

                        <div className="cafeMenuNav row d-flex justify-content-center">
                            <nav class="nav">
                                <a class="nav-link" href="#page1">ארוחות בוקר ושתייה</a>
                                <a class="nav-link" href="#page2">ראשונות ועיקריות</a>
                                <a class="nav-link" href="#page3"> קינוחים </a>
                            </nav>
                        </div>
                        <div className="row mt-2">

                            <div className="col-12" id="page1">
                                <img id="cafeMenu" src={page1} />
                            </div>
                            <div className="col-12" id="page2">
                                <img id="cafeMenu" src={page2} />
                            </div>
                            <div className="col-12" id="page3" >
                                <img id="cafeMenu" src={page3} style={{ width: "60%" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}


export default menuAcordion;
