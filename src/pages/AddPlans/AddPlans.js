import axios from 'axios';
import React from 'react';
import './AddPlans.css'
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-bootstrap';

const AddPlan = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        // console.log(data);
        axios.post('http://localhost:5000/plans', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                    // console.log(res.data)
                }
            })
    }
    return (
        <div className="add-plan">
            <div className="my-5">
                <Row>
                    <Col md={3}>
                        <div className="d-flex align-items-center ">
                            <img width="120px" className="rounded-circle" src="" alt="" />
                            <div className="text-light">
                                <h5>TOUR </h5>

                            </div>
                        </div>

                    </Col>
                    <Col md={9}>
                        <div className=" container p-3">
                            <h3 style={{ color: "#daae21" }} >Add A Plan</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="text-start fw-bold">
                                <Row className="g-3 add-plan-input">
                                    <Col md={6}>
                                        <div className="d-flex flex-column">
                                            <label htmlFor="name">Spot</label>
                                            <input required placeholder="enter spot name" {...register("spot")} />
                                            <label htmlFor="text">Description</label>
                                            <textarea {...register("description")} placeholder="Description" />
                                            <label htmlFor="text">Transport</label>
                                            <input placeholder="available transport" {...register("transport")} />
                                            <label htmlFor="number">Cost</label>
                                            <input placeholder="Total Cost" {...register("cost")} />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="d-flex flex-column">
                                            <label htmlFor="number">Extra Cost</label>
                                            <input placeholder="extra cost for guest" {...register("extraCost")} />
                                            <label htmlFor="number">Duration</label>
                                            <input placeholder="duration from destination" {...register("duration")} />
                                            <label htmlFor="number">Image URL</label>
                                            <input {...register("img")} placeholder="image url" />
                                            <br />
                                            <input style={{ backgroundColor: "#daae21" }} className="text-light  border-0" type="submit" value="Add Plan" />
                                        </div>
                                    </Col>
                                </Row>

                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );

};

export default AddPlan;