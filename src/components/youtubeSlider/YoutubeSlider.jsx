import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row } from "react-bootstrap";

// Custom arrow components
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px", zIndex: 1 }}
      onClick={onClick}
    />
  );
};

// Responsive iframe component
const ResponsiveIframe = ({ src }) => {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        height: 0,
        overflow: "hidden",
      }}
    >
      <iframe
        src={src}
        frameBorder="0"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        allowFullScreen
      />
    </div>
  );
};

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const videos = [
    "https://www.youtube.com/embed/aoum7MPO7cY",
    "https://www.youtube.com/embed/FY0NPqzAllI",
    "https://www.youtube.com/embed/mXpFRVg0Qdc",
    "https://www.youtube.com/embed/UPfpDgq-RQY", // Changed from watch?v= to embed/
    "https://www.youtube.com/embed/ig9axkfnk1I", // Changed from watch?v= to embed/
  ];
  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <div className="col-12 p-0">
          <Slider {...settings}>
            {videos.map((video, index) => (
              <div key={index} className="p-0">
                <ResponsiveIframe src={video} />
              </div>
            ))}
          </Slider>
        </div>
      </Row>
    </Container>
  );
};

export default SlickSlider;
