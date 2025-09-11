// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import HeaderLogo from "../../assets/icons/HeaderLogo.svg";
// import { BiHome } from "react-icons/bi";
// import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
// import "./Header.css";

// const Header = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleDonateNowClick = () => {
//     navigate("/donation");
//     setIsMenuOpen(false);
//   };

//   const handleHomeClick = () => {
//     navigate("/");
//     setIsMenuOpen(false);
//   };

//   const handleNavClick = () => {
//     setIsMenuOpen(false);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <Navbar
//       variant="light"
//       expand="xl"
//       expanded={isMenuOpen}
//       className="bg-white shadow-sm position-sticky top-0 custom-navbar"
//       style={{
//         borderTop: "4px solid #FF5733",
//         zIndex: 1000,
//         minHeight: "70px",
//       }}
//     >
//       <Container fluid className="px-2 px-sm-3 px-md-4 px-lg-5">
//         {/* Brand Logo */}
//         <Navbar.Brand
//           href="#home"
//           className="me-auto d-flex align-items-center"
//           onClick={handleHomeClick}
//         >
//           <img
//             src={HeaderLogo}
//             alt="Header Logo"
//             className="header-logo"
//           />
//         </Navbar.Brand>

//         {/* Custom Mobile Toggle Button */}
//         <button
//           className="navbar-toggler custom-toggler d-xl-none"
//           type="button"
//           onClick={toggleMenu}
//           aria-controls="basic-navbar-nav"
//           aria-expanded={isMenuOpen}
//           aria-label="Toggle navigation"
//         >
//           {isMenuOpen ? (
//             <FaTimes className="toggler-icon" />
//           ) : (
//             <FaBars className="toggler-icon" />
//           )}
//         </button>

//         {/* Collapsible Content */}
//         <Navbar.Collapse id="basic-navbar-nav" className="custom-collapse">
//           <div className="navbar-content-wrapper">
//             {/* Navigation Links */}
//             <Nav className="navbar-nav-custom">
//               <Nav.Link
//                 href="/#home"
//                 className="nav-link-custom"
//                 onClick={handleNavClick}
//               >
//                 Home
//               </Nav.Link>
//               <Nav.Link
//                 href="#about"
//                 className="nav-link-custom"
//                 onClick={handleNavClick}
//               >
//                 About
//               </Nav.Link>
//               <NavDropdown
//                 title={
//                   <span className="dropdown-title">
//                     Projects <FaChevronDown className="dropdown-arrow" />
//                   </span>
//                 }
//                 id="projects-dropdown"
//                 className="nav-dropdown-custom"
//               >
//                 <NavDropdown.Item
//                   onClick={() => {
//                     navigate("/current-projects");
//                     setIsMenuOpen(false);
//                   }}
//                 >
//                   Current Projects
//                 </NavDropdown.Item>
//                 <NavDropdown.Item
//                   onClick={() => {
//                     navigate("/past-projects");
//                     setIsMenuOpen(false);
//                   }}
//                 >
//                   Past Projects
//                 </NavDropdown.Item>
//               </NavDropdown>
//               <Nav.Link
//                 href="#warriors"
//                 className="nav-link-custom"
//                 onClick={handleNavClick}
//               >
//                 Our Warriors
//               </Nav.Link>
//               <NavDropdown
//                 title={
//                   <span className="dropdown-title">
//                     Join Hands <FaChevronDown className="dropdown-arrow" />
//                   </span>
//                 }
//                 id="join-hands-dropdown"
//                 className="nav-dropdown-custom"
//               >
//                 <NavDropdown.Item href="#join1" onClick={handleNavClick}>
//                   Join 1
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#join2" onClick={handleNavClick}>
//                   Join 2
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#join3" onClick={handleNavClick}>
//                   Join 3
//                 </NavDropdown.Item>
//               </NavDropdown>
//               <Nav.Link
//                 href="#gallery"
//                 className="nav-link-custom"
//                 onClick={handleNavClick}
//               >
//                 Gallery
//               </Nav.Link>
//               <Nav.Link
//                 href="#blog"
//                 className="nav-link-custom"
//                 onClick={handleNavClick}
//               >
//                 Blog / News
//               </Nav.Link>
//               <Nav.Link
//                 href="#partners"
//                 className="nav-link-custom"
//                 onClick={handleNavClick}
//               >
//                 Partners
//               </Nav.Link>
//               <Nav.Link
//                 href="#contact"
//                 className="nav-link-custom"
//                 onClick={handleNavClick}
//               >
//                 Contact
//               </Nav.Link>
//             </Nav>

//             {/* Action Button */}
//             <div className="action-button-wrapper">
//               {location.pathname === "/donation" ? (
//                 <Button
//                   variant="warning"
//                   className="action-button home-button"
//                   onClick={handleHomeClick}
//                 >
//                   <BiHome className="button-icon" />
//                   <span className="button-text">Home</span>
//                 </Button>
//               ) : (
//                 <Button
//                   variant="warning"
//                   className="action-button donate-button"
//                   onClick={handleDonateNowClick}
//                 >
//                   <span className="button-text">Donate Now</span>
//                 </Button>
//               )}
//             </div>
//           </div>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderLogo from "../../assets/icons/HeaderLogo.svg";
import { BiHome } from "react-icons/bi";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = ({ blogSliderRef }) => {
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
                to="/#about"
                className="nav-link-custom"
                onClick={(e) => handleNavClick(e, "about")}
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
                  to="/past-projects"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Past Projects
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={Link}
                to="/#warriors"
                className="nav-link-custom"
                onClick={(e) => handleNavClick(e, "warriors")}
              >
                Our Warriors
              </Nav.Link>
              <NavDropdown
                title={
                  <span className="dropdown-title">
                    Join Hands <FaChevronDown className="dropdown-arrow" />
                  </span>
                }
                id="join-hands-dropdown"
                className="nav-dropdown-custom"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/#join1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join 1
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/#join2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join 2
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/#join3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join 3
                </NavDropdown.Item>
              </NavDropdown>
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
                to="/#contact"
                className="nav-link-custom"
                onClick={(e) => handleNavClick(e, "contact")}
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
