import React, { useState } from "react";

const SewaBhartiForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    services: {
      donate: false,
      volunteer: false,
      csrActivity: false,
      pledgeHours: false,
      educate: false,
      profession: false,
      others: false,
    },
    othersText: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your interest in joining Sewa Bharti Malva! Your form has been submitted."
    );
  };

  return (
    <div className="container-fluid bg-light min-vh-100 py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-xl-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-header flagBackgroundGradiant text-white text-center py-4 rounded-top-4">
              <h2 className="mb-0 fw-bold upholding-dharma">Join Sewa Bharti Malva</h2>
              <p className="mb-0 mt-2 opacity-75">
                Serving the Community with Dedication
              </p>
            </div>

            <div className="card-body p-5">
              <div>
                {/* Personal Information Section */}
                <div className="mb-4">
                  <h5 className=" mb-3 border-bottom pb-2">
                    <i className="bi bi-person-circle me-2"></i>Personal
                    Information
                  </h5>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label fw-semibold">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg border-2"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="mobile"
                        className="form-label fw-semibold"
                      >
                        Mobile Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        className="form-control form-control-lg border-2"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="Enter mobile number"
                        required
                      />
                    </div>
                  </div>

                  <div className="row g-3 mt-1">
                    <div className="col-12">
                      <label htmlFor="email" className="form-label fw-semibold">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg border-2"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>

                  <div className="row g-3 mt-1">
                    <div className="col-md-8">
                      <label
                        htmlFor="address"
                        className="form-label fw-semibold"
                      >
                        Address <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control border-2"
                        id="address"
                        name="address"
                        rows="2"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Enter your complete address"
                        required
                      />
                    </div>

                    <div className="col-md-4">
                      <label htmlFor="city" className="form-label fw-semibold">
                        City <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg border-2"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Enter city"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Services Section */}
                <div className="mb-4">
                  <h5 className="text-primary mb-3 border-bottom pb-2">
                    <i className="bi bi-hand-thumbs-up me-2"></i>Choose Your
                    Service
                    <small className="text-muted fw-normal ms-2">
                      (Multiple selection allowed)
                    </small>
                  </h5>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="card h-100 border-2 hover-shadow">
                        <div className="card-body p-3">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="donate"
                              name="donate"
                              checked={formData.services.donate}
                              onChange={handleCheckboxChange}
                            />
                            <label
                              className="form-check-label fw-semibold"
                              htmlFor="donate"
                            >
                              <i className="bi bi-heart-fill text-danger me-2"></i>
                              Donate
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="card h-100 border-2 hover-shadow">
                        <div className="card-body p-3">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="volunteer"
                              name="volunteer"
                              checked={formData.services.volunteer}
                              onChange={handleCheckboxChange}
                            />
                            <label
                              className="form-check-label fw-semibold"
                              htmlFor="volunteer"
                            >
                              <i className="bi bi-people-fill text-success me-2"></i>
                              Be a Volunteer
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="card h-100 border-2 hover-shadow">
                        <div className="card-body p-3">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="csrActivity"
                              name="csrActivity"
                              checked={formData.services.csrActivity}
                              onChange={handleCheckboxChange}
                            />
                            <label
                              className="form-check-label fw-semibold"
                              htmlFor="csrActivity"
                            >
                              <i className="bi bi-building text-info me-2"></i>
                              Involve/Plan CSR Activity
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="card h-100 border-2 hover-shadow">
                        <div className="card-body p-3">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="pledgeHours"
                              name="pledgeHours"
                              checked={formData.services.pledgeHours}
                              onChange={handleCheckboxChange}
                            />
                            <label
                              className="form-check-label fw-semibold"
                              htmlFor="pledgeHours"
                            >
                              <i className="bi bi-clock-fill text-warning me-2"></i>
                              Pledge 2 Hours Weekly
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="card h-100 border-2 hover-shadow">
                        <div className="card-body p-3">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="educate"
                              name="educate"
                              checked={formData.services.educate}
                              onChange={handleCheckboxChange}
                            />
                            <label
                              className="form-check-label fw-semibold"
                              htmlFor="educate"
                            >
                              <i className="bi bi-book-fill text-purple me-2"></i>
                              Educate Someone
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="card h-100 border-2 hover-shadow">
                        <div className="card-body p-3">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="profession"
                              name="profession"
                              checked={formData.services.profession}
                              onChange={handleCheckboxChange}
                            />
                            <label
                              className="form-check-label fw-semibold"
                              htmlFor="profession"
                            >
                              <i className="bi bi-briefcase-fill text-secondary me-2"></i>
                              Help with Professional Skills
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="card border-2 hover-shadow">
                        <div className="card-body p-3">
                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="others"
                              name="others"
                              checked={formData.services.others}
                              onChange={handleCheckboxChange}
                            />
                            <label
                              className="form-check-label fw-semibold"
                              htmlFor="others"
                            >
                              <i className="bi bi-plus-circle-fill text-primary me-2"></i>
                              Others
                            </label>
                          </div>

                          {formData.services.others && (
                            <div className="mt-2">
                              <input
                                type="text"
                                className="form-control"
                                name="othersText"
                                value={formData.othersText}
                                onChange={handleInputChange}
                                placeholder="Please specify your other service preference..."
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="d-grid gap-2 mt-5">
                  <button
                    type="submit"
                    className="btn btn-warning btn-lg py-3 fw-bold rounded-3 shadow"
                    onClick={handleSubmit}
                  >
                    <i className="bi bi-send-fill me-2"></i>
                    Submit Registration
                  </button>
                </div>

                <div className="text-center mt-3">
                  <small className="text-muted">
                    By submitting this form, you agree to join Sewa Bharti
                    Malva's mission of community service.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SewaBhartiForm;
