import React, { useState } from "react";
import { BlogImg1, BlogImg2,BlogImg3,BlogImg4,BlogImg5,BlogImg6 } from "../../assets/index";
import "./BlogSlider.css";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
const BlogSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const blogPosts = [
    {
      id: 1,
      title: "Every Life Deserves Dignity",
      author: "Sumit Sir",
      date: "05 June 2025",
      image: BlogImg1,
      description:
        "Insights and stories about serving humanity with compassion and dignity.",
    },
    {
      id: 2,
      title: "Serving Humanity With Compassion",
      author: "Sumit Sir",
      date: "05 June 2025",
      image: BlogImg2,
      description:
        "Exploring ways to make a positive impact in our communities through service.",
    },
    {
      id: 3,
      title: "Empowering Futures Through Education",
      author: "Sumit Sir",
      date: "05 June 2025",
      image: BlogImg3,
    },
    {
      id: 4,
      title: "Building Stronger Communities",
      author: "Sumit Sir",
      date: "05 June 2025",
      image: BlogImg4,
    },
    {
      id: 5,
      title: "Building Stronger Communities",
      author: "Sumit Sir",
      date: "05 June 2025",
      image: BlogImg5,
    },
    {
      id: 6,
      title: "Building Stronger Communities",
      author: "Sumit Sir",
      date: "05 June 2025",
      image: BlogImg6,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(blogPosts.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(blogPosts.length / 3)) %
        Math.ceil(blogPosts.length / 3)
    );
  };

  const getVisiblePosts = () => {
    const startIndex = currentSlide * 3;
    return blogPosts.slice(startIndex, startIndex + 3);
  };

  return (
    <div
      className="py-5"
      style={{
        background:
          "linear-gradient(90deg, #FFF7F0 0%, #FFF7F0 48.08%, #FFF7F0 100%)",
      }}
    >
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <p className="text-muted mb-2">Our Blogs</p>
          <h2 className="display-4 fw-medium mb-3">
            <span className="" style={{ color: "#F15700" }}>
              Professional
            </span>{" "}
            <span className="" style={{ color: "#011659" }}>
              & Informative
            </span>
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Insights, Stories, And Updates From Our Journey — Explore Ideas
            <br />
            That Inform, Inspire, And Ignite Change.
          </p>
        </div>

        {/* Blog Cards with Slider */}
        <div className="position-relative">
          <div className="row g-4">
            {getVisiblePosts().map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6">
                <div className="card h-100 shadow-sm border-0 position-relative overflow-hidden  rounded-top-3 ">
                  <div className="position-relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="card-img-top rounded-4 "
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25"></div>
                  </div>

                  <div className="card-body p-4">
                    <h5 className="card-title fw-bold mb-3 text-dark">
                      {post.title}
                    </h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">
                        {post.author} - {post.date}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="btn btn-dark rounded-circle position-absolute top-50 start-0 translate-middle-y button-left-slider"
            style={{
              width: "50px",
              height: "50px",

              zIndex: 10,
            }}
          >
            <IoIosArrowRoundBack size={30} />
          </button>

          <button
            onClick={nextSlide}
            className="btn btn-dark rounded-circle position-absolute top-50 end-0 translate-middle-y button-right-slider"
            style={{
              width: "50px",
              height: "50px",

              zIndex: 10,
            }}
          >
            <IoIosArrowRoundForward size={30} />
          </button>
        </div>

        {/* View All Button */}
        <div className="text-center mt-5">
          <button className="btn btn-warning text-white px-5 py-2 fw-bold">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
