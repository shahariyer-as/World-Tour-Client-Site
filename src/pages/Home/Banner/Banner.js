import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="mb-5">
            <Carousel className="carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/KLJdq15/Screenshot-2021-10-30-020141.png"
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-start carousel-text   fw-bold">
                        <h1>YOUR JOURNEY BEGINS</h1>
                        <h2>SPECIAL FEELING LOOK TO JOURNEY</h2>
                        <h3>GIVE SOME SPECIAL PACKAGE TO ALL ABOUT MOMENT</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/5BG2TwY/1991562-Freepik.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className="text-start carousel-text   fw-bold">
                        <h1>Welcome to our page</h1>
                        <h2>We're offering honeymoon special</h2>
                        <h3>You can book your favourite package from anywhere</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/mN7zXgn/Screenshot-2021-10-30-015930.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption className="text-start carousel-text  fw-bold">
                        <h1>Welcome to our page</h1>
                        <h2>We're offering honeymoon special</h2>
                        <h3>You can book your favourite package from anywhere</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div >
    );
};

export default Banner;