import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../../components/CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';


function NavBar() {
return (
    <div className='Navbar'>
    <Navbar bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
        <Navbar.Brand as={NavLink} to="/">
            <img
            src="/assets/images/logo2.png"
            width="150"
            height="100"
            className="d-inline-block align-top"
            alt="Tecno House"
            />
        </Navbar.Brand>
        <Nav className="ml-auto">
            <div class="position-absolute top-50 start-50 translate-middle d-flex justify-content-around m-2 p-2 fs-5">
            <Nav.Link as={NavLink} to="/"></Nav.Link>
            <Nav.Link as={NavLink} to={"/category/cellphones"}>Cellphones</Nav.Link>
            <Nav.Link as={NavLink} to={"/category/computers"}>Computers</Nav.Link>
            <Nav.Link as={NavLink} to={"/category/notebooks"}>Notebooks</Nav.Link>
            <Nav.Link as={NavLink} to={"/contact"}>Contact</Nav.Link>
            </div>
            <div class="position-absolute top-10 start-70 translate-middle d-flex justify-content-around m-1 p-1 fs-9 text-nowrap">
            <Nav.Link as={NavLink} to="/singup" className="Sing Up" aria-label="Toolbar with Button groups">Sing Up</Nav.Link>
            <Nav.Link as={NavLink} to="/singin" className="Sing In" aria-label="Toolbar with Button groups">Sing In</Nav.Link>
            <Nav.Link as={NavLink} to="/cart" className="Cart"><CartWidget/></Nav.Link>
            </div>
        </Nav>
        </Container>
    </Navbar>
    </div>
)
}
export default NavBar;
