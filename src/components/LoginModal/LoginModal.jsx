// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Modal, Form, Button, Alert, Spinner, Row, Col } from "react-bootstrap";
// import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
// import { loginUser } from "../../redux/slice/LoginSlice";
// import "./LoginModal.css";

// // You can replace this with your actual login image
// import LoginImage from "../../assets/icons/HeaderLogo.svg"; // Add your image path here

// const LoginModal = ({ show, onHide }) => {
//   const dispatch = useDispatch();

//   // Redux state
//   const { loading, error } = useSelector((state) => state.auth);

//   // Component state
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [formErrors, setFormErrors] = useState({});

//   const handleCloseModal = () => {
//     onHide();
//     setFormData({ email: '', password: '' });
//     setFormErrors({});
//     setShowPassword(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));

//     // Clear specific field error when user starts typing
//     if (formErrors[name]) {
//       setFormErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const validateForm = () => {
//     const errors = {};

//     if (!formData.email) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = 'Email is invalid';
//     }

//     if (!formData.password) {
//       errors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       errors.password = 'Password must be at least 6 characters';
//     }

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     try {
//       await dispatch(loginUser(formData)).unwrap();
//       handleCloseModal();
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <Modal
//       show={show}
//       onHide={handleCloseModal}
//       centered
//       size="lg"
//       className="login-modal-custom"
//     >
//       <Modal.Body className="p-0">
//         <Row className="g-0 h-100">
//           {/* Left side - Image */}
//           <Col md={6} className="login-image-section">
//             <div className="login-image-container">
//               <img
//                 src={LoginImage}
//                 alt="Login"
//                 className="login-image"
//                 onError={(e) => {
//                   // Fallback if image doesn't exist
//                   e.target.style.display = 'none';
//                   e.target.parentElement.innerHTML = `
//                     <div class="login-image-fallback">
//                       <div class="fallback-icon">
//                         <i class="fas fa-user-circle"></i>
//                       </div>
//                       <h4>Welcome Back!</h4>
//                       <p>Sign in to continue your journey with us</p>
//                     </div>
//                   `;
//                 }}
//               />

//             </div>
//           </Col>

//           {/* Right side - Form */}
//           <Col md={6} className="login-form-section">
//             <div className="login-form-container">
//               <button
//                 type="button"
//                 className="btn-close custom-close-btn"
//                 aria-label="Close"
//                 onClick={handleCloseModal}
//               ></button>

//               <div className="login-header">
//                 <div className="login-icon">
//                   <FaUser />
//                 </div>
//                 <h3 className="login-title">Login</h3>
//                 <p className="login-subtitle">Enter your credentials to access your account</p>
//               </div>

//               {error && (
//                 <Alert variant="danger" className="mb-3 custom-alert">
//                   {typeof error === 'string' ? error : 'An error occurred during login'}
//                 </Alert>
//               )}

//               <Form onSubmit={handleSubmit} className="login-form">
//                 <Form.Group className="mb-3">
//                   <Form.Label className="form-label-custom">Email Address</Form.Label>
//                   <Form.Control
//                     type="email"
//                     name="email"
//                     placeholder="Enter your email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     isInvalid={!!formErrors.email}
//                     disabled={loading}
//                     className="form-control-custom"
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {formErrors.email}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group className="mb-4">
//                   <Form.Label className="form-label-custom">Password</Form.Label>
//                   <div className="password-input-wrapper">
//                     <Form.Control
//                       type={showPassword ? "text" : "password"}
//                       name="password"
//                       placeholder="Enter your password"
//                       value={formData.password}
//                       onChange={handleInputChange}
//                       isInvalid={!!formErrors.password}
//                       disabled={loading}
//                       className="form-control-custom password-input"
//                     />
//                     <Button
//                       variant="link"
//                       className="password-toggle-btn"
//                       onClick={togglePasswordVisibility}
//                       disabled={loading}
//                       type="button"
//                     >
//                       {showPassword ? <FaEyeSlash /> : <FaEye />}
//                     </Button>
//                   </div>
//                   <Form.Control.Feedback type="invalid">
//                     {formErrors.password}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <div className="d-grid mb-3">
//                   <Button
//                     // variant="primary"
//                     size="lg"
//                     type="submit"
//                     disabled={loading}
//                     className="login-submit-btn-custom"
//                   >
//                     {loading ? (
//                       <>
//                         <Spinner
//                           as="span"
//                           animation="border"
//                           size="sm"
//                           role="status"
//                           aria-hidden="true"
//                           className="me-2"
//                         />
//                         Signing in...
//                       </>
//                     ) : (
//                       'Login'
//                     )}
//                   </Button>
//                 </div>

//                 <div className="login-footer">
//                   <p className="forgot-password">
//                     <a href="#" className="forgot-link">Forgot your password?</a>
//                   </p>
//                 </div>
//               </Form>
//             </div>
//           </Col>
//         </Row>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default LoginModal;


// LoginModal.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Form, Button, Alert, Spinner, Row, Col } from "react-bootstrap";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { loginAndFetchUser, clearError } from "../../redux/slice/LoginSlice";
import { useNavigate } from "react-router-dom";
import "./LoginModal.css";
import LoginImage from "../../assets/icons/HeaderLogo.svg";

const LoginModal = ({ show, onHide }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});

  const handleCloseModal = () => {
    onHide();
    setFormData({ email: "", password: "" });
    setFormErrors({});
    setShowPassword(false);
    dispatch(clearError());
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      await dispatch(loginAndFetchUser(formData)).unwrap();
      handleCloseModal();
      navigate("/donation-dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Modal show={show} onHide={handleCloseModal} centered size="lg" className="login-modal-custom">
      <Modal.Body className="p-0">
        <Row className="g-0 h-100">
          <Col md={6} className="login-image-section">
            <div className="login-image-container">
              <img
                src={LoginImage}
                alt="Login"
                className="login-image"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML = `
                    <div class="login-image-fallback">
                      <div class="fallback-icon">
                        <i class="fas fa-user-circle"></i>
                      </div>
                      <h4>Welcome Back!</h4>
                      <p>Sign in to continue your journey with us</p>
                    </div>
                  `;
                }}
              />
            </div>
          </Col>
          <Col md={6} className="login-form-section">
            <div className="login-form-container">
              <button
                type="button"
                className="btn-close custom-close-btn"
                aria-label="Close"
                onClick={handleCloseModal}
              ></button>
              <div className="login-header">
                <div className="login-icon">
                  <FaUser />
                </div>
                <h3 className="login-title">Login</h3>
                <p className="login-subtitle">Enter your credentials to access your account</p>
              </div>
              {error && (
                <Alert variant="danger" className="mb-3 custom-alert">
                  {typeof error === "string" ? error : "An error occurred during login"}
                </Alert>
              )}
              <Form onSubmit={handleSubmit} className="login-form">
                <Form.Group className="mb-3">
                  <Form.Label className="form-label-custom">Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    isInvalid={!!formErrors.email}
                    disabled={loading}
                    className="form-control-custom"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="form-label-custom">Password</Form.Label>
                  <div className="password-input-wrapper">
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleInputChange}
                      isInvalid={!!formErrors.password}
                      disabled={loading}
                      className="form-control-custom password-input"
                    />
                    <Button
                      variant="link"
                      className="password-toggle-btn"
                      onClick={togglePasswordVisibility}
                      disabled={loading}
                      type="button"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                  </div>
                  <Form.Control.Feedback type="invalid">
                    {formErrors.password}
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="d-grid mb-3">
                  <Button size="lg" type="submit" disabled={loading} className="login-submit-btn-custom">
                    {loading ? (
                      <>
                        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
                        Signing in...
                      </>
                    ) : (
                      "Login"
                    )}
                  </Button>
                </div>
                <div className="login-footer">
                  <p className="forgot-password">
                    <a href="#" className="forgot-link">
                      Forgot your password?
                    </a>
                  </p>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
