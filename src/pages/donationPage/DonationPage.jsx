import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

import "../landingPage/LandingPage.css";
import {
  Header,
  Footer,
  DonationBanner,
  BlogSlider,
  DonationForm,
} from "../../components/index"; // Adjust the path as necessary

const DonationPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100 ">
      <div>
        <Header />
      </div>
      <Row className="custom-width my-4">
        <DonationBanner />
      </Row>

      <div className="custom-width my-4">
        <BlogSlider />
      </div>
      <div className="custom-width my-4">
        <DonationForm />
      </div>
      <div className="custom-width my-4" style={{ lineHeight: "2" }}>
        Support Our Mission – Donate Online <br></br>
        Your contribution can make a lasting impact! Dr. Ambedkar Vanvasi Kalyan
        Trust is dedicated to uplifting tribal communities through education,
        healthcare, skill <br></br>
        development, and social empowerment. With your support, we can continue
        to bring hope and opportunities to those in need. <br></br>
        Your Impact <br></br>
        🍽 ₹1,500 can provide nutritious, hygienic, and tasty mid-day meals to a
        child for an entire academic year.*<br></br>
        🏫 Donations can also support school infrastructure improvements to
        create a better learning environment.<br></br>
        💡 Funds may be used to serve more children, meet cost escalations, or
        enhance facilities as needed. <br></br>
        How to Donate? <br></br>
        💳 Indian Donors: Use UPI, Debit/Credit Cards from Indian banks.
        <br></br>
        🏦 Wire Transfer: For direct account-to-account transfers in India or
        abroad.<br></br>
        🌍 US/UK Donors: Click here to avail tax exemption benefits in your
        country. <br></br>✅ Avail Taxb Exemption Under Section 80G <br></br>
        📢 Every Rupee Counts! Your kindness can change lives.<br></br>
      </div>
      <footer className="mt-5">
        <Footer />
      </footer>
    </div>
  );
};

export default DonationPage;
