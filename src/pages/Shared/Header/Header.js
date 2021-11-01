import React from 'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import './Header.css'


// const a = {
//     color: "#ffcc05",

// }
const Header = () => {
    const { user, logOut } = useAuth();


    return (
        <div>
            <header className='head'>
                <Container>
                    <Row>
                        <Navbar className="header-top" collapseOnSelect expand="md">
                            <Navbar.Brand as={Link} to="/home">
                                <div className="logo">
                                    <img src="https://i.ibb.co/K7Cj5x3/OBJECTS.png" alt="LOGO" />
                                </div>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                            <Navbar.Collapse className='color justify-content-end nav-menu'>
                                <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                                <Nav.Link as={HashLink} to="/home#plans">Plans</Nav.Link>
                                <Nav.Link as={NavLink} to="/about">About</Nav.Link>


                                {
                                    user.email ? <div className='d-md-flex flex-row'>

                                        <Nav.Link as={Link} to="/add_plan">Add a plan</Nav.Link>
                                        <Nav.Link as={Link} to="/Admin">Admin Dashboard</Nav.Link>
                                        <Nav.Link as={Link} to="/my_tour">{user.displayName}</Nav.Link>
                                        <Nav.Link onClick={logOut} as={Link} to="/">Logout</Nav.Link>
                                    </div> :

                                        <Nav.Link onClick={logOut} as={NavLink} to="/login">Login</Nav.Link>
                                }


                            </Navbar.Collapse>
                        </Navbar>
                    </Row>
                </Container>
            </header>
        </div >
    );
};

export default Header;