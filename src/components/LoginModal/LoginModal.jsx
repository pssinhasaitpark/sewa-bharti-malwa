import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Form, Button, Alert, Spinner, Row, Col } from "react-bootstrap";
import { FaUser, FaEye, FaEyeSlash, FaLock, FaArrowLeft } from "react-icons/fa";
import { loginAndFetchUser, forgotPassword, clearError, clearForgotPasswordState } from "../../redux/slice/LoginSlice";
import { useNavigate } from "react-router-dom";
import "./LoginModal.css";
import LoginImage from "../../assets/icons/HeaderLogo.svg";

const LoginModal = ({ show, onHide }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Get state from Redux
  const { 
    loading, 
    error, 
    forgotPasswordLoading, 
    forgotPasswordError, 
    forgotPasswordSuccess, 
    forgotPasswordMessage 
  } = useSelector((state) => state.auth);
  
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const [isForgetPassword, setIsForgetPassword] = useState(false);

  // Clear forgot password state when component mounts or modal opens
  useEffect(() => {
    if (show) {
      dispatch(clearForgotPasswordState());
    }
  }, [show, dispatch]);

  const handleCloseModal = () => {
    onHide();
    setFormData({ email: "", password: "" });
    setFormErrors({});
    setShowPassword(false);
    setIsForgetPassword(false);
    dispatch(clearError());
    dispatch(clearForgotPasswordState());
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
    
    // Only validate password if not in forget password mode
    if (!isForgetPassword && !formData.password) {
      errors.password = "Password is required";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    if (isForgetPassword) {
      // Handle forgot password logic
      try {
        await dispatch(forgotPassword(formData.email)).unwrap();
        // Success will be handled by the Redux state
      } catch (error) {
        console.error("Forgot password failed:", error);
        // Error will be handled by the Redux state
      }
    } else {
      // Handle login logic
      try {
        await dispatch(loginAndFetchUser(formData)).unwrap();
        handleCloseModal();
        navigate("/donation-dashboard");
      } catch (error) {
        console.error("Login failed:", error);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleForgetPassword = () => {
    setIsForgetPassword(!isForgetPassword);
    setFormErrors({});
    setFormData({ email: formData.email, password: "" }); // Keep email, clear password
    dispatch(clearError());
    dispatch(clearForgotPasswordState());
  };

  // Auto close modal after successful forgot password (optional)
  useEffect(() => {
    if (forgotPasswordSuccess) {
      const timer = setTimeout(() => {
        handleCloseModal();
      }, 3000); // Close after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [forgotPasswordSuccess]);

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
                      <h4>${isForgetPassword ? 'Reset Password' : 'Welcome Back!'}</h4>
                      <p>${isForgetPassword ? 'Enter your email to reset your password' : 'Sign in to continue your journey with us'}</p>
                    </div>
                  `;
                }}
              />
            </div>
          </Col>
          <Col md={6} className="login-form-section">
            <div className="login-form-container">
              <div className="d-flex">
                <button
                  type="button"
                  className="btn-close custom-close-btn mt-4"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
                {isForgetPassword && (
                  <div className="mb-5">
                    <Button 
                      variant="link" 
                      className="back-to-login-btn p-0 text-start text-dark text-decoration-none"
                      onClick={toggleForgetPassword}
                    >
                      <FaArrowLeft className="me-2" />
                      Back to Login
                    </Button>
                  </div>
                )}

                {/* Show login error */}
                {error && !isForgetPassword && (
                  <Alert variant="danger" className="mb-3 custom-alert">
                    {typeof error === "string" ? error : "An error occurred"}
                  </Alert>
                )}

                {/* Show forgot password error */}
                {forgotPasswordError && isForgetPassword && (
                  <Alert variant="danger" className="mb-3 custom-alert">
                    {typeof forgotPasswordError === "string" ? forgotPasswordError : "Failed to send reset email"}
                  </Alert>
                )}

                {/* Show forgot password success message */}
                {forgotPasswordSuccess && isForgetPassword && (
                  <Alert variant="success" className="mb-3 custom-alert">
                    {forgotPasswordMessage || "Password reset link sent to your email!"}
                  </Alert>
                )}
              </div>

              <div className="login-header">
                <div className="login-icon">
                  {isForgetPassword ? <FaLock /> : <FaUser />}
                </div>
                <h3 className="login-title">
                  {isForgetPassword ? "Forgot Password" : "Login"}
                </h3>
                <p className="login-subtitle">
                  {isForgetPassword 
                    ? "Enter your email address to receive a password reset link" 
                    : "Enter your credentials to access your account"
                  }
                </p>
              </div>

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
                    disabled={loading || forgotPasswordLoading}
                    className="form-control-custom"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Conditionally render password field only for login */}
                {!isForgetPassword && (
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
                )}

                <div className="d-grid mb-3">
                  <Button 
                    size="lg" 
                    type="submit" 
                    disabled={loading || forgotPasswordLoading || forgotPasswordSuccess} 
                    className="login-submit-btn-custom"
                  >
                    {(loading || forgotPasswordLoading) ? (
                      <>
                        <Spinner 
                          as="span" 
                          animation="border" 
                          size="sm" 
                          role="status" 
                          aria-hidden="true" 
                          className="me-2" 
                        />
                        {isForgetPassword ? "Sending..." : "Signing in..."}
                      </>
                    ) : (
                      isForgetPassword ? "Send Reset Link" : "Login"
                    )}
                  </Button>
                </div>

                {/* Conditionally render forgot password link only for login mode */}
                {!isForgetPassword && (
                  <div className="login-footer">
                    <p className="forgot-password">
                      <a 
                        href="#" 
                        className="forgot-link"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleForgetPassword();
                        }}
                      >
                        Forgot your password?
                      </a>
                    </p>
                  </div>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;






// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Modal, Form, Button, Alert, Spinner, Row, Col } from "react-bootstrap";
// import { FaUser, FaEye, FaEyeSlash, FaLock, FaArrowLeft } from "react-icons/fa";
// import { loginAndFetchUser, forgotPassword, clearError, clearForgotPasswordState } from "../../redux/slice/LoginSlice";
// import { useNavigate } from "react-router-dom";
// import "./LoginModal.css";
// import LoginImage from "../../assets/icons/HeaderLogo.svg";

// const LoginModal = ({ show, onHide }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading, error, } = useSelector((state) => state.auth);
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [formErrors, setFormErrors] = useState({});
//   const [isForgetPassword, setIsForgetPassword] = useState(false);

//   const handleCloseModal = () => {
//     onHide();
//     setFormData({ email: "", password: "" });
//     setFormErrors({});
//     setShowPassword(false);
//     setIsForgetPassword(false);
//     dispatch(clearError());
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (formErrors[name]) {
//       setFormErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   const validateForm = () => {
//     const errors = {};
//     if (!formData.email) {
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = "Email is invalid";
//     }
    
//     // Only validate password if not in forget password mode
//     if (!isForgetPassword && !formData.password) {
//       errors.password = "Password is required";
//     }
    
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) {
//       return;
//     }

//     if (isForgetPassword) {
//       // Handle forgot password logic here
//       try {
//         // You can dispatch a forgot password action here
//         // await dispatch(forgotPassword({ email: formData.email })).unwrap();
//         console.log("Forgot password request for:", formData.email);
//         // For now, just show success message or handle as needed
//         alert("Password reset link sent to your email!");
//         handleCloseModal();
//       } catch (error) {
//         console.error("Forgot password failed:", error);
//       }
//     } else {
//       // Handle login logic
//       try {
//         await dispatch(loginAndFetchUser(formData)).unwrap();
//         handleCloseModal();
//         navigate("/donation-dashboard");
//       } catch (error) {
//         console.error("Login failed:", error);
//       }
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleForgetPassword = () => {
//     setIsForgetPassword(!isForgetPassword);
//     setFormErrors({});
//     setFormData({ email: formData.email, password: "" }); // Keep email, clear password
//     dispatch(clearError());
//   };

//   return (
//     <Modal show={show} onHide={handleCloseModal} centered size="lg" className="login-modal-custom">
//       <Modal.Body className="p-0">
//         <Row className="g-0 h-100">
//           <Col md={6} className="login-image-section">
//             <div className="login-image-container">
//               <img
//                 src={LoginImage}
//                 alt="Login"
//                 className="login-image"
//                 onError={(e) => {
//                   e.target.style.display = "none";
//                   e.target.parentElement.innerHTML = `
//                     <div class="login-image-fallback">
//                       <div class="fallback-icon">
//                         <i class="fas fa-user-circle"></i>
//                       </div>
//                       <h4>${isForgetPassword ? 'Reset Password' : 'Welcome Back!'}</h4>
//                       <p>${isForgetPassword ? 'Enter your email to reset your password' : 'Sign in to continue your journey with us'}</p>
//                     </div>
//                   `;
//                 }}
//               />
//             </div>
//           </Col>
//           <Col md={6} className="login-form-section">
//             <div className="login-form-container">
//               <div className="d-flex">
//               <button
//                 type="button"
//                 className="btn-close custom-close-btn mt-4"
//                 aria-label="Close"
//                 onClick={handleCloseModal}
//               ></button>
//                   {isForgetPassword && (
//                 <div className="mb-5">
//                   <Button 
//                     variant="link" 
//                     className="back-to-login-btn p-0 text-start text-dark text-decoration-none"
//                     onClick={toggleForgetPassword}
//                   >
//                     <FaArrowLeft className="me-2" />
//                     Back to Login
//                   </Button>
//                 </div>
//               )}

//               {error && (
//                 <Alert variant="danger" className="mb-3 custom-alert">
//                   {typeof error === "string" ? error : "An error occurred"}
//                 </Alert>
//               )}
//               </div>
//               <div className="login-header">
//                 <div className="login-icon">
//                   {isForgetPassword ? <FaLock /> : <FaUser />}
//                 </div>
//                 <h3 className="login-title">
//                   {isForgetPassword ? "Forgot Password" : "Login"}
//                 </h3>
//                 <p className="login-subtitle">
//                   {isForgetPassword 
//                     ? "Enter your email address to receive a password reset link" 
//                     : "Enter your credentials to access your account"
//                   }
//                 </p>
//               </div>

          

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

//                 {/* Conditionally render password field only for login */}
//                 {!isForgetPassword && (
//                   <Form.Group className="mb-4">
//                     <Form.Label className="form-label-custom">Password</Form.Label>
//                     <div className="password-input-wrapper">
//                       <Form.Control
//                         type={showPassword ? "text" : "password"}
//                         name="password"
//                         placeholder="Enter your password"
//                         value={formData.password}
//                         onChange={handleInputChange}
//                         isInvalid={!!formErrors.password}
//                         disabled={loading}
//                         className="form-control-custom password-input"
//                       />
//                       <Button
//                         variant="link"
//                         className="password-toggle-btn"
//                         onClick={togglePasswordVisibility}
//                         disabled={loading}
//                         type="button"
//                       >
//                         {showPassword ? <FaEyeSlash /> : <FaEye />}
//                       </Button>
//                     </div>
//                     <Form.Control.Feedback type="invalid">
//                       {formErrors.password}
//                     </Form.Control.Feedback>
//                   </Form.Group>
//                 )}

//                 <div className="d-grid mb-3">
//                   <Button 
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
//                         {isForgetPassword ? "Sending..." : "Signing in..."}
//                       </>
//                     ) : (
//                       isForgetPassword ? "Send Reset Link" : "Login"
//                     )}
//                   </Button>
//                 </div>

//                 {/* Conditionally render forgot password link only for login mode */}
//                 {!isForgetPassword && (
//                   <div className="login-footer">
//                     <p className="forgot-password">
//                       <a 
//                         href="#" 
//                         className="forgot-link"
//                         onClick={(e) => {
//                           e.preventDefault();
//                           toggleForgetPassword();
//                         }}
//                       >
//                         Forgot your password?
//                       </a>
//                     </p>
//                   </div>
//                 )}
//               </Form>
//             </div>
//           </Col>
//         </Row>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default LoginModal;
