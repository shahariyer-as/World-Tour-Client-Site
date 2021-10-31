import React from 'react';

import { Button, Card, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './plans.css'


const Plans = ({ plan }) => {
    const { spot, _id, img, cost } = plan;

    return (
        <div>
            <Col>
                <Card className="cards m-3">
                    <Card.Img variant="top" height="350px" src={img} />
                    <Card.Body>
                        <Card.Title>
                            {spot}
                        </Card.Title>
                        <Card.Title>
                            <h4>Price:$.{cost}</h4>
                        </Card.Title>
                        <Card.Title>
                            <Button className=" card-btn"> <Nav.Link className=" text-light" as={Link} to={`/book/${_id}`} >Booking Now</Nav.Link></Button>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Plans;