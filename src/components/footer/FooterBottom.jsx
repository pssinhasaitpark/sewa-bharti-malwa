import React from "react";
import "./Footer.css";

const FooterBottom = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <div className="Footer-Bottom py-2 ">
      <p className="fs-5 text-center fw-medium m-0 text-light">
        Copyright © {currentYear} Seva Bharti Malwa
      </p>
    </div>
  );
};

export default FooterBottom;
