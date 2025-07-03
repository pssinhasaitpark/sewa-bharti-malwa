import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FlagShipComponent.css"; // Import the CSS file
import { IoIosArrowRoundForward } from "react-icons/io";

const FlagshipProjects = () => {
  return (
    <Container fluid className="flagship-container">
      <Row>
        <Col>
          <h1 className="flagship-title">
            <span className="flagship">Flagship Projects</span>{" "}
            <span className="define-impact">
              That<br></br> Define Our Impact
            </span>
          </h1>
          <p className="flagship-content">
            Our Flagship Projects Represent The Heart Of Our Mission – Bold
            Ideas Turned Into Action. Each<br></br> Initiative Is Carefully Designed To
            Create Meaningful, Measurable Change In The Communities We Serve.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-between align-items-center">
        <Col xs="auto">
          {/* Other content can go here if needed */}
        </Col>
        <Col xs="auto">
          <div className="button-container">
            <Button variant="warning" className="view-all-button">
              View All
            </Button>
            <div className="arrow-icon">
              <IoIosArrowRoundForward />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FlagshipProjects;
