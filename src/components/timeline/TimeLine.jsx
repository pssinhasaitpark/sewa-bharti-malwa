import React from "react";
import "./TimeLine.css"; // Import your CSS file for styling

const timelineData = [
  {
    year: "2010",
    title: "Every Life Deserves Dignity",
    description:
      "At The Heart Of Our Mission Is A Deep Commitment To Serve Those Who Need It The Most. We Work Closely With Economically Disadvantaged Communities To Provide Essential Resources Like Food, Clothing, Shelter, Healthcare, And Education",
    image:
      "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Children smiling together",
  },
  {
    year: "2011",
    title: "Empowering Through Education",
    description:
      "We Believe Education Is The Key To Breaking The Cycle Of Poverty And Unlocking Endless Possibilities. Our Initiatives Focus On Providing Quality Education To Underprivileged Children And Youth—Through Free Learning Centers, School Supplies, Digital Classrooms",
    image:
      "https://images.pexels.com/photos/8923060/pexels-photo-8923060.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Student studying in classroom",
  },
  {
    year: "2012",
    title: "Building Sustainable Communities",
    description:
      "Our Focus Expanded To Creating Long-Term Sustainable Solutions That Empower Communities To Become Self-Sufficient. We Introduced Vocational Training Programs, Microfinance Initiatives, And Community Development Projects",
    image:
      "https://images.pexels.com/photos/8923064/pexels-photo-8923064.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Community working together",
  },
  {
    year: "2013",
    title: "Healthcare Access For All",
    description:
      "Recognizing The Critical Need For Healthcare In Underserved Areas, We Launched Mobile Health Clinics And Established Community Health Centers. Our Medical Teams Provide Free Check-ups, Vaccinations, And Essential Medical Care",
    image:
      "https://images.pexels.com/photos/8923062/pexels-photo-8923062.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Healthcare workers helping patients",
  },
  {
    year: "2014",
    title: "Women Empowerment Initiative",
    description:
      "We Launched Comprehensive Programs To Empower Women Through Skills Development, Leadership Training, And Economic Opportunities. Our Women's Cooperatives Have Helped Thousands Achieve Financial Independence",
    image:
      "https://images.pexels.com/photos/8923061/pexels-photo-8923061.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Women working together",
  },
];

const Timeline = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
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
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="timeline">
                {timelineData.map((item, index) => (
                  <li key={index} className="timeline-item clearfix">
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
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Arrow */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="bounce-arrow mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;




// import React, { useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination, Mousewheel, Autoplay } from 'swiper';
// import 'swiper/swiper-bundle.css';
// import { ChevronUp, ChevronDown } from 'lucide-react';

// // Install Swiper modules
// SwiperCore.use([Navigation, Pagination, Mousewheel, Autoplay]);

// const timelineData = [
//   {
//     year: "2010",
//     title: "Every Life Deserves Dignity",
//     description: "At The Heart Of Our Mission Is A Deep Commitment To Serve Those Who Need It The Most...",
//     image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600",
//     imageAlt: "Children smiling together",
//   },
//   {
//     year: "2011",
//     title: "Empowering Through Education",
//     description: "We Believe Education Is The Key To Breaking The Cycle Of Poverty And Unlocking Endless Possibilities...",
//     image: "https://images.pexels.com/photos/8923060/pexels-photo-8923060.jpeg?auto=compress&cs=tinysrgb&w=600",
//     imageAlt: "Student studying in classroom",
//   },
//   // Add more data as needed
// ];

// const Timeline = () => {
//   const swiperRef = useRef(null);

//   const goNext = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slideNext();
//     }
//   };

//   const goPrev = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slidePrev();
//     }
//   };

//   return (
//     <>
//       <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet" />
//       <div className="min-vh-100" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)" }}>
//         <section className="py-3">
//           <div className="container">
//             <div className="row">
//               <div className="col-12 text-center">
//                 <p className="text-muted fw-medium fs-5 mb-2">Our Story</p>
//                 <h1 className="display-4 fw-bold mb-3 lh-1">
//                   <span style={{ color: "#fd7e14" }}>From Vision</span> <span style={{ color: "#0d47a1" }}>To Impact</span>
//                 </h1>
//                 <p className="text-muted fs-6 lh-base mx-auto" style={{ maxWidth: "700px" }}>
//                   Tracing Our Remarkable Journey Of Selfless Service, Community Growth, And Lasting Transformation Across The Villages, Towns, And Cities Of Bharat
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//         <div className="container">
//           <div className="row">
//             <div className="col-12 text-center mb-3">
//               <button onClick={goPrev} className="btn rounded-circle p-2 btn-warning text-white shadow-lg" style={{ backgroundColor: "#fd7e14", borderColor: "#fd7e14" }}>
//                 <ChevronUp size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//         <section className="py-2">
//           <div className="container">
//             <Swiper
//               ref={swiperRef}
//               direction={'vertical'}
//               slidesPerView={2}
//               spaceBetween={30}
//               mousewheel={true}
//               autoplay={{
//                 delay: 3000,
//                 disableOnInteraction: false,
//               }}
//               pagination={{
//                 clickable: true,
//               }}
//               className="mySwiper"
//             >
//               {timelineData.map((item, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="row align-items-center">
//                     {index % 2 === 0 ? (
//                       <>
//                         <div className="col-md-5 text-end pe-3">
//                           <h3 className="h5 fw-bold text-dark mb-2">{item.title}</h3>
//                           <p className="text-muted lh-base fs-6">{item.description}</p>
//                         </div>
//                         <div className="col-md-2"></div>
//                         <div className="col-md-5 ps-3">
//                           <div className="rounded-3 overflow-hidden shadow-lg">
//                             <img src={item.image} alt={item.imageAlt} className="img-fluid" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
//                           </div>
//                         </div>
//                       </>
//                     ) : (
//                       <>
//                         <div className="col-md-5 pe-3">
//                           <div className="rounded-3 overflow-hidden shadow-lg">
//                             <img src={item.image} alt={item.imageAlt} className="img-fluid" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
//                           </div>
//                         </div>
//                         <div className="col-md-2"></div>
//                         <div className="col-md-5 ps-3 text-start">
//                           <h3 className="h5 fw-bold text-dark mb-2">{item.title}</h3>
//                           <p className="text-muted lh-base fs-6">{item.description}</p>
//                         </div>
//                       </>
//                     )}
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </section>
//         <div className="container">
//           <div className="row">
//             <div className="col-12 text-center py-3">
//               <button onClick={goNext} className="btn rounded-circle p-2 btn-warning text-white shadow-lg" style={{ backgroundColor: "#fd7e14", borderColor: "#fd7e14" }}>
//                 <ChevronDown size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Timeline;