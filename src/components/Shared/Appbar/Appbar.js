import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Appbar = () => {
    return (
      <div >
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" >
  <Container>

  <div className="d-flex">
                        <img src="https://i.ibb.co/QDXCkJ9/Navbarlogo.jpg" style={{ height: '50px', width: '100px' }} alt="" />
                      {/*   <h1 className="navbar-brand">MAMA <br />JABEN?</h1> */}
                    </div>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link  as={HashLink} to="/home#about">about</Nav.Link>
      
     </Nav> 
    <Nav>
      <Nav.Link  as={HashLink} to="/home#services">Services</Nav.Link>
      <Nav.Link  as={HashLink} to="/home#doctor">
        Doctors
      </Nav.Link>
      <button className="btn btn-warning me-2" >Log In</button> 
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>
    );
};

export default Appbar;