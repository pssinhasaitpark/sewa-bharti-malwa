import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import {
  LeftSlide1,
  LeftSlide2,
  LeftSlide3,
  BadgeImage,
} from "../../assets/index"; // Adjust paths
import { IoIosArrowRoundForward } from "react-icons/io";

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
    <div style={{ position: "relative" }}>
      <Swiper
        effect="fade"
        modules={[EffectFade, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1} // This ensures only one slide is shown at a time
      >
        {imageSlides.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                alignItems: "stretch",
              }}
            >
              {/* Left Image Section */}
              <div style={{ position: "relative", flex: 1 }}>
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="d-block w-100"
                  style={{
                    borderRadius: "12px",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              {/* Right Text Section */}
              <div
                style={{
                  flex: 1,
                  backgroundColor:
                    index === 0
                      ? "#D44C00"
                      : index === 1
                      ? "#10044D"
                      : "#045D56",
                  color: "white",
                  borderRadius: "12px",
                  padding: "30px 25px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h3 style={{ fontWeight: "bold" }}>
                  {textSlides[index].title}
                </h3>
                <p style={{ marginTop: "15px", whiteSpace: "pre-line" }}>
                  {textSlides[index].content}
                </p>
                <p
                  style={{
                    marginTop: "auto",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  Read More
                  <span
                    style={{
                      fontSize: "2rem",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    <IoIosArrowRoundForward />
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Static Badge Overlay */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "calc(33%)",
          zIndex: 10,
        }}
      >
        <img
          src={BadgeImage}
          alt="25+ Years Completed"
          style={{ height: "50%" }}
        />
      </div>
    </div>
  );
};

export default Slideshow;
