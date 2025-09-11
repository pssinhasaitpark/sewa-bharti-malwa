import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  LeftSlide1,
  LeftSlide2,
  LeftSlide3,
  BadgeImage,
} from "../../assets/index"; // Adjust paths
import { IoIosArrowRoundForward } from "react-icons/io";
import "./MemoriesSlider.css";

const textSlides = [
  {
    title: "Your Generosity Can Change Lives",
    content:
      "Every Contribution Helps Us Reach More Individuals And Communities In Need. Whether Big Or Small, Your Donation Fuels Education, Healthcare, Relief Efforts, And Sustainable Development Projects. Together, We Can Create Lasting Impact And Build A Brighter Future For Those Who Need It Most.\nJoin Us In Making A Difference—Because Every Act Of Kindness Counts.",
  },
  {
    title: "Empowering Futures Through Education",
    content:
      "We Believe Education Is The Most Powerful Tool To Break The Cycle Of Poverty And Build Brighter Futures. Our Education Initiatives Focus On Providing Quality Learning Opportunities To Underprivileged Children And Youth. From Establishing Digital Classrooms And Providing School Supplies To Running After-School Programs And Skill Development Workshops, We Are Committed To Ensuring That Every Child Has The Chance To Learn, Grow, And Succeed.",
  },
  {
    title: "Together For A Healthier Tomorrow",
    content:
      "Our Health Programs Provide Access To Essential Medical Services, Health Camps, Vaccination Drives, And Awareness Campaigns. We Are Committed To Promoting Better Health In Underserved Communities Through Prevention, Education, And Care.",
  },
];

const imageSlides = [LeftSlide1, LeftSlide2, LeftSlide3];

const Slideshow = () => {
  return (
    <div className="memories-slider-container">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{ clickable: true }}
        autoHeight={true}
        className="memories-swiper"
      >
        {imageSlides.map((img, index) => (
          <SwiperSlide key={index}>
<div className="slide-content">
              {/* Image Section */}
              <div className="image-section">
                <div className="image-overlay"></div>
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="slide-image"
                />
                {/* Badge overlay inside image for precise placement */}
                <div className="badge-overlay">
                  <img
                    src={BadgeImage}
                    alt="25+ Years Completed"
                    className="badge-image"
                  />
                </div>
              </div>
              {/* Text Section */}
              <div
                className={`text-section slide-${index}`}
                style={{
                  backgroundColor:
                    index === 0
                      ? "#D44C00"
                      : index === 1
                      ? "#10044D"
                      : "#045D56",
                }}
              >
                <h3 className="slide-title">
                  {textSlides[index].title}
                </h3>
                <p className="slide-text">
                  {textSlides[index].content}
                </p>
                <a href="#more" className="slide-read-more cta-btn">
                  <span className="read-more-text">Read More</span>
                  <span className="read-more-arrow">
                    <IoIosArrowRoundForward />
                  </span>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slideshow;
