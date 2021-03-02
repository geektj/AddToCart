import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../src/assets/css/style.scss';
import '../components/cart';
// import {Nav} from 'react-bootstrap';
// import NavDropdown from 'react-bootstrap/NavDropdown';

let Header = () => {
    let getCart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []
    return(
        <>
        <Navbar collapseOnSelect expand="lg sm md xl" bg="dark" variant="dark" sticky="top" fixed="top">
            <Navbar.Brand href="/">Shopping-Cart</Navbar.Brand>
            <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="header-cart" id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav className="right-side">
                <Nav.Link href="#deets">More deets</Nav.Link>
                {/* <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link> */}
                <Link to="/cart" className="cart">
                    <div className="addtocart" >
                        <i class="fas fa-shopping-bag"></i>
                        <div className='counter'>{getCart.length}</div>
                    </div>
                </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}
export default Header;