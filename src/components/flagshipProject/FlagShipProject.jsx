import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./FlagShipProject.css";
import { LeftSlide1, LeftSlide2, LeftSlide3, BadgeImage } from "../../assets/index";

const slides = [
  {
    title: "Empowering Futures Through Education",
    text:
      "We believe education is the most powerful tool to break the cycle of poverty and build brighter futures. Our initiatives focus on providing quality learning opportunities to underprivileged children and youth.",
    img: LeftSlide1,
    color: "#0D0B45",
  },
  {
    title: "Your Generosity Can Change Lives",
    text:
      "Every contribution helps us reach more individuals and communities in need. Your donation fuels education, healthcare, relief efforts, and sustainable development projects.",
    img: LeftSlide2,
    color: "#8B2E00",
  },
  {
    title: "Together For A Healthier Tomorrow",
    text:
      "Our health programs provide access to essential medical services, health camps, vaccination drives, and awareness campaigns for underserved communities.",
    img: LeftSlide3,
    color: "#0B3B3A",
  },
];

const FlagShipProject = () => {
  return (
    <section className="flagship-wrapper">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="flagship-swiper"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="flagship-slide">
              <div className="flagship-image">
                <img src={s.img} alt={s.title} />
                {/* Badge overlay in bottom-left corner */}
                <div className="flagship-badge">
                  <img src={BadgeImage} alt="25+ Years Completed" />
                </div>
              </div>
              <div className="flagship-text" style={{ backgroundColor: s.color }}>
                <h2 className="flagship-title">{s.title}</h2>
                <p className="flagship-desc">{s.text}</p>
                <a href="#read-more" className="flagship-cta">
                  Read More
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FlagShipProject;
