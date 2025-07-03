import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

import "./LandingPage.css";
import {
  Header,
  SliderSection,
  SliderRight,
  AchievementsCard,
  GoalsCard,
  OpportunitiesCard,
  Banner,
  FlagShipComponent,
  MemoriesSlider,
} from "../../components/index"; // Adjust the path as necessary
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

          <Col md={4} className="sidebar m-0 p-0 ">
            <SliderRight />
          </Col>
        </Row>
      </div>
      <div className="mt-4 custom-width">
        <Row className="justify-content-md-center">
          <Col xs={12} md={4} className="mb-4">
            <AchievementsCard />
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <GoalsCard />
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <OpportunitiesCard />
          </Col>
        </Row>
      </div>
      <div className=" custom-width my-4 ">
        <Banner />
      </div>
      <Row className="custom-width">
        <p>
          What We
          ARe&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____________
        </p>
      </Row>
      <div className="custom-width my-4 ">
        <FlagShipComponent />
      </div>
      <div className="custom-width my-4 ">
        <Row>
               <Col md={6} className="component component-1">
                {/* <MemoriesSlider/> */}
               </Col>
               <Col md={6} className="component component-2">
            
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
