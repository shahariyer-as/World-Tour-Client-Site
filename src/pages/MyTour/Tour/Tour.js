import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Card, Col, Nav } from 'react-bootstrap';


const Tour = ({ tour }) => {
    // const [tour, setTour] = useBooking()
    const [tourist, setTourist] = useState({})
    const { _id, spot, name, email, date, status } = tour;
    // console.log(_id)



    const handleUpdateStatus = () => {
        const url = `http://localhost:5000/booking/${_id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tourist)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert("Updated Successfully");

            })
    }
    // DELETE AN TOURIST
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://glacial-crag-25753.herokuapp.com/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingTourist = tourist.filter(tourist => tourist._id !== parseInt(id));
                        setTourist(remainingTourist);
                    }
                });
        }
    }

    return (
        <div >

            <Col>
                <Card style={{ backgroundColor: '#daae21' }} className="text-dark fw-bolder">
                    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}

                    <Card.Body className="d-md-flex justify-content-between align-items-center ">
                        <Card.Text className="mx-1">{name}</Card.Text>
                        <Card.Text className="mx-1">{email}</Card.Text>
                        <Card.Text className="mx-1">{spot}</Card.Text>
                        <div>
                            <div onClick={() => handleUpdateStatus(_id)}>
                                {
                                    status ? <div>
                                        <Button>  <Nav.Link className="text-dark"> <i className="fas fa-circle me-2 text-warning"></i> <span>Pending</span></Nav.Link></Button>
                                    </div>

                                        :
                                        <div>
                                            <Nav.Link className="text-dark"> <i className="fas fa-circle me-2 text-success"></i> <span>Approved</span></Nav.Link>
                                        </div>
                                }
                            </div>

                        </div>
                        <Card.Text>{date}</Card.Text>
                        <Card.Text><button onClick={() => handleDeleteUser(_id)} className="bg-danger border-0 rounded">Delete</button></Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div >
    );

};

export default Tour;