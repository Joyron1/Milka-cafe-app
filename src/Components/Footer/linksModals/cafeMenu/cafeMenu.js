import React from 'react';
import cafeMenu from './menu.json';
import './cafeMenu.css';

import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

import page1 from '../../../../Images/cafeMenu_p1.jpg';
import page2 from '../../../../Images/cafeMenu_p2.jpg';
import page3 from '../../../../Images/menu_dess-2.jpg';

class CafeMenu extends React.Component {

    componentDidMount() {

        window.addEventListener('scroll', () => {
            console.log(window.scrollY)
        })

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    async closeNavigationButton() {
        setTimeout(function () { document.getElementById('fastNavigationButton').click(); }, 1000)

    }

    scrollToCard = (id) => {
        var elmnt = document.getElementById(`${id}`);
        elmnt.scrollIntoView({
            behavior: 'smooth'
        });

        this.closeNavigationButton();
    }

    render() {
        console.log(window.scrollY)
        return (
            <div>
                {/* תפריט בתצוגת מחשב */}
                <div className="" id="pc_menu">
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
                <Link to="/" style={{ color: "black" }}><CloseIcon fontSize="large" style={{ float: "left" }} /></Link>
                <div className="container mainCafeMenu pb-4" id="mobile_menu">
                    <div className="pt-4 text-light" >
                        <div className="mt-3">ערכנו כמה שינויים בתפריט לאור המצב...</div>
                        <div className="">שמרנו על הדברים שהכי אהבתם !</div>
                        <div style={{ fontSize: "25px", letterSpacing: "3px" }}><b>וואלה, התגעגנו <FavoriteIcon /></b></div>
                    </div>

                    <hr />

                    <div className="row my-3" id="navBtns" >
                        <button className="btn btn-light my-2" id="fastNavigationButton" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            תפריט ניווט מהיר<ExpandMoreOutlinedIcon />
                        </button>
                        <div className="collapse" id="collapseExample">
                            {cafeMenu.map((section, index) => (
                                <button type="button" className="col- btn btn-secondary my-1 DropButtons" onClick={(i) => this.scrollToCard(index)}>{section.name}</button>
                            ))}
                        </div>
                    </div>

                    <hr />

                    {cafeMenu.map((section, i) => (
                        <div className="mt-4 text-light">
                            <div id={i} style={{ height: "60px" }}> </div>
                            <div >
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
                                            {dishObj.addons ? <div id="description"> {dishObj.addons}</div> : <div></div>}
                                            <hr />
                                        </div>
                                    ))}
                                </div>
                                {section.name == "ארוחות בוקר" ?
                                    <div className="card-footer">
                                        <div id="description"> <u>{section.addons.title}:</u> {section.addons.options} </div>
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

}
export default CafeMenu;



