import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/header/Header"; // Adjust the path as necessary
const HomeLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div>
      <Header />
      </div>
      <Container className="flex-grow-1">
        <Row>
          <Col md={8} className="main-content">
            <h2>Main Content</h2>
            <p>
              This is the main content area. It will take up the majority of the
              space on larger screens.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
            </p>
          </Col>

          <Col md={4} className="sidebar">
            <h3>Sidebar</h3>
            <p>
              This is the sidebar. It will be displayed to the right of the main
              content on larger screens and below the main content on smaller
              screens.
            </p>
          </Col>
        </Row>
      </Container>

      <footer className="bg-dark text-white text-center py-3">
        <Container>
          <p>&copy; 2023 My Website. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default HomeLayout;
