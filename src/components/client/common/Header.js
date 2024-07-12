import React from 'react'
import "../../../styles/client.css"
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from '../../../assets/Logo.png';

function Header() {
  const expand = "lg";
  return (
    <Navbar expand={expand} className="header">
      <Container fluid>
        <Navbar.Brand href="#" className='align-items-center mx-3'>
        <img src={Logo} alt="7 STEPS" className="img-fluid" width={50} />
        <span className='mx-2' style={{ color: "#fff", fontWeight: "bolder" }}>7 STEPS</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            <img src={Logo} alt="7 STEPS" className="img-fluid" width={50} />
            <span className='mx-2 ' style={{ color: "#7C2C83" }}>7 STEPS</span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink
                to="/"
                exact
                activeClassName="active"
                className="custom-nav-link"
                style={{
                  textDecoration: "none",
                }}
              >
                HOME
              </NavLink>
              <NavLink
                to="/about"
                activeClassName="active"
                className="custom-nav-link"
                style={{
                  textDecoration: "none",
                }}
              >
                ABOUT
              </NavLink>

              <NavLink
                to="/hope"
                activeClassName="active"
                className="custom-nav-link"
                style={{
                  textDecoration: "none",
                }}
              >
                HOPE
              </NavLink>

              <NavLink
                to="/portfolio"
                activeClassName="active"
                className="custom-nav-link"
                style={{
                  textDecoration: "none",
                }}
              >
                PORTFOLIO
              </NavLink>

              <NavLink
                to="/ourprogrammes"
                activeClassName="active"
                className="custom-nav-link"
                style={{
                  textDecoration: "none",
                }}
              >
                OUR PROGRAMMES
              </NavLink>

              <NavLink
                to="/contactus"
                activeClassName="active"
                className="custom-nav-link"
                style={{
                  textDecoration: "none",
                }}
              >
                CONTACT US
              </NavLink>

              <NavLink
                to="/login"
                activeClassName="active"
                className="custom-nav-link"
                style={{
                  textDecoration: "none",
                }}
              >
                LOGIN
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default Header