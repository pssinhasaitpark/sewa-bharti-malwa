import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header, SliderSection, SliderRight } from "../../components/index"; // Adjust the path as necessary
const HomeLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100 ">
      <div>
        <Header />
      </div>
      <div className="container-fluid ml-0 flex-grow-1">
        <Row>
          <Col md={8} className="main-content p-0 m-0">
            <SliderSection />
          </Col>

          <Col md={4} className="sidebar">
            <SliderRight />
          </Col>
        </Row>
      </div>

      <footer className="bg-dark text-white text-center py-3">
        <Container>
          <p>&copy; 2023 My Website. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default HomeLayout;
