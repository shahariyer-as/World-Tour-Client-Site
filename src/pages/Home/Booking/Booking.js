import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import "./Booking.css";

const Booking = () => {
  const { user } = useAuth();
  const { bookingId } = useParams();
  const [singlePlan, setSinglePlan] = useState({});

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const bookingDetails = data;
    const date = new Date();
    const bookingDate =
      date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    bookingDetails.date = bookingDate;
    bookingDetails.bookingId = singlePlan._id;
    bookingDetails.status = "Pending";
    console.log(data);

    fetch("https://world-tour-server-site.vercel.app/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Booking Confirmed");
          reset();
        }
      });
  };

  const getSinglePlan = () => {
    axios
      .get(`https://world-tour-server-site.vercel.app/plans/${bookingId}`)
      .then((res) => {
        const myPlans = res.data;
        setSinglePlan(myPlans);
        // console.log(myPlans)
      });
  };
  useEffect(() => getSinglePlan(), []);

  return (
    <div className="text-center mt-2">
      <div>
        <img className="spot-img" src={singlePlan.img} alt="" />
      </div>
      {/* booking information  */}
      <Container className="my-5">
        <Row className="g-3">
          <Col md={7}>
            <div className="detail-section p-3">
              <h1 className=" border-bottom border-secondary">
                {singlePlan.spot}
              </h1>
              <div className="text-start">
                <h4 className="fw-bold my-4">Overview</h4>

                {/* cost part  */}
                <div className="mb-3">
                  <h5 className="fw-bold">
                    <i className="fas fa-euro-sign me-2"></i>Cost
                  </h5>
                  <li>
                    <i className="fas fa-euro-sign me-1"></i> {singlePlan.cost}{" "}
                    for groups of 1-3 persons
                  </li>
                  <li>
                    <i className="fas fa-euro-sign me-1"></i>{" "}
                    {singlePlan.extraCost} for extra per additional person{" "}
                  </li>
                </div>

                {/* duration part */}
                <div className="mb-3">
                  <h5 className="fw-bold">
                    <i className="fas fa-clock me-2"></i>Duration
                  </h5>
                  <li>{singlePlan.duration}</li>
                </div>

                {/* transport  */}
                <div className="mb-3">
                  <h5 className="fw-bold">
                    <i className="fas fa-subway me-2"></i>Transport
                  </h5>
                  <li>{singlePlan.transport}</li>
                </div>

                {/* include exclude part  */}
                <div className="mb-3">
                  <h6 className="fw-bold">
                    <i className="fas fa-check text-success me-2"></i>INCLUDED
                  </h6>
                  <li>Two way tickets.</li>
                  <li>3 Nights Stay in three star hotel</li>
                  <li>6 days city tour</li>
                  <li>visa processing and required vouchers</li>
                </div>
                {/* excluded  */}
                <div>
                  <h6 className="fw-bold">
                    <i className="fas fa-times me-2 text-danger"></i>EXCLUDED
                  </h6>
                  <li>Embassy Fee</li>
                  <li>Any other service not mentioned in inclusions</li>
                </div>
              </div>
            </div>
          </Col>

          {/* booking form  */}
          <Col md={5} className="booking-form">
            <div className="p-3 form-section">
              <h3 style={{ backgroundColor: "#e0ab1a" }} className="fw-bolder">
                Let's Book Tour
              </h3>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="text-start fw-bold"
              >
                <label htmlFor="name">Name</label>
                <br />
                <input
                  defaultValue={user.displayName}
                  required
                  placeholder="enter your name"
                  {...register("name")}
                />
                <br />
                <label htmlFor="email">Email</label>
                <br />
                <input
                  defaultValue={user.email}
                  required
                  placeholder="enter your email"
                  {...register("email")}
                />
                <br />
                <label htmlFor="address">Address</label>
                <br />
                <input placeholder="your address" {...register("address")} />
                <br />

                <input placeholder="number of guests" {...register("person")} />
                <br />
                <label htmlFor="number">Phone</label>
                <br />
                <input placeholder="phone number" {...register("phone")} />
                <br />
                <input
                  className=" text-light sub-btn"
                  type="submit"
                  value="Confirm Booking"
                />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Booking;
