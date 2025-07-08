import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BlogImg3 } from "../../assets";

const DonationModal = ({ showModal, handleClose }) => {
  return (
    <div className="container-fluid " style={{ backgroundColor: "#f8f9fa" }}>
      {/* Modal */}
      {showModal && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div
              className="modal-content"
              style={{ borderRadius: "15px", border: "none" }}
            >
              {/* Modal Header */}
              <div className="modal-header border-0 pb-0">
                <h5
                  className="modal-title fw-bold text-dark"
                  style={{ fontSize: "1.4rem" }}
                >
                  To Open 300 Self-Practice Study Centers In Ujain &...
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                  style={{ fontSize: "1.2rem" }}
                ></button>
              </div>

              {/* Modal Body */}
              <div className="modal-body pt-2">
                {/* Study Centers Management Section */}
                <div className="mb-4">
                  <h6 className="fw-bold mb-3" style={{ fontSize: "1.1rem" }}>
                    Study Centers Management
                  </h6>

                  <div className="row mb-2">
                    <div className="col-2">
                      <span className="text-muted">Total Cost</span>
                    </div>
                    <div className="col-1 text-center">
                      <span className="text-muted">——</span>
                    </div>
                    <div className="col-2">
                      <span className="fw-bold">2,00,000</span>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="col-2">
                      <span className="text-muted">Allocations</span>
                    </div>
                    <div className="col-1 text-center">
                      <span className="text-muted">——</span>
                    </div>
                    <div className="col-2">
                      <span className="fw-bold">1,70,000</span>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-2">
                      <span className="text-muted">Remaining</span>
                    </div>
                    <div className="col-1 text-center">
                      <span className="text-muted">——</span>
                    </div>
                    <div className="col-2">
                      <span className="fw-bold">30,000</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="d-flex gap-2 mb-4">
                    <button
                      className="btn text-white px-5 py-2 rounded-2"
                      style={{ backgroundColor: "#D2691E", border: "none" }}
                    >
                      Donate
                    </button>
                    <button
                      className="btn text-white px-5 py-2 rounded-2"
                      style={{ backgroundColor: "#2F1B69", border: "none" }}
                    >
                      Plaza
                    </button>
                  </div>
                </div>

                {/* Main Content Section */}
                <div className="row">
                  <div className="col-md-5 mb-3">
                    <img
                      src={BlogImg3}
                      alt="Children in classroom"
                      className="img-fluid rounded"
                      style={{
                        width: "100%",
                        height: "250px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="col-md-7">
                    <h5 className="fw-bold mb-3" style={{ color: "#2F1B69" }}>
                      Empowering Futures Through Education
                    </h5>
                    <p
                      className="text-muted"
                      style={{ fontSize: "0.9rem", lineHeight: "1.5" }}
                    >
                      We Believe Education Is The Most Powerful Tool To Break
                      The Cycle Of Poverty And Build Brighter Futures. Our
                      Education Initiatives Focus On Providing Quality Learning
                      Opportunities To Underprivileged Children And Youth. From
                      Establishing Digital Classrooms And Providing School
                      Supplies To Running After-School Programs And Skill
                      Development Workshops, We Are Committed To Ensuring That
                      Every Child Has The Chance To Learn, Grow, And Succeed.
                    </p>
                  </div>
                </div>

                {/* We Focus On Section */}
                <div className="mt-4">
                  <h6 className="fw-bold mb-3" style={{ fontSize: "1.1rem" }}>
                    We Focus On
                  </h6>
                  <ul className="list-unstyled">
                    <li className="mb-2 d-flex">
                      <span className="text-primary me-2">•</span>
                      <span
                        className="text-muted"
                        style={{ fontSize: "0.9rem" }}
                      >
                        <strong>Access:</strong> Reaching Underprivileged And
                        Rural Areas With Limited Educational Resources.
                      </span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="text-primary me-2">•</span>
                      <span
                        className="text-muted"
                        style={{ fontSize: "0.9rem" }}
                      >
                        <strong>Support:</strong> Offering Scholarships, School
                        Supplies, And Mentorship To Ensure Long-Term Student
                        Success.
                      </span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="text-primary me-2">•</span>
                      <span
                        className="text-muted"
                        style={{ fontSize: "0.9rem" }}
                      >
                        <strong>Growth:</strong> Creating Safe, Inclusive, And
                        Inspiring Learning Environments Where Every Student Can
                        Thrive.
                      </span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="text-primary me-2">•</span>
                      <span
                        className="text-muted"
                        style={{ fontSize: "0.9rem" }}
                      >
                        <strong>Empowerment:</strong> Encouraging Critical
                        Thinking, Creativity, And Confidence So That Young Minds
                        Become Leaders Of Tomorrow.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="modal-footer border-0 pt-0">
                <button
                  type="button"
                  className="btn text-white px-4 py-2 rounded-2 ms-auto"
                  style={{ backgroundColor: "#D2691E", border: "none" }}
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationModal;
