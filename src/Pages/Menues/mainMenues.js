import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './mainMenues.css';

class MainMenues extends Component {

    state = {

    }

    render() {
        return (
            <div className="mainView">
                <Container className="menuButtons">
                    <Row>
                        <Col xs={12} className="button">
                            <Link to="/cafemenu" className="menuLink">
                                <Button variant="light" id="buttonDisplay">
                                    תפריט בית קפה
                            </Button>
                            </Link>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} className="button">
                            <Link to="/cafemenu" className="menuLink">
                                <Button variant="outline-secondary" id="buttonDisplay" disabled>
                                    תפריט בר
                            </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default MainMenues;