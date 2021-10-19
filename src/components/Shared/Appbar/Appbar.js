import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hoocks/useAuth';
import {HashLink} from 'react-router-hash-link';


const Appbar = () => {
  const{user,logOut}=useAuth();
    return (
      <div  >
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark"  sticky="top">
  <Container>

  <div className="d-flex">
                        <img src="https://i.ibb.co/QDXCkJ9/Navbarlogo.jpg" style={{ height: '50px', width: '100px' }} alt="" />
                         <h1 className=" ms-1 navbar-brand">CALL <br />DOCTOR</h1> 
                    </div>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to ="/home#about">about</Nav.Link>
      
     </Nav> 
    <Nav>
      <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
      <Nav.Link  as={HashLink} to ="/home#doctors">
        Doctors
      </Nav.Link>
      {user?.email ?
      <button  onClick={logOut}className="btn btn-warning me-2" >Log Out</button> :
      <Nav.Link as={Link} to="/login">
        Login
      </Nav.Link>}
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName }</a>
      </Navbar.Text>

      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>
    );
};

export default Appbar;