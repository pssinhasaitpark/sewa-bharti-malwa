import React from 'react';

const Partners = () => {
  // Partner data with placeholder logos - you'll need to replace these with actual logo imports
  const partners = [
    {
      id: 1,
      name: 'SBI',
      logo: 'https://via.placeholder.com/200x100/0066cc/ffffff?text=SBI',
      // Replace with: import SBILogo from '../../assets/logos/sbi-logo.png';
    },
    {
      id: 2,
      name: 'ONGC', 
      logo: 'https://via.placeholder.com/200x100/ff6600/ffffff?text=ONGC',
      // Replace with: import ONGCLogo from '../../assets/logos/ongc-logo.png';
    },
    {
      id: 3,
      name: 'IOCL',
      logo: 'https://via.placeholder.com/200x100/cc0000/ffffff?text=IOCL',
      // Replace with: import IOCLLogo from '../../assets/logos/iocl-logo.png';
    }
  ];

  return (
    <section className="partners-section" style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Section Heading */}
            <div className="text-center" style={{ marginBottom: '60px' }}>
              <h2 
                className="display-4"
                style={{ 
                  color: '#FF5733',
                  fontSize: '2.5rem',
                  fontFamily: 'Georgia, serif',
                  fontWeight: 'bold',
                  marginBottom: '20px'
                }}
              >
                Sewa Bharti Malva
              </h2>
              <div 
                style={{
                  width: '100px',
                  height: '4px',
                  backgroundColor: '#FF5733',
                  borderRadius: '2px',
                  margin: '0 auto 20px auto'
                }}
              ></div>
              <p 
                className="lead"
                style={{ 
                  fontSize: '1.1rem', 
                  maxWidth: '600px', 
                  margin: '0 auto',
                  color: '#6c757d'
                }}
              >
                Our Trusted Partners
              </p>
            </div>

            {/* Partners Grid */}
            <div className="row justify-content-center" style={{ gap: '30px 0' }}>
              {partners.map((partner) => (
                <div key={partner.id} className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                  <div 
                    className="partner-card"
                    style={{
                      maxWidth: '280px',
                      width: '100%',
                      backgroundColor: '#fff',
                      borderRadius: '12px',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      border: 'none',
                      padding: '30px 20px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 87, 51, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                    }}
                  >
                    <div className="d-flex flex-column align-items-center justify-content-center">
                      <div 
                        className="partner-logo-container"
                        style={{
                          width: '150px',
                          height: '80px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#fff',
                          borderRadius: '8px',
                          border: '1px solid #e9ecef',
                          padding: '10px',
                          marginBottom: '15px',
                          transition: 'border-color 0.3s ease'
                        }}
                      >
                        <img
                          src={partner.logo}
                          alt={`${partner.name} Logo`}
                          style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain',
                          }}
                        />
                      </div>
                      <h5 
                        className="partner-name text-center"
                        style={{ 
                          color: '#333',
                          fontWeight: '600',
                          fontSize: '1.1rem',
                          margin: '0'
                        }}
                      >
                        {partner.name}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Information */}
            <div className="row" style={{ marginTop: '60px' }}>
              <div className="col-lg-8 mx-auto text-center">
                <p 
                  style={{ 
                    fontSize: '0.95rem',
                    color: '#6c757d',
                    lineHeight: '1.6'
                  }}
                >
                  We are proud to work alongside these esteemed organizations in our mission to serve society. 
                  Together, we strive to make a meaningful impact in the communities we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .partner-card:hover .partner-logo-container {
          border-color: #FF5733 !important;
        }
        
        @media (max-width: 768px) {
          .partners-section {
            padding: 60px 0 !important;
          }
          
          .display-4 {
            font-size: 2rem !important;
          }
          
          .partner-logo-container {
            width: 120px !important;
            height: 70px !important;
          }
          
          .container {
            padding: 0 15px !important;
          }
        }
        
        @media (max-width: 576px) {
          .partner-card {
            padding: 25px 15px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;