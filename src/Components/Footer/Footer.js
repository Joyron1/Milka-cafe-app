import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { EmailShareButton, EmailIcon, FacebookShareButton, FacebookIcon, WhatsappIcon, WhatsappShareButton } from "react-share";

import CallIcon from '@material-ui/icons/Call';
import DirectionsIcon from '@material-ui/icons/Directions';
import CafeLogo from '../../Images/cafeLogo.jpg';
import OpenHoursModal from './linksModals/openHours/openHours';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import './footer.css';

class Footer extends Component {

    state = {
        shareUrl: "http://jdevelopments.co.il/milka"
    }
    render() {

        return (
            <div className="footerContainer row no-gutters">

                {/* <div className="contact col-12 p-5 text-light" >
                    <h1> דברו איתנו</h1>
                    <div className="row mt-4">
                        <div className="col-xl-4 col-md-4 col-sm-12">
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="הכנס שם מלא" style={{ textAlign: "center" }} />
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-12">
                            <div className="form-group">
                                <input type="phone" className="form-control" id="exampleFormControlInput1" placeholder="הכנס מספר נייד" style={{ textAlign: "center" }} />
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-12">
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="הכנס הודעה" rows="2" style={{ textAlign: "center" }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-2">
                        <button type="submit" className="btn btn-primary">שלח הודעה</button>
                    </div>
                </div> */}


                {/* ///////////////// PC CSS //////////////// */}
                <div id="main-footer" className="col-12 mt-5">
                    <div className="row no-gutters">
                        <div className="col-xl-8 col-md-6 col-sm-12 text-light">
                            <div style={{ maxWidth: "100%" }}>
                                <div className="row no-gutters">
                                    <div className="location col-xl-6 col-md-12 " style={{ textAlign: "center" }}>
                                        <div className="card-body">
                                            <h4 className="card-title">מילקה קריון</h4>
                                            <p className="card-text"><DirectionsIcon /> עפר הקריון, דרך עכו 192 </p>
                                            <p className="card-text"> <CallIcon /> <a href="tel:048774343" style={{ color: "white" }}> 04-877-4343</a> </p>
                                        </div>
                                    </div>
                                    <div className="footerLogo col-xl-6 col-md-12" style={{ textAlign: "center", borderLeft: "1px solid white" }}>
                                        <img src={CafeLogo} className="card-img" alt="footer logo" style={{ height: "200px", width: "auto", borderRadius: "25px" }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* link and modals on footer */}
                        <div className="col-xl-4 col-md-6 col-sm-12 pr-5">
                            <div className="row no-gutters" >
                                <OpenHoursModal />
                                <div className="col-6 my-2">
                                    <Link className="footerLinks" to="/milka/lookforjob" ><p>  דרושים  </p></Link>
                                </div>
                                <div className="col-6 my-2">
                                    <Link className="footerLinks" to="/milka/cafemenu"> <p> תפריט בית קפה  </p></Link>
                                </div>
                                <div className="col-6 my-2">
                                    <Link className="footerLinks" to="/milka/members"><p>  חברי מועדון  </p></Link>
                                </div>
                                <div className="col-6 my-2">
                                    <Link className="footerLinks" to="/milka/barmenu"> <p>  תפריט בר </p> </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



                {/* ///////////////// MOBILE CSS //////////////// */}
                <div id="phone-footer" className="col-12">
                    <div className="row no-gutters">

                        {/* link and modals on footer */}
                        <div className="col-12 pr-3 pl-3" style={{ textAlign: "center" }}>
                            <div className="row no-gutters footerLinks my-3">
                                <OpenHoursModal />
                                <div className=" col-6 my-2">
                                    <Link className="footerLinks" to="/milka/lookforjob" ><p>  דרושים  </p></Link>
                                </div>
                                <div className="col-6 my-2">
                                    <Link className="footerLinks" to="/milka/cafemenu"> <p> תפריט בית קפה  </p></Link>
                                </div>
                                <div className="col-6 my-2">
                                    <Link className="footerLinks" to="/milka/members"><p>  חברי מועדון  </p></Link>
                                </div>
                                <div className="col-6 my-2">
                                    <Link className="footerLinks" to="/milka/barmenu"> <p>  תפריט בר </p> </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 text-light" style={{ textAlign: "center", borderTop: "2px dashed gray" }}>
                            <div className="card-body mt-4">
                                <h4 className="card-title">מילקה קריון</h4>
                                <p className="card-text"><DirectionsIcon /> עפר הקריון, דרך עכו 192 </p>
                                <p className="card-text"> <CallIcon /> <a href="tel:048774343" style={{ color: "white" }}> 04-877-4343</a> </p>

                            </div>
                        </div>
                        <div className="footerLogo col-12" style={{ textAlign: "center", borderLeft: "1px solid white" }}>
                            <img src={CafeLogo} className="card-img" alt="footer logo" style={{ height: "150px", width: "auto", borderRadius: "25px" }} />
                        </div>

                        <div className="col-12 container mt-3 text-light" style={{ textAlign: "center" }}>
                            <h6> שתפו אותנו ברשתות החברתיות</h6>
                            <div className="mt-2">
                                <FacebookShareButton
                                    className="px-2"
                                    quote="בואו להתפנק אצלנו בתפריט משגע, מחכים לכם ♥"
                                    url={this.state.shareUrl}>
                                    <FacebookIcon size={30} round />
                                </FacebookShareButton>

                                <WhatsappShareButton
                                    className="px-2"
                                    title="בואו להתפנק אצלנו בתפריט משגע, מחכים לכם!"
                                    url={this.state.shareUrl}>
                                    <WhatsappIcon size={30} round />
                                </WhatsappShareButton>

                                <EmailShareButton
                                    className="px-2"
                                    subject="בוקר- צהריים - ערב"
                                    body="בואו להתפנק אצלנו בתפריט משגע, מחכים לכם ♥"
                                    url={this.state.shareUrl}>
                                    <EmailIcon size={30} round />
                                </EmailShareButton>
                            </div>
                        </div>

                    </div >
                </div >


                <div className="col-12 p-5 text-light" style={{ textAlign: "center", opacity: "0.5" }}>
                    <p>Made with <FavoriteBorderIcon color="error" fontSize="default" /> by <a href="http://jdevelopments.co.il" style={{ color: "white" }}>jdevelopments.co.il</a>   </p>
                </div>

            </div >
        );
    }
}

export default Footer;










