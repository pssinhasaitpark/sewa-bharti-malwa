import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderLogo from "../../assets/icons/HeaderLogo.svg";
import { BiHome } from "react-icons/bi";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = ({ blogSliderRef, partnersRef }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDonateNowClick = () => {
    navigate("/donation");
    setIsMenuOpen(false);
  };

  const handleHomeClick = () => {
    navigate("/");
    setIsMenuOpen(false);
  };

  const handleNavClick = async (e, target) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (target === "blog") {
      // If not on the home page, navigate to home first
      if (location.pathname !== "/") {
        await navigate("/");
      }
      // Scroll to the BlogSlider section after a small delay
      setTimeout(() => {
        if (blogSliderRef?.current) {
          blogSliderRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }

    if (target === "partners") {
      // If not on the home page, navigate to home first
      if (location.pathname !== "/") {
        await navigate("/");
      }
      // Scroll to the Partners section after a small delay
      setTimeout(() => {
        if (partnersRef?.current) {
          partnersRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar
      variant="light"
      expand="xl"
      expanded={isMenuOpen}
      className="bg-white shadow-sm position-sticky top-0 custom-navbar"
      style={{
        borderTop: "4px solid #FF5733",
        zIndex: 1000,
        minHeight: "70px",
      }}
    >
      <Container fluid className="px-2 px-sm-3 px-md-4 px-lg-5">
        <Navbar.Brand
          as={Link}
          to="/"
          className="me-auto d-flex align-items-center"
          onClick={handleHomeClick}
        >
          <img src={HeaderLogo} alt="Header Logo" className="header-logo" />
        </Navbar.Brand>
        <button
          className="navbar-toggler custom-toggler d-xl-none"
          type="button"
          onClick={toggleMenu}
          aria-controls="basic-navbar-nav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? (
            <FaTimes className="toggler-icon" />
          ) : (
            <FaBars className="toggler-icon" />
          )}
        </button>
        <Navbar.Collapse id="basic-navbar-nav" className="custom-collapse">
          <div className="navbar-content-wrapper">
            <Nav className="navbar-nav-custom">
              <Nav.Link
                as={Link}
                to="/"
                className="nav-link-custom"
                onClick={handleHomeClick}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/aboutus"
                className="nav-link-custom"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Nav.Link>
              <NavDropdown
                title={
                  <span className="dropdown-title">
                    Projects <FaChevronDown className="dropdown-arrow" />
                  </span>
                }
                id="projects-dropdown"
                className="nav-dropdown-custom"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/current-projects"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Current Projects
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/upcoming-projects"
                  onClick={() => setIsMenuOpen(false)}
                >
                  upcoming Projects
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={Link}
                to="/our-warriors"
                className="nav-link-custom"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Warriors
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/joinus"
                className="nav-link-custom"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Hands
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/gallery"
                className="nav-link-custom"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/#blog"
                className="nav-link-custom"
                onClick={(e) => handleNavClick(e, "blog")}
              >
                Blog / News
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/#partners"
                className="nav-link-custom"
                onClick={(e) => handleNavClick(e, "partners")}
              >
                Partners
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                className="nav-link-custom"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Nav.Link>
            </Nav>
            <div className="action-button-wrapper">
              {location.pathname === "/donation" ? (
                <Button
                  variant="warning"
                  className="action-button home-button"
                  onClick={handleHomeClick}
                >
                  <BiHome className="button-icon" />
                  <span className="button-text">Home</span>
                </Button>
              ) : (
                <Button
                  variant="warning"
                  className="action-button donate-button"
                  onClick={handleDonateNowClick}
                >
                  <span className="button-text">Donate Now</span>
                </Button>
              )}
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;





// import React, { useState } from "react";
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { Navbar, Nav, NavDropdown, Button, Container, Modal, Form, Alert, Spinner } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import HeaderLogo from "../../assets/icons/HeaderLogo.svg";
// import { BiHome } from "react-icons/bi";
// import { FaChevronDown, FaBars, FaTimes, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
// import { loginUser, logout } from "../../redux/slice/LoginSlice";
// import "./Header.css";

// const Header = ({ blogSliderRef, partnersRef }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const dispatch = useDispatch();

//   // Redux state
//   const { user, loading, error } = useSelector((state) => state.auth);

//   // Component state
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [formErrors, setFormErrors] = useState({});

//   const handleDonateNowClick = () => {
//     navigate("/donation");
//     setIsMenuOpen(false);
//   };

//   const handleHomeClick = () => {
//     navigate("/");
//     setIsMenuOpen(false);
//   };

//   const handleNavClick = async (e, target) => {
//     e.preventDefault();
//     setIsMenuOpen(false);
//     if (target === "blog") {
//       if (location.pathname !== "/") {
//         await navigate("/");
//       }
//       setTimeout(() => {
//         if (blogSliderRef?.current) {
//           blogSliderRef.current.scrollIntoView({ behavior: "smooth" });
//         }
//       }, 300);
//     }
//     if (target === "partners") {
//       if (location.pathname !== "/") {
//         await navigate("/");
//       }
//       setTimeout(() => {
//         if (partnersRef?.current) {
//           partnersRef.current.scrollIntoView({ behavior: "smooth" });
//         }
//       }, 300);
//     }
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleLoginClick = () => {
//     setShowLoginModal(true);
//     setIsMenuOpen(false);
//   };

//   const handleCloseModal = () => {
//     setShowLoginModal(false);
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

//   const handleLogout = () => {
//     dispatch(logout());
//     setIsMenuOpen(false);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <>
//       <Navbar
//         variant="light"
//         expand="xl"
//         expanded={isMenuOpen}
//         className="bg-white shadow-sm position-sticky top-0 custom-navbar"
//         style={{
//           borderTop: "4px solid #FF5733",
//           zIndex: 1000,
//           minHeight: "70px",
//         }}
//       >
//         <Container fluid className="px-2 px-sm-3 px-md-4 px-lg-5">
//           <Navbar.Brand
//             as={Link}
//             to="/"
//             className="me-auto d-flex align-items-center"
//             onClick={handleHomeClick}
//           >
//             <img src={HeaderLogo} alt="Header Logo" className="header-logo" />
//           </Navbar.Brand>

//           <button
//             className="navbar-toggler custom-toggler d-xl-none"
//             type="button"
//             onClick={toggleMenu}
//             aria-controls="basic-navbar-nav"
//             aria-expanded={isMenuOpen}
//             aria-label="Toggle navigation"
//           >
//             {isMenuOpen ? (
//               <FaTimes className="toggler-icon" />
//             ) : (
//               <FaBars className="toggler-icon" />
//             )}
//           </button>

//           <Navbar.Collapse id="basic-navbar-nav" className="custom-collapse">
//             <div className="navbar-content-wrapper">
//               <Nav className="navbar-nav-custom">
//                 <Nav.Link
//                   as={Link}
//                   to="/"
//                   className="nav-link-custom"
//                   onClick={handleHomeClick}
//                 >
//                   Home
//                 </Nav.Link>
//                 <Nav.Link
//                   as={Link}
//                   to="/aboutus"
//                   className="nav-link-custom"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   About
//                 </Nav.Link>
//                 <NavDropdown
//                   title={
//                     <span className="dropdown-title">
//                       Projects <FaChevronDown className="dropdown-arrow" />
//                     </span>
//                   }
//                   id="projects-dropdown"
//                   className="nav-dropdown-custom"
//                 >
//                   <NavDropdown.Item
//                     as={Link}
//                     to="/current-projects"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Current Projects
//                   </NavDropdown.Item>
//                   <NavDropdown.Item
//                     as={Link}
//                     to="/upcoming-projects"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Upcoming Projects
//                   </NavDropdown.Item>
//                 </NavDropdown>
//                 <Nav.Link
//                   as={Link}
//                   to="/our-warriors"
//                   className="nav-link-custom"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Our Warriors
//                 </Nav.Link>
//                 <NavDropdown
//                   title={
//                     <span className="dropdown-title">
//                       Join Hands <FaChevronDown className="dropdown-arrow" />
//                     </span>
//                   }
//                   id="join-hands-dropdown"
//                   className="nav-dropdown-custom"
//                 >
//                   <NavDropdown.Item
//                     as={Link}
//                     to="/#join1"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Join 1
//                   </NavDropdown.Item>
//                   <NavDropdown.Item
//                     as={Link}
//                     to="/#join2"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Join 2
//                   </NavDropdown.Item>
//                   <NavDropdown.Item
//                     as={Link}
//                     to="/#join3"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Join 3
//                   </NavDropdown.Item>
//                 </NavDropdown>
//                 <Nav.Link
//                   as={Link}
//                   to="/gallery"
//                   className="nav-link-custom"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Gallery
//                 </Nav.Link>
//                 <Nav.Link
//                   as={Link}
//                   to="/#blog"
//                   className="nav-link-custom"
//                   onClick={(e) => handleNavClick(e, "blog")}
//                 >
//                   Blog / News
//                 </Nav.Link>
//                 <Nav.Link
//                   as={Link}
//                   to="/#partners"
//                   className="nav-link-custom"
//                   onClick={(e) => handleNavClick(e, "partners")}
//                 >
//                   Partners
//                 </Nav.Link>
//                 <Nav.Link
//                   as={Link}
//                   to="/#contact"
//                   className="nav-link-custom"
//                   onClick={(e) => handleNavClick(e, "contact")}
//                 >
//                   Contact
//                 </Nav.Link>
//               </Nav>

//               <div className="action-buttons-wrapper">
//                 {/* User/Login Button */}
//                 {user ? (
//                   <NavDropdown
//                     title={
//                       <span className="user-dropdown-title">
//                         <FaUser className="user-icon" />
//                         <span className="user-name">{user.name || 'User'}</span>
//                       </span>
//                     }
//                     id="user-dropdown"
//                     className="user-dropdown-custom"
//                   >
//                     <NavDropdown.Item onClick={handleLogout}>
//                       Logout
//                     </NavDropdown.Item>
//                   </NavDropdown>
//                 ) : (
//                   <Button
//                     variant="outline-primary"
//                     className="login-button"
//                     onClick={handleLoginClick}
//                   >
//                     <FaUser className="user-icon" />
//                     <span className="button-text">Login</span>
//                   </Button>
//                 )}

//                 {/* Always show Donate Now button */}
//                 <Button
//                   variant="warning"
//                   className="action-button donate-button"
//                   onClick={handleDonateNowClick}
//                 >
//                   <span className="button-text">Donate Now</span>
//                 </Button>
//               </div>
//             </div>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Login Modal */}
//       <Modal
//         show={showLoginModal}
//         onHide={handleCloseModal}
//         centered
//         className="login-modal"
//       >
//         <Modal.Header closeButton className="login-modal-header">
//           <Modal.Title className="login-modal-title">
//             <FaUser className="me-2" />
//             Login to Your Account
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="login-modal-body">
//           {error && (
//             <Alert variant="danger" className="mb-3">
//               {typeof error === 'string' ? error : 'An error occurred during login'}
//             </Alert>
//           )}

//           <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3">
//               <Form.Label>Email Address</Form.Label>
//               <Form.Control
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 isInvalid={!!formErrors.email}
//                 disabled={loading}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.email}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Password</Form.Label>
//               <div className="password-input-wrapper">
//                 <Form.Control
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   placeholder="Enter your password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   isInvalid={!!formErrors.password}
//                   disabled={loading}
//                   className="password-input"
//                 />
//                 <Button
//                   variant="link"
//                   className="password-toggle-btn"
//                   onClick={togglePasswordVisibility}
//                   disabled={loading}
//                   type="button"
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </Button>
//               </div>
//               <Form.Control.Feedback type="invalid">
//                 {formErrors.password}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <div className="d-grid">
//               <Button
//                 variant="primary"
//                 size="lg"
//                 type="submit"
//                 disabled={loading}
//                 className="login-submit-btn"
//               >
//                 {loading ? (
//                   <>
//                     <Spinner
//                       as="span"
//                       animation="border"
//                       size="sm"
//                       role="status"
//                       aria-hidden="true"
//                       className="me-2"
//                     />
//                     Logging in...
//                   </>
//                 ) : (
//                   'Login'
//                 )}
//               </Button>
//             </div>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// };

// export default Header;
