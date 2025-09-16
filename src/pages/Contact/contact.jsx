// import React, { useState } from "react";

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     setTimeout(() => {
//       console.log("Form submitted:", formData);
//       alert("Thank you for your message! We will get back to you soon.");
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         subject: "",
//         message: "",
//       });
//       setIsSubmitting(false);
//     }, 1000);
//   };

//   const isFormValid =
//     formData.name && formData.email && formData.subject && formData.message;

//   return (
//     <>
//       {/* Bootstrap CSS */}
//       <link
//         href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
//         rel="stylesheet"
//       />
//       <link
//         href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css"
//         rel="stylesheet"
//       />

//       <div
//         className="min-vh-100"
//         style={{
//           //   background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//           fontFamily: "Arial, sans-serif",
//         }}
//       >
//         <div className="container py-5 ">
//           {/* Header */}
//           {/* <div className="text-center  mb-5">
//             <div
//               className="d-inline-block flagBackgroundGradiant p-4 mb-4"
//               style={{
//                 backgroundColor: "#f8f9fa",
//                 backdropFilter: "blur(10px)",
//                 borderRadius: "20px",
//                 border: "1px solid rgba(244, 109, 19, 0.2)",
//               }}
//             >
//               <i
//                 className="bi upholding-dharma bi-envelope-heart-fill mb-1"
//                 style={{ fontSize: "3rem" }}
//               ></i>
//               <h1
//                 className="display-4 upholding-dharma mb-3"
//                 style={{
//                   textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
//                 }}
//               >
//                 Get In <span className="upholding-dharma">Touch </span>
//               </h1>
//               <p className="lead m-0 text-muted">
//                 Connect with Sewa Bharti Mava
//               </p>
//             </div>
//           </div> */}
//           <div className="title d-flex justify-content-center ">
//             <h1
//               className="display-4 upholding-dharma mb-1"
//               style={{
//                 textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
//               }}
//             >
//               <span className="flagship">Contact </span>
//               Us
//             </h1>
//           </div>
//           {/* Unified Contact Section */}
//           <div className="row justify-content-center">
//             <div className="col-12 col-xl-11">
//               <div
//                 className="card shadow-lg border-0 overflow-hidden"
//                 style={{
//                   borderRadius: "25px",
//                   background:
//                     "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
//                   boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
//                 }}
//               >
//                 {/* Header Strip */}
//                 <div
//                   className="card-header text-center py-4"
//                   //   style={{
//                   //     background:
//                   //     //   "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//                   //     border: "none"
//                   //   }}
//                 >
//                   <h3 className=" mb-0  flagship fw-bold">
//                     <i className="bi bi-geo-alt-fill upholding-dharma me-2"></i>
//                     Visit Us or Send a Message
//                   </h3>
//                 </div>

//                 <div className="card-body p-0">
//                   <div className="row g-0">
//                     {/* Map Section */}
//                     <div className="col-lg-6 position-relative">
//                       <div
//                         className="h-100 position-relative"
//                         style={{ minHeight: "600px" }}
//                       >
//                         {/* Map */}
//                         <iframe
//                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.131406016568!2d75.85761459999999!3d22.723356699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0b35234f6b%3A0x71aa719366e87f85!2sArchana%20union%20office!5e0!3m2!1sen!2sin!4v1757659012795!5m2!1sen!2sin"
//                           width="100%"
//                           height="100%"
//                           style={{ border: 0, minHeight: "400px" }}
//                           allowFullScreen=""
//                           loading="lazy"
//                           referrerPolicy="no-referrer-when-downgrade"
//                           title="Archana RSS Sangh Karyalaya Location"
//                         ></iframe>

//                         {/* Overlay Contact Info */}
//                         <div className="position-absolute bottom-0 start-0 w-100 p-4">
//                           <div
//                             className="card border-0"
//                             style={{
//                               background: "rgba(255, 255, 255, 0.95)",
//                               backdropFilter: "blur(10px)",
//                               borderRadius: "15px",
//                               boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
//                             }}
//                           >
//                             <div className="card-body p-3">
//                               <h6 className="card-title fw-bold text-primary mb-3">
//                                 <i className="bi bi-building-fill me-2"></i>
//                                 Contact Information
//                               </h6>
//                               <div className=" g-2 small">
//                                 <div className="row">
//                                   <div className="d-flex align-items-center mb-2">
//                                     <i className="bi bi-geo-alt-fill text-danger me-2"></i>
//                                     <span>76, Ram Bagh, Indore, MP 452007</span>
//                                   </div>
//                                 </div>
//                                 <div className="row">
//                                   <div className="d-flex align-items-center mb-2">
//                                     <i className="bi bi-telephone-fill text-success me-2"></i>
//                                     <span>
//                                       +91 89898 22899, +91 98937 64540
//                                     </span>
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="row">
//                                 <div className="d-flex align-items-center">
//                                   <i className="bi bi-envelope-fill text-info me-2"></i>
//                                   <span>sewabhartiindore@gmail.com</span>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Divider Line */}
//                     <div className="col-lg-6 position-relative">
//                       <div
//                         className="position-absolute top-0 start-0 h-100 d-none d-lg-block"
//                         style={{
//                           width: "2px",
//                           background:
//                             "linear-gradient(to bottom, #667eea, #764ba2)",
//                           opacity: 0.3,
//                         }}
//                       ></div>

//                       {/* Form Section */}
//                       <div className="p-5">
//                         <div className="mb-4">
//                           <h4
//                             className="fw-bold mb-2"
//                             style={{ color: "#667eea" }}
//                           >
//                             <i className="bi bi-chat-heart-fill upholding-dharma me-2"></i>
//                             <span className="upholding-dharma">
//                               Send us a Message
//                             </span>
//                           </h4>
//                           <p className="text-muted">
//                             We'd love to hear from you. Fill out the form below
//                             and we'll get back to you as soon as possible.
//                           </p>
//                         </div>

//                         {/* Name Field */}
//                         <div className="mb-4">
//                           <label className="form-label fw-semibold text-dark mb-2">
//                             <i className="bi bi-person-fill me-2 text-primary"></i>
//                             Full Name *
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control form-control-lg"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             placeholder="Enter your full name"
//                             style={{
//                               borderRadius: "12px",
//                               border: "2px solid #e3f2fd",
//                               transition: "all 0.3s ease",
//                               background: "#fafafa",
//                             }}
//                             onFocus={(e) =>
//                               (e.target.style.borderColor = "#667eea")
//                             }
//                             onBlur={(e) =>
//                               (e.target.style.borderColor = "#e3f2fd")
//                             }
//                           />
//                         </div>

//                         <div className="row g-3 mb-4">
//                           {/* Email Field */}
//                           <div className="col-md-6">
//                             <label className="form-label fw-semibold text-dark mb-2">
//                               <i className="bi bi-envelope-fill me-2 text-info"></i>
//                               Email *
//                             </label>
//                             <input
//                               type="email"
//                               className="form-control form-control-lg"
//                               name="email"
//                               value={formData.email}
//                               onChange={handleChange}
//                               placeholder="your@email.com"
//                               style={{
//                                 borderRadius: "12px",
//                                 border: "2px solid #e3f2fd",
//                                 transition: "all 0.3s ease",
//                                 background: "#fafafa",
//                               }}
//                               onFocus={(e) =>
//                                 (e.target.style.borderColor = "#667eea")
//                               }
//                               onBlur={(e) =>
//                                 (e.target.style.borderColor = "#e3f2fd")
//                               }
//                             />
//                           </div>

//                           {/* Phone Field */}
//                           <div className="col-md-6">
//                             <label className="form-label fw-semibold text-dark mb-2">
//                               <i className="bi bi-telephone-fill me-2 text-success"></i>
//                               Phone
//                             </label>
//                             <input
//                               type="tel"
//                               className="form-control form-control-lg"
//                               name="phone"
//                               value={formData.phone}
//                               onChange={handleChange}
//                               placeholder="+91 98765 43210"
//                               style={{
//                                 borderRadius: "12px",
//                                 border: "2px solid #e3f2fd",
//                                 transition: "all 0.3s ease",
//                                 background: "#fafafa",
//                               }}
//                               onFocus={(e) =>
//                                 (e.target.style.borderColor = "#667eea")
//                               }
//                               onBlur={(e) =>
//                                 (e.target.style.borderColor = "#e3f2fd")
//                               }
//                             />
//                           </div>
//                         </div>

//                         {/* Subject Field */}
//                         <div className="mb-4">
//                           <label className="form-label fw-semibold text-dark mb-2">
//                             <i className="bi bi-tag-fill me-2 text-warning"></i>
//                             Subject *
//                           </label>
//                           <select
//                             className="form-select form-select-lg"
//                             name="subject"
//                             value={formData.subject}
//                             onChange={handleChange}
//                             style={{
//                               borderRadius: "12px",
//                               border: "2px solid #e3f2fd",
//                               transition: "all 0.3s ease",
//                               background: "#fafafa",
//                             }}
//                             onFocus={(e) =>
//                               (e.target.style.borderColor = "#667eea")
//                             }
//                             onBlur={(e) =>
//                               (e.target.style.borderColor = "#e3f2fd")
//                             }
//                           >
//                             <option value="">Choose a subject</option>
//                             <option value="general">General Inquiry</option>
//                             <option value="membership">
//                               Membership Information
//                             </option>
//                             <option value="events">Events & Programs</option>
//                             <option value="donations">Donations</option>
//                             <option value="volunteer">
//                               Volunteer Opportunities
//                             </option>
//                             <option value="other">Other</option>
//                           </select>
//                         </div>

//                         {/* Message Field */}
//                         <div className="mb-4">
//                           <label className="form-label fw-semibold text-dark mb-2">
//                             <i className="bi bi-chat-text-fill me-2 text-danger"></i>
//                             Message *
//                           </label>
//                           <textarea
//                             className="form-control"
//                             name="message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             rows="4"
//                             placeholder="Tell us how we can help you..."
//                             style={{
//                               borderRadius: "12px",
//                               border: "2px solid #e3f2fd",
//                               resize: "vertical",
//                               transition: "all 0.3s ease",
//                               background: "#fafafa",
//                             }}
//                             onFocus={(e) =>
//                               (e.target.style.borderColor = "#667eea")
//                             }
//                             onBlur={(e) =>
//                               (e.target.style.borderColor = "#e3f2fd")
//                             }
//                           ></textarea>
//                         </div>

//                         {/* Submit Button */}
//                         <div className="d-grid mb-3">
//                           <button
//                             type="button"
//                             onClick={handleSubmit}
//                             disabled={!isFormValid || isSubmitting}
//                             className="btn btn-lg"
//                             style={{
//                               borderRadius: "12px",
//                               background:
//                                 isFormValid && !isSubmitting
//                                   ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
//                                   : "#dee2e6",
//                               border: "none",
//                               color:
//                                 isFormValid && !isSubmitting
//                                   ? "white"
//                                   : "#6c757d",
//                               boxShadow:
//                                 isFormValid && !isSubmitting
//                                   ? "0 8px 25px rgba(102, 126, 234, 0.3)"
//                                   : "none",
//                               transition: "all 0.3s ease",
//                               fontWeight: "bold",
//                               padding: "15px",
//                             }}
//                           >
//                             {isSubmitting ? (
//                               <>
//                                 <span
//                                   className="spinner-border spinner-border-sm me-2"
//                                   role="status"
//                                 ></span>
//                                 Sending Message...
//                               </>
//                             ) : (
//                               <>
//                                 <i className="bi bi-send-fill me-2"></i>
//                                 Send Message
//                               </>
//                             )}
//                           </button>
//                         </div>

//                         {/* Form Status */}
//                         {!isFormValid && (
//                           <div
//                             className="alert alert-light border"
//                             role="alert"
//                             style={{ borderRadius: "12px" }}
//                           >
//                             <i className="bi bi-info-circle-fill me-2 text-info"></i>
//                             <small>
//                               Please fill in all required fields (*) to send
//                               your message.
//                             </small>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Footer with Office Hours */}
//                 <div
//                   className="card-footer text-center py-4"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
//                     border: "none",
//                   }}
//                 >
//                   <h6 className="fw-bold mb-3" style={{ color: "#667eea" }}>
//                     <i className="bi bi-clock-fill me-2"></i>
//                     Office Hours
//                   </h6>
//                   <div className="row g-3">
//                     <div className="col-md-6">
//                       <div
//                         className="p-3 rounded"
//                         style={{ background: "rgba(102, 126, 234, 0.1)" }}
//                       >
//                         <strong className="d-block text-primary">
//                           Mon - Sat
//                         </strong>
//                         <small className="text-muted">9:00 AM - 6:00 PM</small>
//                       </div>
//                     </div>
//                     {/* <div className="col-md-4">
//                       <div
//                         className="p-3 rounded"
//                         style={{ background: "rgba(40, 167, 69, 0.1)" }}
//                       >
//                         <strong className="d-block text-success">
//                           Saturday
//                         </strong>
//                         <small className="text-muted">9:00 AM - 2:00 PM</small>
//                       </div>
//                     </div> */}
//                     <div className="col-md-6">
//                       <div
//                         className="p-3 rounded"
//                         style={{ background: "rgba(220, 53, 69, 0.1)" }}
//                       >
//                         <strong className="d-block text-danger">Sunday</strong>
//                         <small className="text-muted">Closed</small>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactPage;
// ContactPage.js
import React from "react";
import { useFormik } from "formik";
import { contactFormValidationSchema } from "../../utils/validationSchema/ValidationSchema";

const ContactPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: contactFormValidationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setTimeout(() => {
        console.log("Form submitted:", values);
        alert("Thank you for your message! We will get back to you soon.");
        resetForm();
        setSubmitting(false);
      }, 1000);
    },
  });

  return (
    <>
      {/* Bootstrap CSS */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css"
        rel="stylesheet"
      />
      <div
        className="min-vh-100"
        style={{
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div className="container py-5">
          <div className="title d-flex justify-content-center">
            <h1
              className="display-4 upholding-dharma mb-1"
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              <span className="flagship">Contact </span>
              Us
            </h1>
          </div>
          {/* Unified Contact Section */}
          <div className="row justify-content-center">
            <div className="col-12 col-xl-11">
              <div
                className="card shadow-lg border-0 overflow-hidden"
                style={{
                  borderRadius: "25px",
                  background:
                    "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                }}
              >
                {/* Header Strip */}
                <div className="card-header text-center py-4">
                  <h3 className="mb-0 flagship fw-bold">
                    <i className="bi bi-geo-alt-fill upholding-dharma me-2"></i>
                    Visit Us or Send a Message
                  </h3>
                </div>
                <div className="card-body p-0">
                  <div className="row g-0">
                    {/* Map Section */}
                    <div className="col-lg-6 position-relative">
                      <div
                        className="h-100 position-relative"
                        style={{ minHeight: "600px" }}
                      >
                        {/* Map */}
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.131406016568!2d75.85761459999999!3d22.723356699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0b35234f6b%3A0x71aa719366e87f85!2sArchana%20union%20office!5e0!3m2!1sen!2sin!4v1757659012795!5m2!1sen!2sin"
                          width="100%"
                          height="100%"
                          style={{ border: 0, minHeight: "400px" }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Archana RSS Sangh Karyalaya Location"
                        ></iframe>
                        {/* Overlay Contact Info */}
                        <div className="position-absolute bottom-0 start-0 w-100 p-4">
                          <div
                            className="card border-0"
                            style={{
                              background: "rgba(255, 255, 255, 0.95)",
                              backdropFilter: "blur(10px)",
                              borderRadius: "15px",
                              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                            }}
                          >
                            <div className="card-body p-3">
                              <h6 className="card-title fw-bold text-primary mb-3">
                                <i className="bi bi-building-fill me-2"></i>
                                Contact Information
                              </h6>
                              <div className="g-2 small">
                                <div className="row">
                                  <div className="d-flex align-items-center mb-2">
                                    <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                                    <span>76, Ram Bagh, Indore, MP 452007</span>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="d-flex align-items-center mb-2">
                                    <i className="bi bi-telephone-fill text-success me-2"></i>
                                    <span>
                                      +91 89898 22899, +91 98937 64540
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="d-flex align-items-center">
                                  <i className="bi bi-envelope-fill text-info me-2"></i>
                                  <span>sewabhartiindore@gmail.com</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Divider Line */}
                    <div className="col-lg-6 position-relative">
                      <div
                        className="position-absolute top-0 start-0 h-100 d-none d-lg-block"
                        style={{
                          width: "2px",
                          background:
                            "linear-gradient(to bottom, #667eea, #764ba2)",
                          opacity: 0.3,
                        }}
                      ></div>
                      {/* Form Section */}
                      <div className="p-5">
                        <div className="mb-4">
                          <h4
                            className="fw-bold mb-2"
                            style={{ color: "#667eea" }}
                          >
                            <i className="bi bi-chat-heart-fill upholding-dharma me-2"></i>
                            <span className="upholding-dharma">
                              Send us a Message
                            </span>
                          </h4>
                          <p className="text-muted">
                            We'd love to hear from you. Fill out the form below
                            and we'll get back to you as soon as possible.
                          </p>
                        </div>
                        <form onSubmit={formik.handleSubmit}>
                          {/* Name Field */}
                          <div className="mb-4">
                            <label className="form-label fw-semibold text-dark mb-2">
                              <i className="bi bi-person-fill me-2 text-primary"></i>
                              Full Name *
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              name="name"
                              value={formik.values.name}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              placeholder="Enter your full name"
                              style={{
                                borderRadius: "12px",
                                border: "2px solid #e3f2fd",
                                transition: "all 0.3s ease",
                                background: "#fafafa",
                                borderColor:
                                  formik.touched.name && formik.errors.name
                                    ? "#dc3545"
                                    : "#e3f2fd",
                              }}
                            />
                            {formik.touched.name && formik.errors.name && (
                              <small className="text-danger">
                                {formik.errors.name}
                              </small>
                            )}
                          </div>
                          <div className="row g-3 mb-4">
                            {/* Email Field */}
                            <div className="col-md-6">
                              <label className="form-label fw-semibold text-dark mb-2">
                                <i className="bi bi-envelope-fill me-2 text-info"></i>
                                Email *
                              </label>
                              <input
                                type="email"
                                className="form-control form-control-lg"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="your@email.com"
                                style={{
                                  borderRadius: "12px",
                                  border: "2px solid #e3f2fd",
                                  transition: "all 0.3s ease",
                                  background: "#fafafa",
                                  borderColor:
                                    formik.touched.email && formik.errors.email
                                      ? "#dc3545"
                                      : "#e3f2fd",
                                }}
                              />
                              {formik.touched.email && formik.errors.email && (
                                <small className="text-danger">
                                  {formik.errors.email}
                                </small>
                              )}
                            </div>
                            {/* Phone Field */}
                            <div className="col-md-6">
                              <label className="form-label fw-semibold text-dark mb-2">
                                <i className="bi bi-telephone-fill me-2 text-success"></i>
                                Phone
                              </label>
                              <input
                                type="tel"
                                className="form-control form-control-lg"
                                name="phone"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="+91 ***** *****"
                                style={{
                                  borderRadius: "12px",
                                  border: "2px solid #e3f2fd",
                                  transition: "all 0.3s ease",
                                  background: "#fafafa",
                                  borderColor:
                                    formik.touched.phone && formik.errors.phone
                                      ? "#dc3545"
                                      : "#e3f2fd",
                                }}
                              />
                              {formik.touched.phone && formik.errors.phone && (
                                <small className="text-danger">
                                  {formik.errors.phone}
                                </small>
                              )}
                            </div>
                          </div>
                          {/* Subject Field */}
                          <div className="mb-4">
                            <label className="form-label fw-semibold text-dark mb-2">
                              <i className="bi bi-tag-fill me-2 text-warning"></i>
                              Subject *
                            </label>
                            <select
                              className="form-select form-select-lg"
                              name="subject"
                              value={formik.values.subject}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              style={{
                                borderRadius: "12px",
                                border: "2px solid #e3f2fd",
                                transition: "all 0.3s ease",
                                background: "#fafafa",
                                borderColor:
                                  formik.touched.subject &&
                                  formik.errors.subject
                                    ? "#dc3545"
                                    : "#e3f2fd",
                              }}
                            >
                              <option value="">Choose a subject</option>
                              <option value="general">General Inquiry</option>
                              <option value="membership">
                                Membership Information
                              </option>
                              <option value="events">Events & Programs</option>
                              <option value="donations">Donations</option>
                              <option value="volunteer">
                                Volunteer Opportunities
                              </option>
                              <option value="other">Other</option>
                            </select>
                            {formik.touched.subject &&
                              formik.errors.subject && (
                                <small className="text-danger">
                                  {formik.errors.subject}
                                </small>
                              )}
                          </div>
                          {/* Message Field */}
                          <div className="mb-4">
                            <label className="form-label fw-semibold text-dark mb-2">
                              <i className="bi bi-chat-text-fill me-2 text-danger"></i>
                              Message *
                            </label>
                            <textarea
                              className="form-control"
                              name="message"
                              value={formik.values.message}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              rows="4"
                              placeholder="Tell us how we can help you..."
                              style={{
                                borderRadius: "12px",
                                border: "2px solid #e3f2fd",
                                resize: "vertical",
                                transition: "all 0.3s ease",
                                background: "#fafafa",
                                borderColor:
                                  formik.touched.message &&
                                  formik.errors.message
                                    ? "#dc3545"
                                    : "#e3f2fd",
                              }}
                            ></textarea>
                            {formik.touched.message &&
                              formik.errors.message && (
                                <small className="text-danger">
                                  {formik.errors.message}
                                </small>
                              )}
                          </div>
                          {/* Submit Button */}
                          <div className="d-grid mb-3">
                            <button
                              type="submit"
                              disabled={!formik.isValid || formik.isSubmitting}
                              className="btn btn-lg"
                              style={{
                                borderRadius: "12px",
                                background:
                                  formik.isValid && !formik.isSubmitting
                                    ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                                    : "#dee2e6",
                                border: "none",
                                color:
                                  formik.isValid && !formik.isSubmitting
                                    ? "white"
                                    : "#6c757d",
                                boxShadow:
                                  formik.isValid && !formik.isSubmitting
                                    ? "0 8px 25px rgba(102, 126, 234, 0.3)"
                                    : "none",
                                transition: "all 0.3s ease",
                                fontWeight: "bold",
                                padding: "15px",
                              }}
                            >
                              {formik.isSubmitting ? (
                                <>
                                  <span
                                    className="spinner-border spinner-border-sm me-2"
                                    role="status"
                                  ></span>
                                  Sending Message...
                                </>
                              ) : (
                                <>
                                  <i className="bi bi-send-fill me-2"></i>
                                  Send Message
                                </>
                              )}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
               
                <div
                  className="card-footer text-center py-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                    border: "none",
                  }}
                >
                  <h6 className="fw-bold mb-3" style={{ color: "#667eea" }}>
                    <i className="bi bi-clock-fill me-2"></i>
                    Office Hours
                  </h6>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div
                        className="p-3 rounded"
                        style={{ background: "rgba(102, 126, 234, 0.1)" }}
                      >
                        <strong className="d-block text-primary">
                          Mon - Sat
                        </strong>
                        <small className="text-muted">9:00 AM - 6:00 PM</small>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="p-3 rounded"
                        style={{ background: "rgba(220, 53, 69, 0.1)" }}
                      >
                        <strong className="d-block text-danger">Sunday</strong>
                        <small className="text-muted">Closed</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
