import React from 'react';
import ScrollUpButton from "react-scroll-up-button";
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

                <ScrollUpButton />

                <div className="pt-4 text-light">
                    <h1>תפריט קורונה</h1>
                    <div className="mt-3">תפריט חדש לאור התקופה הנוכחית. </div>
                    <div>התגעגענו ♥</div>
                </div>

                <div className="row no-gutters my-3" >
                    {cafeMenu.map((section, index) => (
                        <button type="button" style={{ fontSize: "14px" }} className="col-4 btn btn-outline-light" onClick={(i) => scrollToCard(index)}>{section.name}</button>
                    ))}
                </div>

                {cafeMenu.map((section, i) => (
                    <div className="mt-4 text-dark" id="first">

                        <div className="card" id={i}>
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




// let first = cafeMenu.filter(f => f.name === "מנות ראשונות");
// let main = cafeMenu.filter(m => m.name === "מנות עיקריות");
// let italian = cafeMenu.filter(i => i.name === "איטלקי");
// let salads = cafeMenu.filter(salad => salad.name === "סלטים");
// let sandwiches = cafeMenu.filter(sandwich => sandwich.name === "כריכים");
// let toasts = cafeMenu.filter(t => t.name === "טוסטים");
// let breakfast = cafeMenu.filter(b => b.name === "ארוחות בוקר");
// let kids = cafeMenu.filter(k => k.name === "ארוחות ילדים");

{/* עיקריות
            <div className="my-2 text-dark" id="first">
                <div className="card">
                    <div className="card-header">
                        <div id="headerTitle">{cafeMenu[1].name}</div>
                        <div id="headerDescription">{cafeMenu[1].description}</div>
                    </div>
                    <div className="container" style={{ textAlign: "right", direction: "rtl" }}>
                        {main[0]['dishes'].map((dishObj, i) => (
                            <div className="dishCard my-3">
                                <div id="price">{dishObj.price}₪</div>
                                <div id="name"> {dishObj.name} </div>
                                <div id="description"> {dishObj.description}</div>
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            איטלקי
            <div className="my-2 text-dark" id="first">
                <div className="card" >
                    <div className="card-header">
                        <div id="headerTitle">{cafeMenu[2].name}</div>
                        <div id="headerDescription">{cafeMenu[2].description}</div>
                    </div>
                    <div className="container" style={{ textAlign: "right", direction: "rtl" }}>
                        {italian[0]['dishes'].map((dishObj, i) => (
                            <div className="dishCard my-3">
                                <div id="price">{dishObj.price}₪</div>
                                <div id="name"> {dishObj.name} </div>
                                <div id="description"> {dishObj.description}</div>
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            סלטים
            <div className="my-2 text-dark" id="first">
                <div className="card" >
                    <div className="card-header">
                        <div id="headerTitle">{cafeMenu[3].name}</div>
                        <div id="headerDescription">{cafeMenu[3].description}</div>
                    </div>
                    <div className="container" style={{ textAlign: "right", direction: "rtl" }}>
                        {salads[0]['dishes'].map((dishObj, i) => (
                            <div className="dishCard my-3">
                                <div id="price">{dishObj.price}₪</div>
                                <div id="name"> {dishObj.name} </div>
                                <div id="description"> {dishObj.description}</div>
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            כריכים
            <div className="my-2 text-dark" id="first">
                <div className="card" >
                    <div className="card-header">
                        <div id="headerTitle">{cafeMenu[4].name}</div>
                        <div id="headerDescription">{cafeMenu[4].description}</div>
                    </div>
                    <div className="container" style={{ textAlign: "right", direction: "rtl" }}>
                        {sandwiches[0]['dishes'].map((dishObj, i) => (
                            <div className="dishCard my-3">
                                <div id="price">{dishObj.price}₪</div>
                                <div id="name"> {dishObj.name} </div>
                                <div id="description"> {dishObj.description}</div>
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            טוסטים
            <div className="my-2 text-dark" id="first">
                <div className="card" >
                    <div className="card-header">
                        <div id="headerTitle">{cafeMenu[5].name}</div>
                        <div id="headerDescription">{cafeMenu[5].description}</div>
                    </div>
                    <div className="container" style={{ textAlign: "right", direction: "rtl" }}>
                        {toasts[0]['dishes'].map((dishObj, i) => (
                            <div className="dishCard my-3">
                                <div id="price">{dishObj.price}₪</div>
                                <div id="name"> {dishObj.name} </div>
                                <div id="description"> {dishObj.description}</div>
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            ארוחות בוקר
            <div className="my-2 text-dark" id="first">
                <div className="card" >
                    <div className="card-header">
                        <div id="headerTitle">{cafeMenu[6].name}</div>
                        <div id="headerDescription">{cafeMenu[6].description}</div>
                    </div>
                    <div className="container" style={{ textAlign: "right", direction: "rtl" }}>
                        {breakfast[0]['dishes'].map((dishObj, i) => (
                            <div className="dishCard my-3">
                                <div id="price">{dishObj.price}₪</div>
                                <div id="name"> {dishObj.name} </div>
                                <div id="description"> {dishObj.description}</div>
                                <hr />
                            </div>
                        ))}
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>

            ארוחות ילדים
            <div className="my-2 text-dark" id="first">
                <div className="card" >
                    <div className="card-header">
                        <div id="headerTitle">{cafeMenu[7].name}</div>
                        <div id="headerDescription">{cafeMenu[7].description}</div>
                    </div>
                    <div className="container" style={{ textAlign: "right", direction: "rtl" }}>
                        {kids[0]['dishes'].map((dishObj, i) => (
                            <div className="dishCard my-3">
                                <div id="price">{dishObj.price}₪</div>
                                <div id="name"> {dishObj.name} </div>
                                <div id="description"> {dishObj.description}</div>
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
