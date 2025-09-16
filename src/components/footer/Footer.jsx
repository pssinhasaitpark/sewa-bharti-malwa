import React, { useState } from "react";
import "./Footer.css";
import FooterBottom from "./FooterBottom.jsx";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FiInstagram, FiYoutube } from "react-icons/fi";
import { Polygon1, Polygon2 } from "../../assets/index.js";

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openExternalLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const quickLinks1 = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Project", path: "/project" },
    { name: "Blogs/News", path: "/news" },
  ];

  const quickLinks2 = [
    { name: "Gallery", path: "/gallery" },
    { name: "Message", path: "/message" },
    { name: "Event", path: "/event" },
    { name: "Contact", path: "/contact" },
  ];

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setSubscribed(true);
      setIsLoading(false);
    }, 1000);
  };

  const handleEmailChange = () => {
    if (subscribed) {
      setSubscribed(false);
    }
  };

  return (
    <>
      <footer className="footer-container">
        <div className="angled-section container position-absolute end-50 start-50 translate-middle ">
          <div className="d-flex">
            <img src={Polygon2} style={{ height: "53px" }} alt="" />
            <div className="angled-content p-4">
              <h1 className="main-title text-light fw-bolder fs-1">
                Building A Stronger India
              </h1>
              <div className="phone-container">
                <span className="phone-icon">📞</span>
                <span className="phone-number">+91 89898 22899</span>
              </div>
            </div>
            <img src={Polygon1} style={{ height: "53px" }} alt="" />
          </div>
        </div>
        <div className="footer bg-dark text-light py-5">
          <div className="p-0 m-0 mt-5">
            <div className="row m-0 mb-5">
              <div className="col-md-4 footer-section w-25 ms-5 mt-2 p-0 mx-0 ">
                <span className="badge p-2 font-monospace mb-3 custom-badge">
                  Sewa Bharti Malwa
                </span>
                <h2 className="mb-4  mt-2 fs-1 fw-bold lh-base">
                  Empowering is far better than helping someone.
                </h2>
              </div>
              <div className="col-md-4 footer-section mt-2">
                <div className="quick-links-container">
                  <div className="quick-links ms-5">
                    <p className="mb-3 fs-3 mt-5 ms-lg-5">Quick Links</p>
                  </div>
                  <div className="row ms-5">
                    <div className="col-6 p-0 pe-lg-5 right-footer">
                      <div className="ms-lg-5">
                        {quickLinks1.map((link, index) => (
                          <div key={index}>
                            <Link
                              to={link.path}
                              className="text-light text-decoration-none fs-4 lh-lg"
                              onClick={scrollToTop}
                            >
                              {link.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-6 ps-lg-4 left-footer">
                      {quickLinks2.map((link, index) => (
                        <div key={index}>
                          <Link
                            to={link.path}
                            className="text-light text-decoration-none fs-4 lh-lg"
                            onClick={scrollToTop}
                          >
                            {link.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-5 footer-section p-lg-0 m-0 p-2">
                <h3 className="mb-3 fs-3 fw-medium mt-3 ps-lg-0 ps-5">
                  Sign up for our newsletter
                </h3>
                <form onSubmit={handleSubmit}>
                  <div
                    className="d-flex mt-4 newsletter-style"
                    style={{ height: "60px", width: "102%" }}
                  >
                    <input
                      type="email"
                      name="email"
                      className="form-control newsletter-email border rounded-start rounded-0"
                      placeholder="Enter Email"
                      onChange={handleEmailChange}
                      onKeyPress={handleKeyPress}
                    />
                    <button
                      type="submit"
                      className="btn btn-primary Footer-Bottom px-5 text-light fs-3 fw-medium rounded-end rounded-0 border-0 subscribe-button"
                      disabled={isLoading}
                    >
                      {subscribed
                        ? "Subscribed"
                        : isLoading
                        ? "Subscribing..."
                        : "Subscribe"}
                    </button>
                  </div>
                </form>
                <div className="d-flex social-icons-container mt-4">
                  <Link
                    to="#"
                    onClick={() =>
                      openExternalLink("https://wa.me/919893764540")
                    }
                    aria-label="Follow us on WhatsApp"
                  >
                    <div className="icon-container px-2 py-2 rounded-2 border mt-2 me-3">
                      <FaWhatsapp className="fs-1 text-light" />
                    </div>
                  </Link>
                  <Link
                    to="#"
                    onClick={() =>
                      openExternalLink(
                        "https://www.facebook.com/Sewa-Bharti-Malwa-Prant-1750025541683150/"
                      )
                    }
                    aria-label="Follow us on Facebook"
                  >
                    <div className="icon-container px-2 py-2 rounded-2 border mt-2 me-3">
                      <RiFacebookCircleLine className="fs-1 text-light" />
                    </div>
                  </Link>
                  <Link
                    to="#"
                    onClick={() =>
                      openExternalLink(
                        "https://www.instagram.com/sewabhartimalwaprantmp/"
                      )
                    }
                    aria-label="Follow us on Instagram"
                  >
                    <div className="icon-container px-2 py-2 rounded-2 border mt-2 me-3">
                      <FiInstagram className="fs-1 text-light" />
                    </div>
                  </Link>
                  <Link
                    to="#"
                    onClick={() =>
                      openExternalLink(
                        "https://www.youtube.com/channel/UCAxBwi9C87Jy2cqMEX4rlYQ"
                      )
                    }
                    aria-label="Follow us on YouTube"
                  >
                    <div className="icon-container px-2 py-2 rounded-2 border mt-2">
                      <FiYoutube className="fs-1 text-light" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterBottom />
      </footer>
    </>
  );
};

export default Footer;
