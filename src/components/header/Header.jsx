import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderLogo from "../../assets/icons/HeaderLogo.svg"; // Ensure this path is correct

const Header = () => {
  return (
    <Navbar
      variant="light"
      expand="lg"
      className="justify-content-between px-5"
      style={{ 
        borderTop: "4px solid #FF5733",
        backgroundColor: "white",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}
    >
      <Navbar.Brand href="#home">
        <img src={HeaderLogo} alt="Header Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#home" className="text-dark mx-2">
            Home
          </Nav.Link>
          <Nav.Link href="#about" className="text-dark mx-2">
            About
          </Nav.Link>
          <Nav.Link href="#projects" className="text-dark mx-2">
            Projects <span style={{ fontSize: '0.8em' }}>▼</span>
          </Nav.Link>
          <Nav.Link href="#warriors" className="text-dark mx-2">
            Our Warriors
          </Nav.Link>
          <Nav.Link href="#impact" className="text-dark mx-2">
            Impact <span style={{ fontSize: '0.8em' }}>▼</span>
          </Nav.Link>
          <Nav.Link href="#works" className="text-dark mx-2">
            Our Works <span style={{ fontSize: '0.8em' }}>▼</span>
          </Nav.Link>
          <Nav.Link href="#join" className="text-dark mx-2">
            Join Hands <span style={{ fontSize: '0.8em' }}>▼</span>
          </Nav.Link>
          <Nav.Link href="#gallery" className="text-dark mx-2">
            Gallery
          </Nav.Link>
          <Nav.Link href="#blog" className="text-dark mx-2">
            Blog / News <span style={{ fontSize: '0.8em' }}>▼</span>
          </Nav.Link>
          <Nav.Link href="#partners" className="text-dark mx-2">
            Partners
          </Nav.Link>
          <Nav.Link href="#contact" className="text-dark mx-2">
            Contact
          </Nav.Link>
        </Nav>
        <Button
          variant="warning"
          className="text-white"
          style={{ 
            backgroundColor: "#FF5733",
            fontSize: "1.1em",
            padding: "8px 20px"
          }}
        >
          Donate Now
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;