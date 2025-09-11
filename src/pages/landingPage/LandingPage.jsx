// import React from "react";
// import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

// import "./LandingPage.css";
// import {
//   Header,
//   SliderSection,
//   SliderRight,
//   AchievementsCard,
//   GoalsCard,
//   OpportunitiesCard,
//   Banner,
//   FlagShipComponent,
//   MemoriesSlider,
//   EventsComponent,
//   EventsSliderComponent,
//   MomentCaptured,
//   Footer,
//   Timeline,
//   BlogSlider,
// } from "../../components/index"; // Adjust the path as necessary
// import DescriptionSlider from "../../components/descriptionSlider/DescriptionSlider";
// const HomeLayout = () => {
//   return (
//     <div className="d-flex flex-column min-vh-100 ">
//       <div>
//         <Header />
//       </div>
//       <div className="container-fluid ml-0 flex-grow-1 mb-5 pb-5 pb-lg-0  ">
//         <Row>
//           <Col md={8} className="main-content p-0 m-0">
//             <SliderSection />
//           </Col>
//           <Col md={4} className="sidebar m-0 p-0">
//             <SliderRight />
//           </Col>
//         </Row>
//       </div>
//       <div className="mt-4 pt-5 pt-lg-0 custom-width">
//         <Row className="justify-content-md-center">
//           <Col xs={12} md={4} className="mb-4">
//             <AchievementsCard />
//           </Col>
//           <Col xs={12} md={4} className="mb-4">
//             <GoalsCard />
//           </Col>
//           <Col xs={12} md={4} className="mb-4">
//             <OpportunitiesCard />
//           </Col>
//         </Row>
//       </div>

//       <div className=" custom-width my-4 ">
//         <Banner />
//       </div>
//       <Row className="custom-width">
//         <p>
//           What We
//           ARe&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____________
//         </p>
//       </Row>
//       <div className="custom-width my-4 ">
//         <FlagShipComponent />
//       </div>
//       <div className="custom-width my-4 ">
//         <Row>
//           <MemoriesSlider />
//         </Row>
//       </div>
//       <div className="custom-width my-4">
//         <Timeline /> {/* Place the Timeline component here */}
//       </div>
//       <div className="custom-width my-4">
//         <Row>
//           <Col md={4} className="main-content p-0 m-0">
//             <EventsComponent />
//           </Col>

//           <Col md={8} className="sidebar m-0 p-0 ">
//             <EventsSliderComponent />
//           </Col>
//         </Row>
//       </div>
//       <Row className="custom-width">
//         <p>
//           What We
//           ARe&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____________
//         </p>
//       </Row>
//       <div className="custom-width my-4">
//         <MomentCaptured />
//       </div>
//       <div className="custom-width my-4">
//         <BlogSlider />
//       </div>
//       <footer className="mt-5">
//         <Footer />
//       </footer>
//     </div>
//   );
// };

// export default HomeLayout;
// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import "./LandingPage.css";
// import {
//   SliderSection,
//   SliderRight,
//   // AchievementsCard,
//   GoalsCard,
//   OpportunitiesCard,
//   Banner,
//   FlagShipComponent,
//   MemoriesSlider,
//   EventsComponent,
//   EventsSliderComponent,
//   MomentCaptured,
//   Timeline,
//   BlogSlider,
//   FlagShipProject,
// } from "../../components/index";
// import DescriptionSlider from "../../components/descriptionSlider/DescriptionSlider";

// const HomeLayout = () => {
//   return (
//     <div className="d-flex flex-column min-vh-100">
//       <Container fluid className="flex-grow-1 mb-5 pb-5 pb-lg-0">
//         <Row>
//           <Col xs={12} md={12} lg={8} className="mb-4 mb-lg-0">
//             <SliderSection />
//           </Col>
//           <Col xs={12} md={12} lg={4}>
//             <SliderRight />
//           </Col>
//         </Row>
//       </Container>

