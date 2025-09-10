import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./Gallery.css";

// Import all images from assets
import BlogImg1 from "../../assets/icons/BlogImg1.svg";
import BlogImg2 from "../../assets/icons/BlogImg2.svg";
import BlogImg3 from "../../assets/icons/BlogImg3.svg";
import BlogImg4 from "../../assets/icons/BlogImg4.svg";
import BlogImg5 from "../../assets/icons/BlogImg5.svg";
import BlogImg6 from "../../assets/icons/BlogImg6.svg";
import event1 from "../../assets/icons/event1.svg";
import event2 from "../../assets/icons/event2.svg";
import event3 from "../../assets/icons/event3.svg";
import events4 from "../../assets/icons/events4.svg";
import LeftSlide1 from "../../assets/icons/LeftSlide1.svg";
import LeftSlide2 from "../../assets/icons/LeftSlide2.svg";
import LeftSlide3 from "../../assets/icons/LeftSlide3.svg";
import LeftSlide4 from "../../assets/icons/LeftSlide4.svg";
import MaskGroup1 from "../../assets/icons/MaskGroup1.svg";
import MaskGroup2 from "../../assets/icons/MaskGroup2.svg";
import MaskGroup3 from "../../assets/icons/MaskGroup3.svg";
import MaskGroup4 from "../../assets/icons/MaskGroup4.svg";
import MaskGroup5 from "../../assets/icons/MaskGroup5.svg";
import MaskGroup6 from "../../assets/icons/MaskGroup6.svg";
import RightSlider1 from "../../assets/icons/RightSlider1.svg";
import RightSlider2 from "../../assets/icons/RightSlider2.svg";
import RightSlider3 from "../../assets/icons/RightSlider3.svg";
import sliderLeftImg1 from "../../assets/icons/sliderLeftImg1.svg";
import sliderLeftImg2 from "../../assets/icons/sliderLeftImg2.svg";
import sliderLeftImg3 from "../../assets/icons/sliderLeftImg3.svg";
import sliderLeftImg4 from "../../assets/icons/sliderLeftImg4.svg";

const Gallery = () => {
  // All images in a single array
  const allImages = [
    { src: BlogImg1, alt: "Blog Image 1" },
    { src: BlogImg2, alt: "Blog Image 2" },
    { src: BlogImg3, alt: "Blog Image 3" },
    { src: BlogImg4, alt: "Blog Image 4" },
    { src: BlogImg5, alt: "Blog Image 5" },
    { src: BlogImg6, alt: "Blog Image 6" },
    { src: event1, alt: "Event 1" },
    { src: event2, alt: "Event 2" },
    { src: event3, alt: "Event 3" },
    { src: events4, alt: "Event 4" },
    { src: LeftSlide1, alt: "Left Slide 1" },
    { src: LeftSlide2, alt: "Left Slide 2" },
    { src: LeftSlide3, alt: "Left Slide 3" },
    { src: LeftSlide4, alt: "Left Slide 4" },
    { src: MaskGroup1, alt: "Mask Group 1" },
    { src: MaskGroup2, alt: "Mask Group 2" },
    { src: MaskGroup3, alt: "Mask Group 3" },
    { src: MaskGroup4, alt: "Mask Group 4" },
    { src: MaskGroup5, alt: "Mask Group 5" },
    { src: MaskGroup6, alt: "Mask Group 6" },
    { src: RightSlider1, alt: "Right Slider 1" },
    { src: RightSlider2, alt: "Right Slider 2" },
    { src: RightSlider3, alt: "Right Slider 3" },
    { src: sliderLeftImg1, alt: "Slider Left Image 1" },
    { src: sliderLeftImg2, alt: "Slider Left Image 2" },
    { src: sliderLeftImg3, alt: "Slider Left Image 3" },
    { src: sliderLeftImg4, alt: "Slider Left Image 4" },
  ];

  const [index, setIndex] = useState(-1);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Gallery (2024-2025)</h2>
      <p className="text-center mb-5">
        Explore our journey through the years. Click on any image to view it in
        full size.
      </p>

      <Row className="g-4">
        {allImages.map((image, i) => (
          <Col key={i} xs={12} sm={6} md={4} lg={3}>
            <Card
              className="h-100 shadow-sm cursor-pointer"
              onClick={() => setIndex(i)}
            >
              <Card.Img
                variant="top"
                src={image.src}
                className="gallery-img"
                alt={image.alt}
              />
            </Card>
          </Col>
        ))}
      </Row>

      {/* Lightbox */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={allImages}
        animation={{ swipe: true }}
      />
    </Container>
  );
};

export default Gallery;
