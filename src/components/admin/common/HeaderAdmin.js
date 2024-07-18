import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  OverlayTrigger,
  Tooltip,
  Offcanvas,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
import { FaUserCircle } from "react-icons/fa";

function HeaderAdmin({ handleLogout }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const expand = "lg";

  return (
    <>
      <Navbar expand={expand} className="adminNavbar">
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/" className="d-flex justify-content-center">
            <img src={Logo} alt="LOGO" className="img-fluid" width={30} />
            &nbsp;
            <span style={{ color: "#7C2C83", fontWeight: "bolder" }}>
              7STEPS
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/home" activeClassName="active">
                HOME
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" activeClassName="active">
                ABOUT
              </Nav.Link>
              <Nav.Link as={NavLink} to="/hope" activeClassName="active">
                HOPE
              </Nav.Link>
              <Nav.Link as={NavLink} to="/portfolio" activeClassName="active">
                PORTFOLIO
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/ourprogrammes"
                activeClassName="active"
              >
                OUR PROGRAMMES
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contactus" activeClassName="active">
                CONTACT US
              </Nav.Link>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="tooltip-bottom" show={showTooltip.toString()}>
                    Other Modules
                  </Tooltip>
                }
              >
                <NavDropdown
                  title="..."
                  id="basic-nav-dropdown"
                  className="other-modules-dropdown"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavDropdown.Item as={NavLink} to="/header">
                    Header
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/footer">
                    Footer
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/privacypolicy">
                    Privacy Policy
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/termsofuse">
                    Terms Of Use
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/testimonial">
                    Testimonial
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/hopetesimonial">
                    Hope Testimonial
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/certification">
                    Certifications
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/trainingexp">
                  Training Experience
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/trainingschool">
                  Training In Schools
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/schooltraining">
                  School Training Programmes
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/hopetesimonial">
                    Hope Testimonial
                  </NavDropdown.Item>
                </NavDropdown>
              </OverlayTrigger>
              <NavDropdown
                title={<FaUserCircle size={24} />}
                id="user-dropdown"
                className="user-dropdown"
              >
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas
        show={showOffcanvas}
        onHide={handleClose}
        className="adminNavbar"
        id="offcanvasNavbar"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={Logo} alt="LOGO" className="img-fluid" width={30} />
            &nbsp;
            <span style={{ color: "#7C2C83", fontWeight: "bolder" }}>
              7STEPS
            </span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="me-auto flex-column">
            <Nav.Link
              as={NavLink}
              to="/home"
              activeClassName="active"
              onClick={handleClose}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              activeClassName="active"
              onClick={handleClose}
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/hope"
              activeClassName="active"
              onClick={handleClose}
            >
              HOPE
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/portfolio"
              activeClassName="active"
              onClick={handleClose}
            >
              PORTFOLIO
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/ourprogrammes"
              activeClassName="active"
              onClick={handleClose}
            >
              OUR PROGRAMMES
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contactus"
              activeClassName="active"
              onClick={handleClose}
            >
              CONTACT US
            </Nav.Link>
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="tooltip-bottom" show={showTooltip.toString()}>
                  Other Modules
                </Tooltip>
              }
            >
              <NavDropdown
                title="..."
                id="basic-nav-dropdown"
                className="user-dropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <NavDropdown.Item as={NavLink} to="/header">
                  Header
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/footer">
                  Footer
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/privacyandpolicy">
                  Privacy Policy
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/termsofuse">
                  Terms Of Use
                </NavDropdown.Item>
              </NavDropdown>
            </OverlayTrigger>
            <NavDropdown
              title={<FaUserCircle size={24} />}
              id="user-dropdown"
              className="user-dropdown"
            >
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default HeaderAdmin;
