import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { joinHandsValidationSchema } from "../../utils/validationSchema/ValidationSchema";
import {
  submitJoinHandsForm,
  resetState,
  clearError,
  selectJoinHandsLoading,
  selectJoinHandsSuccess,
  selectJoinHandsError,
  selectJoinHandsMessage,
} from "../../redux/slice/JoinHandsSlice";
import toast, { Toaster } from "react-hot-toast";

const JoinHands = () => {
  const dispatch = useDispatch();

  // Redux state selectors
  const loading = useSelector(selectJoinHandsLoading);
  const success = useSelector(selectJoinHandsSuccess);
  const error = useSelector(selectJoinHandsError);
  const message = useSelector(selectJoinHandsMessage);

  const formik = useFormik({
    initialValues: {
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
    },
    validationSchema: joinHandsValidationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(submitJoinHandsForm(values))
        .unwrap()
        .then(() => {
          resetForm();
        })
        .catch(() => {
          // Error is already handled by the slice
        });
    },
  });

  // Handle success/error notifications with toast
  useEffect(() => {
    if (success) {
      toast.success(message || "Registration submitted successfully!");
      // Reset state after showing message
      setTimeout(() => {
        dispatch(resetState());
      }, 3000);
    }
  }, [success, message, dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      // Clear error after showing
      setTimeout(() => {
        dispatch(clearError());
      }, 3000);
    }
  }, [error, dispatch]);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    formik.setFieldValue(`services.${name}`, checked);

    // Clear othersText if others checkbox is unchecked
    if (name === "others" && !checked) {
      formik.setFieldValue("othersText", "");
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100 py-5">
      <Toaster />
      <div className="row justify-content-center">
        <div className="col-lg-8 col-xl-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-header flagBackgroundGradiant text-white text-center py-4 rounded-top-4">
              <h2 className="mb-0 fw-bold upholding-dharma">
                Join Sewa Bharti Malva
              </h2>
              <p className="mb-0 mt-2 opacity-75">
                Serving the Community with Dedication
              </p>
            </div>

            <div className="card-body p-5">
              <form onSubmit={formik.handleSubmit}>
                {/* Personal Information Section */}
                <div className="mb-4">
                  <h5 className="mb-3 border-bottom pb-2">
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
                        className={`form-control form-control-lg border-2 ${
                          formik.touched.name && formik.errors.name
                            ? "is-invalid"
                            : ""
                        }`}
                        id="name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter your full name"
                        disabled={loading}
                      />
                      {formik.touched.name && formik.errors.name && (
                        <div className="invalid-feedback">
                          {formik.errors.name}
                        </div>
                      )}
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
                        className={`form-control form-control-lg border-2 ${
                          formik.touched.mobile && formik.errors.mobile
                            ? "is-invalid"
                            : ""
                        }`}
                        id="mobile"
                        name="mobile"
                        value={formik.values.mobile}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter mobile number"
                        disabled={loading}
                      />
                      {formik.touched.mobile && formik.errors.mobile && (
                        <div className="invalid-feedback">
                          {formik.errors.mobile}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="row g-3 mt-1">
                    <div className="col-12">
                      <label htmlFor="email" className="form-label fw-semibold">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className={`form-control form-control-lg border-2 ${
                          formik.touched.email && formik.errors.email
                            ? "is-invalid"
                            : ""
                        }`}
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter your email address"
                        disabled={loading}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div className="invalid-feedback">
                          {formik.errors.email}
                        </div>
                      )}
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
                        className={`form-control border-2 ${
                          formik.touched.address && formik.errors.address
                            ? "is-invalid"
                            : ""
                        }`}
                        id="address"
                        name="address"
                        rows="2"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter your complete address"
                        disabled={loading}
                      />
                      {formik.touched.address && formik.errors.address && (
                        <div className="invalid-feedback">
                          {formik.errors.address}
                        </div>
                      )}
                    </div>

                    <div className="col-md-4">
                      <label htmlFor="city" className="form-label fw-semibold">
                        City <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control form-control-lg border-2 ${
                          formik.touched.city && formik.errors.city
                            ? "is-invalid"
                            : ""
                        }`}
                        id="city"
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter city"
                        disabled={loading}
                      />
                      {formik.touched.city && formik.errors.city && (
                        <div className="invalid-feedback">
                          {formik.errors.city}
                        </div>
                      )}
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

                  {formik.touched.services && formik.errors.services && (
                    <div className="alert alert-danger py-2 mb-3">
                      <small>{formik.errors.services}</small>
                    </div>
                  )}

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
                              checked={formik.values.services.donate}
                              onChange={handleCheckboxChange}
                              disabled={loading}
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
                              checked={formik.values.services.volunteer}
                              onChange={handleCheckboxChange}
                              disabled={loading}
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
                              checked={formik.values.services.csrActivity}
                              onChange={handleCheckboxChange}
                              disabled={loading}
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
                              checked={formik.values.services.pledgeHours}
                              onChange={handleCheckboxChange}
                              disabled={loading}
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
                              checked={formik.values.services.educate}
                              onChange={handleCheckboxChange}
                              disabled={loading}
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
                              checked={formik.values.services.profession}
                              onChange={handleCheckboxChange}
                              disabled={loading}
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
                              checked={formik.values.services.others}
                              onChange={handleCheckboxChange}
                              disabled={loading}
                            />
                            <label
                              className="form-check-label fw-semibold"
                              htmlFor="others"
                            >
                              <i className="bi bi-plus-circle-fill text-primary me-2"></i>
                              Others
                            </label>
                          </div>

                          {formik.values.services.others && (
                            <div className="mt-2">
                              <input
                                type="text"
                                className={`form-control ${
                                  formik.touched.othersText &&
                                  formik.errors.othersText
                                    ? "is-invalid"
                                    : ""
                                }`}
                                name="othersText"
                                value={formik.values.othersText}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Please specify your other service preference..."
                                disabled={loading}
                              />
                              {formik.touched.othersText &&
                                formik.errors.othersText && (
                                  <div className="invalid-feedback">
                                    {formik.errors.othersText}
                                  </div>
                                )}
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
                    disabled={!formik.isValid || loading}
                    style={{
                      opacity: !formik.isValid || loading ? 0.6 : 1,
                    }}
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-send-fill  me-2"></i>
                        <span className="text-light">Submit Registration</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center mt-3">
                  <small className="text-muted">
                    By submitting this form, you agree to join Sewa Bharti
                    Malwa's mission of community service.
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinHands;
