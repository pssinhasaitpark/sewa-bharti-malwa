import React, { useRef } from "react";
import Slider from "react-slick";
import "./TimeLine.css";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BlogImg1,
  BlogImg2,
  BlogImg3,
  BlogImg4,
  BlogImg5,
  BlogImg6,
} from "../../assets/index";

const timelineData = [
  {
    year: "2010",
    title: "Every Life Deserves Dignity",
    description:
      "At The Heart Of Our Mission Is A Deep Commitment To Serve Those Who Need It The Most. We Work Closely With Economically Disadvantaged Communities To Provide Essential Resources Like Food, Clothing, Shelter, Healthcare, And Education",
    image: BlogImg1,
    imageAlt: "Children smiling together",
  },
  {
    year: "2011",
    title: "Empowering Through Education",
    description:
      "We Believe Education Is The Key To Breaking The Cycle Of Poverty And Unlocking Endless Possibilities. Our Initiatives Focus On Providing Quality Education To Underprivileged Children And Youth—Through Free Learning Centers, School Supplies, Digital Classrooms",
    image: BlogImg2,
    imageAlt: "Student studying in classroom",
  },
  {
    year: "2012",
    title: "Building Sustainable Communities",
    description:
      "Our Focus Expanded To Creating Long-Term Sustainable Solutions That Empower Communities To Become Self-Sufficient. We Introduced Vocational Training Programs, Microfinance Initiatives, And Community Development Projects",
    image: BlogImg3,
    imageAlt: "Community working together",
  },
  {
    year: "2013",
    title: "Healthcare Access For All",
    description:
      "Recognizing The Critical Need For Healthcare In Underserved Areas, We Launched Mobile Health Clinics And Established Community Health Centers. Our Medical Teams Provide Free Check-ups, Vaccinations, And Essential Medical Care",
    image: BlogImg4,
    imageAlt: "Healthcare workers helping patients",
  },
  {
    year: "2014",
    title: "Women Empowerment Initiative",
    description:
      "We Launched Comprehensive Programs To Empower Women Through Skills Development, Leadership Training, And Economic Opportunities. Our Women's Cooperatives Have Helped Thousands Achieve Financial Independence",
    image: BlogImg5,
    imageAlt: "Women working together",
  },
];

const Timeline = () => {
  const sliderRef = useRef(null);

  const sliderSettings = {
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    arrows: false,
    dots: false,
  };

  const handleArrowDown = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section1">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p className="hero-subtitle">Our Story</p>
              <h1 className="hero-title">
                <span style={{ color: "#fd7e14" }}>From Vision</span>{" "}
                <span style={{ color: "#0d47a1" }}>To Impact</span>
              </h1>
              <p className="hero-description">
                Tracing Our Remarkable Journey Of Selfless Service, Community
                Growth, And Lasting Transformation Across The Villages, Towns,
                And Cities Of Bharat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="timeline">
                {/* Up Arrow */}
                <div
                  className="upArrow d-flex justify-content-center mb-3"
                  onClick={handleArrowDown}
                  style={{ cursor: "pointer" }}
                >
                  <MdKeyboardArrowUp size={40} />
                </div>

                {/* Timeline Slider */}
                <Slider ref={sliderRef} {...sliderSettings}>
                  {timelineData.map((item, index) => (
                    <li
                      key={index}
                      className={`timeline-item clearfix ${
                        index % 2 === 0 ? "odd" : "even"
                      }`}
                    >
                      <div className="timeline-year">{item.year}</div>
                      <div className="timeline-content">
                        <h3
                          className="mb-3"
                          style={{ color: "#212529", fontWeight: "bold" }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="mb-0"
                          style={{ color: "#6c757d", lineHeight: "1.6" }}
                        >
                          {item.description}
                        </p>
                      </div>
                      <div className="timeline-image">
                        <img
                          src={item.image}
                          alt={item.imageAlt}
                          className="img-fluid"
                        />
                      </div>
                    </li>
                  ))}
                </Slider>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
