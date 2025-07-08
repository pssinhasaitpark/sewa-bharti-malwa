import React from "react";
import "./Banner.css"; // Import the CSS file

const AboutUs = () => {
  return (
    <div className="about-us-container p-5" style={{ boxShadow: '0px 0px 4px 0px #00000040' }}>

      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="about-us-subtitle">About Us</h2>
          <h1 className="about-us-title">
            <span className="Serving-Society"> Serving Society,</span>
            <span className="upholding-dharma"> Upholding <br></br>Dharma</span>
          </h1>
          <p className="about-us-content">
            Seva Bharti is a grassroots voluntary organization inspired by the
            ideals of Rashtriya Swayamsevak Sangh (RSS). Established with a
            mission to uplift the underprivileged sections of society, Seva
            Bharti works tirelessly to bring holistic development to
            marginalized communities through education, healthcare, skill
            development, and social empowerment.
          </p>
          <p className="about-us-content">
            Rooted in the spirit of "Nar Seva, Narayan Seva" – Serving Humanity
            is Serving the Divine – the organization reaches out to slum
            dwellers, tribal communities, differently-abled individuals, and
            economically weaker families across India. With thousands of
            committed volunteers, Seva Bharti runs thousands of service projects
            including free schools, vocational training centers, health camps,
            and women's empowerment initiatives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
