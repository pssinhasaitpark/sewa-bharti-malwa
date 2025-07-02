import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SliderRight.css";
import { RightSlider1, RightSlider2, RightSlider3 } from "../../assets";

const MyCarousel = () => {
  return (
    <Carousel interval={2000}>
      {" "}
      {/* Adjust the interval to 5000ms (5 seconds) */}
      {/* <div className="slider-right-container"> */}
        <Carousel.Item>
          <img className="d-block w-100" src={RightSlider1} alt="First slide" />
          <Carousel.Caption>
            <h3>Empower Someone, If You Can</h3>
            <p>03 - 06 - 2025</p>
            <p>
              New operation theatre inaugurated: In July 2024, Seva Bharathi
              inaugurated a state-of-the-art operation theatre at the
              Ichchapuram Seetarambhag Ishwar Chandera Charitable Hospital in
              Hyderabad. This facility aims to enhance surgical care for
              underserved communities.
            </p>
            <button className="btn-read-more">Read More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={RightSlider2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>What's New at Sevabharti</h3>
            <p>04 - 06 - 2025</p>
            <p>
              Discover a variety of upcoming programs designed to empower
              students and communities through education and social service.
              Stay informed about important project milestones that highlight
              the progress and impact of our initiatives.
            </p>
            <button className="btn-read-more">Read More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={RightSlider3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Sevabharti Business Support</h3>
            <p>05 - 06 - 2025</p>
            <p>
              Sevabharti Business Support is dedicated to empowering
              entrepreneurs and small businesses with the tools, guidance, and
              resources they need to succeed. From mentorship to training
              programs, we help you overcome challenges and unlock your
              business’s full potential.
            </p>
            <div>
              <button className="btn-read-more">Read More</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      {/* </div> */}
    </Carousel>
  );
};

export default MyCarousel;
