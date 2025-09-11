// import React from "react";
// import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { RightSlider1, RightSlider2, RightSlider3 } from "../../assets";

// const MyCarousel = () => {
//   return (
//     <Carousel interval={2000} className="h-100">
//       <Carousel.Item className="h-100 p-3 border rounded">
//         <img
//           className="d-block w-100 rounded"
//           style={{ height: "300px", objectFit: "cover" }}
//           src={RightSlider1}
//           alt="First slide"
//         />
//         <Carousel.Caption className="position-static p-4 bg-light text-dark rounded text-start h-100 overflow-auto">
//           <h3>Empower Someone, If You Can</h3>
//           <p>03 - 06 - 2025</p>
//           <p>
//             New operation theatre inaugurated: In July 2024, Seva Bharathi
//             inaugurated a state-of-the-art operation theatre at the Ichchapuram
//             Seetarambhag Ishwar Chandera Charitable Hospital in Hyderabad. This
//             facility aims to enhance surgical care for underserved communities.
//           </p>
//           <button
//             className="btn btn-primary"
//             style={{
//               width: "180px",
//               height: "45px",
//               backgroundColor: "#f15700",
//               border: "none",
//             }}
//           >
//             Read More
//           </button>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item className="h-100 p-3 border rounded">
//         <img
//           className="d-block w-100 rounded"
//           style={{ height: "300px", objectFit: "cover" }}
//           src={RightSlider2}
//           alt="Second slide"
//         />
//         <Carousel.Caption className="position-static p-3 bg-light text-dark rounded text-start h-100 overflow-auto">
//           <h3>What's New at Sevabharti</h3>
//           <p>04 - 06 - 2025</p>
//           <p>
//             Discover a variety of upcoming programs designed to empower students
//             and communities through education and social service. Stay informed
//             about important project milestones that highlight the progress and
//             impact of our initiatives.
//           </p>
//           <button
//             className="btn btn-primary"
//             style={{
//               width: "180px",
//               height: "45px",
//               backgroundColor: "#f15700",
//               border: "none",
//             }}
//           >
//             Read More
//           </button>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item className="h-100 p-3 border rounded">
//         <img
//           className="d-block w-100 rounded"
//           style={{ height: "300px", objectFit: "cover" }}
//           src={RightSlider3}
//           alt="Third slide"
//         />
//         <Carousel.Caption className="position-static p-3 bg-light text-dark rounded text-start h-100 overflow-auto">
//           <h3>Sevabharti Business Support</h3>
//           <p>05 - 06 - 2025</p>
//           <p>
//             Sevabharti Business Support is dedicated to empowering entrepreneurs
//             and small businesses with the tools, guidance, and resources they
//             need to succeed. From mentorship to training programs, we help you
//             overcome challenges and unlock your business’s full potential.
//           </p>
//           <button
//             className="btn btn-primary"
//             style={{
//               width: "180px",
//               height: "45px",
//               backgroundColor: "#f15700",
//               border: "none",
//             }}
//           >
//             Read More
//           </button>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// };

// export default MyCarousel;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RightSlider1, RightSlider2, RightSlider3 } from "../../assets";

const MyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const slides = [
    {
      image: RightSlider1,
      title: "Empower Someone, If You Can",
      date: "03 - 06 - 2025",
      description: `New operation theatre inaugurated: In July 2024, Sewa Bharathi inaugurated a state-of-the-art operation theatre at the Ichchapuram Seetarambhag Ishwar Chandera Charitable Hospital in Hyderabad. This facility aims to enhance surgical care for underserved communities.`,
    },
    {
      image: RightSlider2,
      title: "What's New at Sewabharti",
      date: "04 - 06 - 2025",
      description: `Discover a variety of upcoming programs designed to empower students and communities through education and social service. Stay informed about important project milestones that highlight the progress and impact of our initiatives.`,
    },
    {
      image: RightSlider3,
      title: "Sewabharti Business Support",
      date: "05 - 06 - 2025",
      description: `Sewabharti Business Support is dedicated to empowering entrepreneurs and small businesses with the tools, guidance, and resources they need to succeed. From mentorship to training programs, we help you overcome challenges and unlock your business’s full potential.`,
    },
  ];

  return (
    <Slider {...settings} className="h-100">
      {slides.map((slide, index) => (
        <div key={index} className="h-100 p-3 border rounded">
          <img
            className="d-block w-100 rounded"
            style={{ height: "300px", objectFit: "cover" }}
            src={slide.image}
            alt={`Slide ${index + 1}`}
          />
          <div className="p-4 bg-light text-dark rounded text-start h-100 overflow-auto mt-3">
            <h3>{slide.title}</h3>
            <p>{slide.date}</p>
            <p>{slide.description}</p>
            <button
              className="btn btn-primary"
              style={{
                width: "180px",
                height: "45px",
                backgroundColor: "#f15700",
                border: "none",
              }}
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default MyCarousel;
