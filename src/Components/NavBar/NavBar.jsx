import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Logo';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from "react-router-dom"


const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="#home"><Logo/></Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">INICIO</Link>
            <Link to="/category/remeras">REMERAS</Link>
            <Link to="/category/pantalones">PANTALONES</Link>
            <Link to="/category/camisas">CAMISAS</Link>
            <Link to="/category/buzos">BUZOS</Link>
          </Nav>
          <Nav>
            <Link to="/carrito" className="ms-auto"><CartWidget/></Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar