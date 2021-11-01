
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

import UserBooked from '../UserBooked/UserBooked';

const MyTour = () => {
    const { user } = useAuth();
    const [userBooking, setUserBooking] = useState([]);


    useEffect(() => {
        const email = [user.email];
        console.log('md', email);
        axios.post('http://localhost:5000/booking/user', email)
            .then(res => {
                setUserBooking(res.data);
                console.log('mydat', res.data)

            })

    }, [user])


    return (
        <div className="my-4">
            <h1 className="my-4 text-light text-center">My Booking List</h1>
            <Row xs={1} md={2} className="g-4 ">
                {
                    userBooking.map(booking => <UserBooked
                        key={booking.bookingId}
                        booking={booking}
                    ></UserBooked>)
                }
            </Row>
        </div>
    );
};

export default MyTour;