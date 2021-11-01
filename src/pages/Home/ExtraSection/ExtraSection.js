import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import './ExtraSection.css'
const ExtraSection = () => {
    return (
        <div className="text-light mt-5 ">
            <div className="extra-section py-3 mb-5">
                <h1 style={{ color: "#daae21" }} className="text-dark text-center my-4">EXPLORE OUR BLOG</h1>
                <Row xs={1} md={2}>
                    <Col>
                        <div className="d-md-flex align-items-center justify-content-between container">
                            <div className="d-flex align-items-center justify-content-center">
                                <img width="250px" src="https://demo2.pavothemes.com/activland/wp-content/uploads/2021/08/h1_img-1.png" alt="" />
                            </div>
                            <div className="ms-md-5">
                                <h6 style={{ backgroundColor: "#daae21" }}>WHY CHOOSE US</h6>
                                <h3 style={{ backgroundColor: "#daae21" }}>BOOK WITH CONFIDENCE</h3>
                                <p style={{ backgroundColor: "#daae21" }}>As one of the #1 things to do in Activland, we’re confident that what we do is excellent and provides real value for money.However, if for any reason we let you down, you’ll be eligible for our 100% satisfaction guarantee and we’ll refund you your money, no questions asked.</p>
                            </div>
                        </div>
                    </Col>
                    <Col>

                    </Col>
                </Row>
                <Row xs={1} md={2}>
                    <Col>

                    </Col>
                    <Col>
                        <div className="d-md-flex align-items-center justify-content-between container ">
                            <div className="ms-md-5">
                                <h6 style={{ backgroundColor: "#daae21" }}>OUR PHILOSOPHY</h6>
                                <h3 style={{ backgroundColor: "#daae21" }}>MEMORABLE OUTDOOR EXPERIENCES</h3>
                                <p style={{ backgroundColor: "#daae21" }}>Our exhilarating whitewater rafting, kayaking, and zip lining activities make for fun and memorable adventures. We strive to enhance the lives of our guests by creating the best human-powered outdoor adventures available.</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <img width="250px" src="https://demo2.pavothemes.com/activland/wp-content/uploads/2021/09/h1_img-2.png" alt="" />
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>

            {/* extra section 2  */}
            <div className="extra-section-2 py-3  mt-5">
                <div className="m-md-4">
                    <h1>Latest Stories</h1>
                    <Row xs={1} md={3} className="g-3">
                        <Col md={6}>
                            <Carousel>
                                <Carousel.Item>
                                    <img className="rounded latest-stories" src="https://i.ibb.co/H2G1cjN/matheus-ferrero-Tkr-Rvwxjb-8-unsplash.jpg" alt="" />

                                    <Carousel.Caption className="text-start  fw-bold">
                                        <h6>Cruise</h6>
                                        <h1>As Virgin Voyages prepares to set sail, how do its COVID measures</h1>
                                        <small>October 30th, 2021, 4 min read</small>
                                        <br />
                                        <h6>Tour and Tourist writer Zachary Laks hopped aboard Richard Branson’s new Virgin Voyages to see how cruise lines are pivoting to COVID safety protocols.</h6>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col md={3}>
                            <div className="container">
                                <div>
                                    <img className="rounded-pill " src="https://i.ibb.co/qYnDkRF/Screenshot-2021-11-01-221334.png" alt="" />
                                </div>
                                <div>
                                    <h6>History</h6>
                                    <h3>Why you should take a cacao tour in Latin America</h3>
                                    <small className="text-justify">Thousands of years of cacao expertise makes Latin America and the Caribbean the ideal region for chocolate tours. Here are our tastiest recommendations.</small>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="container">
                                <div>
                                    <img className="rounded-pill" src="https://i.ibb.co/165SSLP/Image-from-i-OS-8.jpg" alt="" />

                                </div>
                                <div>
                                    <h6>Cruise</h6>
                                    <h3>As cruising restarts in the Caribbean, the</h3>
                                    <small>As cruise lines take their first steps toward post-pandemic normalcy, the relaunch of a newly refurbished Windstar ship seems to exemplify the complexities of cruising now.</small>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;