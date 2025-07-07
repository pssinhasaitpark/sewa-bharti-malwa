import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderLogo from "../../assets/icons/HeaderLogo.svg";
import { FaChevronDown } from "react-icons/fa";
import "./Header.css";
import { BiHome } from "react-icons/bi";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleDonateNowClick = () => {
    navigate("/donation");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <Navbar
      variant="light"
      expand="lg"
      className="justify-content-between px-5"
      style={{
        borderTop: "4px solid #FF5733",
        backgroundColor: "white",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        position: "relative",
      }}
    >
      <Navbar.Brand href="#home">
        <img src={HeaderLogo} alt="Header Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Container fluid>
          <Row className="w-100">
            <Col xs={9} className="d-flex align-items-center">
              <Nav className="mx-auto">
                <Nav.Link href="#home" className="mx-2 fs-6 text-dark">
                  Home
                </Nav.Link>
                <Nav.Link href="#about" className="mx-2 fs-6 text-dark">
                  About
                </Nav.Link>

                <NavDropdown
                  title={
                    <>
                      <span className="text-dark">Projects</span>{" "}
                      <FaChevronDown className="custom-dropdown-icon text-dark" />
                    </>
                  }
                  id="projects-dropdown"
                  className="mx-2 fs-6"
                >
                  <NavDropdown.Item href="#project1" className="text-dark">
                    Project 1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#project2" className="text-dark">
                    Project 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#project3" className="text-dark">
                    Project 3
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title={
                    <>
                      <span className="text-dark">Our Works</span>{" "}
                      <FaChevronDown className="custom-dropdown-icon text-dark" />
                    </>
                  }
                  id="our-works-dropdown"
                  className="mx-2 fs-6"
                >
                  <NavDropdown.Item href="#work1" className="text-dark">
                    Work 1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#work2" className="text-dark">
                    Work 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#work3" className="text-dark">
                    Work 3
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#warriors" className="mx-2 fs-6 text-dark">
                  Our Warriors
                </Nav.Link>

                <NavDropdown
                  title={
                    <>
                      <span className="text-dark">Impacts</span>{" "}
                      <FaChevronDown className="custom-dropdown-icon text-dark" />
                    </>
                  }
                  id="impacts-dropdown"
                  className="mx-2 fs-6"
                >
                  <NavDropdown.Item href="#impact1" className="text-dark">
                    Impact 1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#impact2" className="text-dark">
                    Impact 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#impact3" className="text-dark">
                    Impact 3
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title={
                    <>
                      <span className="text-dark">Join Hands</span>{" "}
                      <FaChevronDown className="custom-dropdown-icon text-dark" />
                    </>
                  }
                  id="join-hands-dropdown"
                  className="mx-2 fs-6"
                >
                  <NavDropdown.Item href="#join1" className="text-dark">
                    Join 1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#join2" className="text-dark">
                    Join 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#join3" className="text-dark">
                    Join 3
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#gallery" className="mx-2 fs-6 text-dark">
                  Gallery
                </Nav.Link>
                <Nav.Link href="#blog" className="mx-2 fs-6 text-dark">
                  Blog / News
                </Nav.Link>
                <Nav.Link href="#partners" className="mx-2 fs-6 text-dark">
                  Partners
                </Nav.Link>
                <Nav.Link href="#contact" className="mx-2 fs-6 text-dark">
                  Contact
                </Nav.Link>
              </Nav>
            </Col>
            <Col
              xs={3}
              className="d-flex justify-content-end align-items-center"
            >
              {location.pathname === "/donation" ? (
                <Button
                  variant="warning"
                  className="text-white"
                  style={{
                    backgroundColor: "#FF5733",
                    fontSize: "1.3em",
                    padding: "12px 25px",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={handleHomeClick}
                >
                  <BiHome style={{ marginRight: "8px" }} />
                  <span className="pt-1">Home</span>
                </Button>
              ) : (
                <Button
                  variant="warning"
                  className="text-white"
                  style={{
                    backgroundColor: "#FF5733",
                    fontSize: "1.3em",
                    padding: "12px 25px",
                    border: "none",
                  }}
                  onClick={handleDonateNowClick}
                >
                  Donate Now
                </Button>
              )}
            </Col>
          </Row>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