//       {/* <Container className="mt-4 pt-5 pt-lg-0">
//         <Row className="justify-content-md-center">
//           <Col xs={12} md={4} className="mb-4">
//             <AchievementsCard />
//           </Col>
//           <Col xs={12} md={4} className="mb-4">
//             <GoalsCard />
//           </Col>
//           <Col xs={12} md={4} className="mb-4">
//             <OpportunitiesCard />
//           </Col>
//         </Row>
//       </Container> */}
//       <Container className="my-4">
//         <Banner />
//       </Container>
//       <Container>
//         <Row>
//           <Col>
//             <p>What We ARe____________</p>
//           </Col>
//         </Row>
//       </Container>
//       <Container className="my-4">
//         <FlagShipComponent />
//       </Container>
//       <Container className="my-4">
//         <Row>
//           <Col>
//              <FlagShipProject />
//           </Col>
//         </Row>
//       </Container>
//       {/* <Container fluid className="p-0">
//         <FlagShipProject />
//       </Container> */}
//       <Container className="my-4">
//         <Timeline />
//       </Container>
//       <Container className="my-4">
//         <Row>
//           <Col md={4} className="main-content p-0">
//             <EventsComponent />
//           </Col>
//           <Col md={8} className="sidebar p-0">
//             <EventsSliderComponent />
//           </Col>
//         </Row>
//       </Container>
//       <Container>
//         <Row>
//           <Col>
//             <p>What We ARe____________</p>
//           </Col>
//         </Row>
//       </Container>
//       <Container className="my-4">
//         <MomentCaptured />
//       </Container>
//       <Container className="my-4">
//         <BlogSlider />
//       </Container>
//     </div>
//   );
// };

// export default HomeLayout;

// import React, { useRef } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import "./LandingPage.css";
// import {
//   SliderSection,
//   SliderRight,
//   GoalsCard,
//   OpportunitiesCard,
//   Banner,
//   FlagShipComponent,
//   MemoriesSlider,
//   EventsComponent,
//   EventsSliderComponent,
//   MomentCaptured,
//   Timeline,
//   BlogSlider,
//   FlagShipProject,
// } from "../../components/index";
// import DescriptionSlider from "../../components/descriptionSlider/DescriptionSlider";
// import Header from "../../components/header/Header";

// const HomeLayout = () => {
//   const blogSliderRef = useRef(null);

//   return (
//     <div className="d-flex flex-column min-vh-100">
//       <Header blogSliderRef={blogSliderRef} />
//       <Container fluid className="flex-grow-1 mb-5 pb-5 pb-lg-0">
//         <Row>
//           <Col xs={12} md={12} lg={8} className="mb-4 mb-lg-0">
//             <SliderSection />
//           </Col>
//           <Col xs={12} md={12} lg={4}>
//             <SliderRight />
//           </Col>
//         </Row>
//       </Container>
//       <Container className="my-4">
//         <Banner />
//       </Container>
//       <Container>
//         <Row>
//           <Col>
//             <p>What We ARe____________</p>
//           </Col>
//         </Row>
//       </Container>
//       <Container className="my-4">
//         <FlagShipComponent />
//       </Container>
//       <Container className="my-4">
//         <Row>
//           <Col>
//             <FlagShipProject />
//           </Col>
//         </Row>
//       </Container>
//       <Container className="my-4">
//         <Timeline />
//       </Container>
//       <Container className="my-4">
//         <Row>
//           <Col md={4} className="main-content p-0">
//             <EventsComponent />
//           </Col>
//           <Col md={8} className="sidebar p-0">
//             <EventsSliderComponent />
//           </Col>
//         </Row>
//       </Container>
//       <Container>
//         <Row>
//           <Col>
//             <p>What We ARe____________</p>
//           </Col>
//         </Row>
//       </Container>
//       <Container className="my-4">
//         <MomentCaptured />
//       </Container>
//       <Container className="my-4" ref={blogSliderRef}>
//         <BlogSlider />
//       </Container>
//     </div>
//   );
// };

// export default HomeLayout;

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
} from "../../components/index";
import DescriptionSlider from "../../components/descriptionSlider/DescriptionSlider";

const HomeLayout = ({ blogSliderRef }) => {
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
      <Container className="my-4" ref={blogSliderRef}>
        <BlogSlider />
      </Container>
    </div>
  );
};
export default HomeLayout;
