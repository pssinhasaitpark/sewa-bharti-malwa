import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import {
  sliderLeftimg1,
  sliderLeftimg2,
  sliderLeftimg3,
  sliderLeftimg4,
} from "../../assets/index";
import backgroundImage from "../../assets/icons/gradient.png";
import "./Empowering.css"; // Assuming you have a CSS file for styles
const EmpoweringComponent = () => {
  const sliderImages = [
    sliderLeftimg1,
    sliderLeftimg2,
    sliderLeftimg3,
    sliderLeftimg4,
  ];

  return (
    <div
      className="py-4 d-flex align-items-center position-relative"
      style={{
        background: `url(${backgroundImage}), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="0.5"/></pattern></defs><rect fill="url(%23grid)"/></svg>')`,
        backgroundSize: "cover, 25px 25px",
        backgroundPosition: "center, center",
        color: "#333",
        fontSize: "0.9rem",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="px-3 px-lg-4">
              <span className="badge p-2 font-monospace mb-3 custom-badge">
                Sewa Bharti Malwa
              </span>
              <h1 className="fw-bold mb-3" style={{ lineHeight: "1.2" }}>
                Empowering Is Far Better Than Helping Someone.
              </h1>
              <p className="mb-3">
                Helping offers temporary relief — a kind gesture in the moment.
                But empowering someone creates lasting change. It means giving
                them the tools, confidence, and knowledge to take control of
                their own path.
              </p>
              <button
                className="btn px-4 py-2 fw-bold border-0 shadow-sm"
                style={{
                  backgroundColor: "#ff6600",
                  color: "white",
                  borderRadius: "7px",
                }}
              >
                Donate Now
              </button>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div className="position-relative">
              <Swiper
                effect="fade"
                grabCursor={true}
                modules={[EffectFade, Autoplay]}
                className="mySwiper"
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                style={{
                  width: "100%",
                  maxWidth: "450px",
                  height: "auto",
                  maxHeight: "600px",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              >
                {sliderImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Empowerment slide ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpoweringComponent;
// -
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import {
//   sliderLeftimg1,
//   sliderLeftimg2,
//   sliderLeftimg3,
//   sliderLeftimg4,
// } from "../../assets/index";
// import backgroundImage from "../../assets/icons/gradient.png";
// import "./Empowering.css"; // Assuming you have a CSS file for styles
// const EmpoweringComponent = () => {
//   const sliderImages = [
//     sliderLeftimg1,
//     sliderLeftimg2,
//     sliderLeftimg3,
//     sliderLeftimg4,
//   ];

//   return (
//     <div
//       className="py-4 d-flex align-items-center position-relative"
//       style={{
//         background: `url(${backgroundImage}), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="0.5"/></pattern></defs><rect fill="url(%23grid)"/></svg>')`,
//         backgroundSize: "cover, 25px 25px",
//         backgroundPosition: "center, center",
//         color: "#333",
//         fontSize: "0.9rem",
//       }}
//     >
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-6 mb-4 mb-lg-0">
//             <div className="px-3 px-lg-4">
//               <span className="badge p-2 font-monospace mb-3 custom-badge">
//                 Sewa Bharti Malwa
//               </span>
//               <h1 className="fw-bold mb-3" style={{ lineHeight: "1.2" }}>
//                 Empowering Is Far Better Than Helping Someone.
//               </h1>
//               <p className="mb-3">
//                 Helping offers temporary relief — a kind gesture in the moment.
//                 But empowering someone creates lasting change. It means giving
//                 them the tools, confidence, and knowledge to take control of
//                 their own path.
//               </p>
//               <button
//                 className="btn px-4 py-2 fw-bold border-0 shadow-sm"
//                 style={{
//                   backgroundColor: "#ff6600",
//                   color: "white",
//                   borderRadius: "7px",
//                 }}
//               >
//                 Donate Now
//               </button>
//             </div>
//           </div>
//           <div className="col-lg-6 d-flex justify-content-center align-items-center">
//             <div className="position-relative">
//               <Swiper
//                 effect="fade"
//                 grabCursor={true}
//                 modules={[EffectFade, Autoplay]}
//                 className="mySwiper"
//                 autoplay={{ delay: 3000, disableOnInteraction: false }}
//                 loop={true}
//                 style={{
//                   width: "100%",
//                   maxWidth: "450px",
//                   height: "auto",
//                   maxHeight: "600px",
//                   borderRadius: "15px",
//                   overflow: "hidden",
//                 }}
//               >
//                 {sliderImages.map((image, index) => (
//                   <SwiperSlide key={index}>
//                     <img
//                       src={image}
//                       alt={`Empowerment slide ${index + 1}`}
//                       style={{
//                         width: "100%",
//                         height: "100%",
//                         objectFit: "cover",
//                       }}
//                     />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmpoweringComponent;
