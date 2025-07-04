import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { event1, event2, event3, event4 } from "../../assets";

const MyCarousel = () => {
  return (
    <div style={{ height: "649px", overflow: "hidden" }}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 2500 }}
        loop={true}
      >
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "649px", objectFit: "cover" }}
            src={event1}
            alt="First slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "649px", objectFit: "cover" }}
            src={event2}
            alt="Second slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "649px", objectFit: "cover" }}
            src={event3}
            alt="Third slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "649px", objectFit: "cover" }}
            src={event4}
            alt="Fourth slide"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MyCarousel;
