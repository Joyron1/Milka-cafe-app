import React from 'react';
import cafeMenu from './menu.json';
import './cafeMenu.css';

import page1 from '../../../../Images/milka_menu_0002.jpg';
import page2 from '../../../../Images/milka_menu_0001.jpg';
import page3 from '../../../../Images/menu_dess-2.jpg';

const CafeMenu = () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    const scrollToCard = (id) => {
        var elmnt = document.getElementById(`${id}`);
        elmnt.scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <div>
            {/* תפריט בתצוגת מחשב */}
            <div className="container" id="pc_menu">
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

            {/* תפריט בתצוגת מובייל */}
            <div className="container mainCafeMenu pb-4" id="mobile_menu">
                <div className="pt-4 text-light" style={{ fontSize: "20px" }}>
                    <div className="mt-3">ערכנו כמה שינויים בתפריט לאור המצב...</div>
                    <div className="">שמרנו על הדברים שהכי אהבתם !</div>
                    <div>וואלה, התגעגענו ♥</div>
                </div>
                <hr />
                <div className="row no-gutters my-3" >
                    {cafeMenu.map((section, index) => (
                        <button type="button" style={{ fontSize: "14px" }} className="col-4 btn btn-outline-light" onClick={(i) => scrollToCard(index)}>{section.name}</button>
                    ))}
                </div>
                <hr />
                {cafeMenu.map((section, i) => (
                    <div className="mt-4 text-light" id="first">

                        <div className="" id={i}>
                            <div className="card-header">
                                <div id='headerTitle'>{section.name}</div>
                                {section.name == "איטלקי" ?
                                    <div>
                                        <div id="headerPasta">{section.description.free}</div>
                                        <div id="headerPasta">{section.description.cost}</div>
                                    </div>
                                    :
                                    <div id="headerDescription">{section.description}</div>
                                }
                            </div>
                            <div className="container" style={{ textAlign: "right", direction: "rtl" }}>
                                {cafeMenu[i]['dishes'].map((dishObj, i) => (
                                    <div className="dishCard my-3">
                                        <div id="price">{dishObj.price}</div>
                                        <div id="name"> {dishObj.name} </div>
                                        <div id="description"> {dishObj.description}</div>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                            {section.name == "ארוחות בוקר" ?
                                <div className="card-footer">
                                    <div id="name"> {section.addons.title}</div>
                                    <div id="description"> {section.addons.options} </div>
                                </div>
                                :
                                <div></div>}
                        </div>
                    </div>
                ))}
            </div >
        </div>
    );

}

export default CafeMenu;



