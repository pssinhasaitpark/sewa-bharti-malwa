import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./LandingPage.css";
import {
  SliderSection,
  SliderRight,
  GoalsCard,
  OpportunitiesCard,
  Banner,
  FlagShipComponent,
  MemoriesSlider,
  EventsComponent,
  EventsSliderComponent,
  MomentCaptured,
  Timeline,
  BlogSlider,
  FlagShipProject,
  YoutubeSlider,
  SocialMediaComponent,
} from "../../components/index";
import DescriptionSlider from "../../components/descriptionSlider/DescriptionSlider";
import Partners from "../../components/partners/Partners.jsx"; // Import Partners component

const HomeLayout = ({ blogSliderRef, partnersRef }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Container fluid className="flex-grow-1 mb-5 pb-5 pb-lg-0">
        <Row>
          <Col xs={12} md={12} lg={8} className="mb-4 mb-lg-0">
            <SliderSection />
          </Col>
          <Col xs={12} md={12} lg={4}>
            <SliderRight />
          </Col>
        </Row>
      </Container>
      <Container className="my-4">
        <Banner />
      </Container>
      <Container>
        <Row>
          <Col>
            <p>What We ARe____________</p>
          </Col>
        </Row>
      </Container>
      <Container className="my-4">
        <FlagShipComponent />
      </Container>
      <Container className="my-4">
        <Row>
          <Col>
            <FlagShipProject />
          </Col>
        </Row>
      </Container>
      <Container className="my-4">
        <Timeline />
      </Container>
      <Container className="my-4">
        <Row>
          <Col md={4} className="main-content p-0">
            <EventsComponent />
          </Col>
          <Col md={8} className="sidebar p-0">
            <EventsSliderComponent />
          </Col>
        </Row>
      </Container>
      <Container className="my-4">
        <YoutubeSlider />
      </Container>

      <Container>
        <Row>
          <Col>
            <p>What We ARe____________</p>
          </Col>
        </Row>
      </Container>
      <Container className="my-4">
        <MomentCaptured />
      </Container>
      <Container className="my-4">
        <SocialMediaComponent />
      </Container>
      <Container className="my-4" ref={blogSliderRef}>
        <BlogSlider />
      </Container>
      {/* Partners Section */}
      <div ref={partnersRef}>
        <Partners />
      </div>
    </div>
  );
};

export default HomeLayout;
