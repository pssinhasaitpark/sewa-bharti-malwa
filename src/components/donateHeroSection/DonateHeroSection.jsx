import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DonationHeroImg } from '../../assets';

const DonationBanner = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0 min-vh-50">
        {/* Left Section - Blue Background with Text */}
        <div className="col-lg-6 col-md-12 d-flex align-items-center" 
             style={{
               background: '#011659',
               minHeight: '400px'
             }}>
          <div className="px-4 px-lg-5 py-5 text-white">
            <h1 className="display-4 fw-bold mb-4" style={{ lineHeight: '1.2' }}>
              Support A Cause That Matters — Contribute Today.
            </h1>
            <p className="lead mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              Your generosity has the power to create real change. Whether it's helping a child 
              stay in school, feeding a hungry family, or providing medical care to those in need 
              — every contribution counts.
            </p>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="col-lg-6 col-md-12 position-relative">
          
          <img src={DonationHeroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DonationBanner;