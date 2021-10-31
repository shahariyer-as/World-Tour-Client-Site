import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div className="">
            <div className="common-banner">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="section-title">
                                <h2>ABOUT US</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className='my-5'>
                <Row>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div className="main-features">
                            <div className="feature-icon-1">

                            </div>
                            <div className="feature-details">
                                <h2>Touris Resercher</h2>
                                <p>We have a good team for tourist reacher so we get best over all this plartform to gat all</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div className="main-features">
                            <div className="feature-icon-2">

                            </div>
                            <div className="feature-details">
                                <h2>Life Time Good Services</h2>
                                <p>We are getting over all good service . And we not take more money.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div className="main-features">
                            <div className="feature-icon-1">

                            </div>
                            <div className="feature-details">
                                <h2>Best Adventure</h2>
                                <p>Most expensive hi-tech labs are created here for safety and trush of our patients and relief also.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div className="main-features">
                            <div className="feature-icon-2">

                            </div>
                            <div className="feature-details">
                                <h2>Vecation Offer</h2>
                                <p>Most experienced specialized vecation offerd for you they are very much dedicated to all.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;