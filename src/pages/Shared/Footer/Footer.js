import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
    const addIcon = <FontAwesomeIcon icon={faMapMarker} />
    const envIcon = <FontAwesomeIcon icon={faEnvelope} />
    const phnIcon = <FontAwesomeIcon icon={faPhone} />
    return (
        <>
            <footer className='foot'>
                <Container>
                    <Row>
                        <Col md={3} sm={6} xs={12} className='text-start column-gap-responsive'>
                            <div className="foot-title">
                                <img src="https://i.ibb.co/K7Cj5x3/OBJECTS.png" alt="" />
                            </div>
                            <div className="foot-detail-1">
                                <p>A Powerful & Beautiful Multi-Purpose WordPress theme with tons of advanced features.</p>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12} className='text-start column-gap-responsive'>
                            <div className="foot-title">
                                <h2>Twitter Feeds</h2>
                            </div>
                            <ul className="foot-detail-3">
                                <li>@kingedeborg @Google Hey, Thanks for writing in! Please submit a ticket on our helpcenter, and our agents will be… <small className="fw-lighter">https://t.co/EaiWOIGEmo</small></li>
                                <li>@HenrySefaBoaky1 Check out our theme Gioia which has all necessary elements to build a multi vendor marketplace. <small className="fw-lighter"> https://t.co/c9BlYxZBlL</small> </li>
                            </ul>

                        </Col>
                        <Col md={3} sm={6} xs={12} className='text-start column-gap-responsive'>
                            <div className="foot-title">
                                <h2>Resent Post</h2>
                            </div>
                            <ul className="foot-detail-3">
                                <li>Traveling – It Leaves You Speechless, Then Turns You Into A Storyteller</li>
                                <li><small className="fw-lighter">February 21, 2018</small></li>
                                <li>A Journey Is Always Best Measured In New Friends, Rather Than Miles</li>
                                <li><small className="fw-lighter">February 01, 2018</small></li>

                            </ul>
                        </Col>
                        <Col md={3} sm={6} xs={12} className='text-start column-gap-responsive'>
                            <div className="foot-title">
                                <h2>Contact info</h2>
                            </div>
                            <ul className="foot-detail-4">
                                <li>{addIcon}732/21 Second Street, Manchester, King Street, Kingston United Kingdom</li>
                                <li>{envIcon} info@medicit.com</li>
                                <li>{phnIcon} +123 - 765 - 7645</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div className=" container">
                    <hr />
                    <p ><small>© 2021 Qode Interactive, All Rights Reserved</small></p>
                </div>


            </footer>
        </>
    );
};

export default Footer;