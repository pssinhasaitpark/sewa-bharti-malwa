import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Heart,
  Users,
  GraduationCap,
  Stethoscope,
  Home,
  MapPin,
  Clock,
  Phone,
  Mail,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-vh-100">
      {/* Hero Section */}
      <div className=" text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3 upholding-dharma">
                <span className="flagship">Sewa Bharti </span>
                Malwa
              </h1>
              <p className="lead mb-4 text-muted fw-bold ">
                Serving humanity with dedication since 1989. Empowering
                communities through education, healthcare, skill development,
                and social welfare across the Malwa region of Madhya Pradesh.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <div className="badge bg-light upholding-dharma fs-6 px-3 py-2">
                  <Users className="me-2" size={16} />
                  3000+ Volunteers
                </div>
                <div className="badge bg-light upholding-dharma fs-6 px-3 py-2">
                  <MapPin className="me-2" size={16} />
                  15 Districts
                </div>
                <div className="badge bg-light upholding-dharma fs-6 px-3 py-2">
                  <Heart className="me-2" size={16} />
                  35+ Years of Service
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mb-4 upholding-dharma fw-bold">Our Mission</h2>
              <p className="fs-5 text-muted">
                Founded in 1989, Sewa Bharti has resolved to work for the
                welfare of economically weaker sections of society. We primarily
                serve Remote Tribal Communities and Urban Slum Residents,
                focusing on Education, Health, Skill Development, Rural
                Development, and Communal Harmony.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3 col-sm-6">
              <div className="text-center">
                <div
                  className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "80px", height: "80px" }}
                >
                  <MapPin size={32} />
                </div>
                <h3 className="fw-bold text-primary">1.75 Lac+</h3>
                <p className="text-muted">Centers Nationwide</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="text-center">
                <div
                  className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "80px", height: "80px" }}
                >
                  <Users size={32} />
                </div>
                <h3 className="fw-bold text-success">3000+</h3>
                <p className="text-muted">Dedicated Volunteers</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="text-center">
                <div
                  className="bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "80px", height: "80px" }}
                >
                  <Home size={32} />
                </div>
                <h3 className="fw-bold text-info">240</h3>
                <p className="text-muted">Successful Adoptions</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="text-center">
                <div
                  className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "80px", height: "80px" }}
                >
                  <Stethoscope size={32} />
                </div>
                <h3 className="fw-bold text-warning">52</h3>
                <p className="text-muted">Tribal Villages Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Projects */}
      <div className="py-5">
        <div className="container">
          <h2 className="text-center upholding-dharma  fw-bold mb-5">Our Key Projects</h2>

          {/* Hostels Section */}
          <div className="row mb-5">
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary text-white rounded p-2 me-3">
                      <Home size={24} />
                    </div>
                    <h4 className="card-title mb-0">Tribal Hostels</h4>
                  </div>
                  <p className="card-text">
                    Operating 4 Girls hostels and 8 Boys hostels in the Malwa
                    region to support tribal children's education. These hostels
                    are strategically located around educational resources,
                    enabling children from migrating tribal families to continue
                    their studies.
                  </p>
                  <ul className="list-unstyled">
                    <li>
                      <small className="text-muted">
                        • Jeevan Umang Chatrwas
                      </small>
                    </li>
                    <li>
                      <small className="text-muted">
                        • Siddarth Nagar Chatrawas
                      </small>
                    </li>
                    <li>
                      <small className="text-muted">• Sewadham Udaynagar</small>
                    </li>
                    <li>
                      <small className="text-muted">
                        • One residential hostel for differently abled
                      </small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Matruchhaya Section */}
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-success text-white rounded p-2 me-3">
                      <Heart size={24} />
                    </div>
                    <h4 className="card-title mb-0">Matruchhaya</h4>
                  </div>
                  <p className="card-text">
                    More than just an orphanage, Matruchhaya is a nurturing
                    refuge for abandoned infants. Established in 2006, it's a
                    place where children experience happiness, affection, and
                    joy under the care of loving "Yashodas."
                  </p>
                  <div className="row text-center mt-3">
                    <div className="col-6">
                      <strong className="text-success">240</strong>
                      <br />
                      <small className="text-muted">Successful Adoptions</small>
                    </div>
                    <div className="col-6">
                      <strong className="text-success">10</strong>
                      <br />
                      <small className="text-muted">Professional Team</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Healthcare Section */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-info text-white rounded p-2 me-3">
                      <Stethoscope size={24} />
                    </div>
                    <h4 className="card-title mb-0">Healthcare Services</h4>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="fw-bold">Mobile Medical Unit - Manpur</h6>
                      <p className="small text-muted mb-3">
                        Serving 52 tribal villages with weekly visits, bringing
                        essential healthcare directly to remote communities.
                      </p>

                      <h6 className="fw-bold">MY Hospital Help Desk</h6>
                      <p className="small text-muted mb-3">
                        Operating since 2016, providing navigation assistance,
                        financial aid, blood donation coordination, and access
                        to government healthcare schemes.
                        <strong className="text-info d-block">
                          16,160 beneficiaries (Jan-June 2023)
                        </strong>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h6 className="fw-bold">MTH Hospital Support</h6>
                      <p className="small text-muted mb-3">
                        Launched in January 2023, focusing on gynaecological
                        care with comprehensive support for women including
                        financial aid and prenatal care.
                        <strong className="text-info d-block">
                          13,565 beneficiaries (Mar-Dec 2023)
                        </strong>
                      </p>

                      <h6 className="fw-bold">Sahara Ward</h6>
                      <p className="small text-muted">
                        Providing free medications, medical accessories,
                        orthopaedic implants, and essential items for
                        financially vulnerable patients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-warning text-white rounded p-2 me-3">
                      <GraduationCap size={24} />
                    </div>
                    <h4 className="card-title mb-0">
                      Education & Skill Development
                    </h4>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <h6 className="fw-bold">Learning Centers</h6>
                      <ul className="list-unstyled small text-muted">
                        <li>• Paathdan Kendra</li>
                        <li>• Sanskar Kendra</li>
                        <li>• Shiksha Kendra</li>
                        <li>• Ekal Vidhyalaya</li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <h6 className="fw-bold">Training Programs</h6>
                      <ul className="list-unstyled small text-muted">
                        <li>• Computer Training Centers</li>
                        <li>• Sewing Training Centers</li>
                        <li>• Beauty Parlour Training</li>
                        <li>• Mehendi Carving Training</li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <h6 className="fw-bold">Competitive Exam Prep</h6>
                      <ul className="list-unstyled small text-muted">
                        <li>• Disha Preparation Center</li>
                        <li>• Sankalp Computer Training</li>
                        <li>• Tribal Empowerment Centers</li>
                        <li>• Self Help Groups</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coverage Area */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center upholding-dharma fw-bold mb-4">Our Service Area</h3>
              <p className="text-center text-muted mb-4">
                Sewa Bharti (Malwa Region) operates across 15 districts of
                Madhya Pradesh
              </p>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    {[
                      "Indore",
                      "Ujjain",
                      "Agar Malwa",
                      "Alirajpur",
                      "Badwani",
                      "Burhanpur",
                      "Dewas",
                      "Dhar",
                      "Jhabua",
                      "Khandwa",
                      "Khargone",
                      "Mandsaur",
                      "Neemuch",
                      "Ratlam",
                      "Shajapur",
                    ].map((district, index) => (
                      <span
                        key={index}
                        className="badge btn btn-warning fs-6 px-3 py-2"
                      >
                        {district}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     

      {/* Call to Action */}
      <div className=" text-white py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h3 className="mb-3 flagship">Join Us in Making a Difference</h3>
              <p className="lead text-muted mb-4">
                Together, we can continue to serve humanity and build a better
                tomorrow for the most vulnerable members of our society. Your
                support helps us expand our reach and impact.
              </p>
              <button className="btn btn-warning btn-lg px-4">
                Get Involved
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
