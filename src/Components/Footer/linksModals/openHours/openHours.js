import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import cafeLogo from '../../../../Images/logo.jpg';
import barLogo from '../../../../Images/bar logo.png';

class openHoursModal extends React.Component {

    constructor(props) {
        super()
        this.state = {
            show: false
        }
    }

    handleModal = () => { // פונקציה לתפעול המודל
        this.setState({ show: !this.state.show })
    }

    addVacationFN = () => { // פונקציה להוספת חופשה 
        this.handleModal();
    }

    render() {
        return (
            <>

                <div className="footerLinks col-6 my-2" >
                    <p onClick={() => this.handleModal()} style={{ cursor: "pointer" }}>  שעות פעילות </p>

                    <Modal show={this.state.show} style={{ direction: "rtl", textAlign: "right" }}>
                        <Modal.Header>
                            <Modal.Body>
                                <div className="row">
                                    <div className="col-8">
                                        <h5>שעות פתיחה בית קפה:</h5>
                                        <div> ראשון - 09:00 עד 22:00</div>
                                        <div> שני - 09:00 עד 22:00</div>
                                        <div> שלישי - 09:00 עד 22:00</div>
                                        <div> רביעי - 09:00 עד 22:00</div>
                                        <div> חמישי - 09:00 עד 22:00</div>
                                        <div> שישי - 09:00 עד 01:00</div>
                                        <div> שבת - 10:00 עד 23:00</div>
                                    </div>
                                    <div className="col-4">
                                        <img src={cafeLogo} style={{ width: "100px", height: "auto", borderRadius: "50%", position: "absolute", left: "15px" }} />
                                    </div>
                                </div>

                            </Modal.Body>
                        </Modal.Header>
                        <Modal.Header>
                            <Modal.Body>
                                <div className="row">
                                    <div className="col-8">
                                        <h5>שעות פתיחה בר:</h5>
                                        <div> ראשון - 20:30 עד 01:00</div>
                                        <div> שני - 20:30 עד 03:00</div>
                                        <div> שלישי - 20:30 עד 01:00</div>
                                        <div> רביעי - 20:30 עד 01:00</div>
                                        <div> חמישי - 20:30 עד 02:00</div>
                                        <div> שישי - 20:30 עד 03:00</div>
                                        <div> שבת - 20:30 עד 01:00</div>
                                    </div>
                                    <div className="col-4">
                                        <img src={barLogo} style={{ width: "120px", height: "auto", position: "absolute", left: "5px" }} />
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal.Header>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => this.handleModal()}>
                                סגור
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            </>
        );
    }

}
export default openHoursModal;
