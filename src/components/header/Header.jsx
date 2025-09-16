import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap";
import HeaderLogo from "../../assets/icons/HeaderLogo.svg";
import { BiHome } from "react-icons/bi";
import { FaChevronDown, FaBars, FaTimes, FaUser } from "react-icons/fa";
import { logout, fetchUserData } from "../../redux/slice/LoginSlice";
import LoginModal from "../../components/LoginModal/LoginModal";

const Header = ({ blogSliderRef, partnersRef }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("Authorization");
    if (storedToken && !user) {
      dispatch(fetchUserData());
    }
  }, [dispatch, user]);

  const handleHomeClick = () => {
    navigate("/");
    setIsMenuOpen(false);
  };

  const handleNavClick = async (e, target) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (target === "blog") {
      if (location.pathname !== "/") {
        await navigate("/");
      }
      setTimeout(() => {
        if (blogSliderRef?.current) {
          blogSliderRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
    if (target === "partners") {
      if (location.pathname !== "/") {
        await navigate("/");
      }
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

  const handleLoginClick = () => {
    setShowLoginModal(true);
    setIsMenuOpen(false);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    setIsMenuOpen(false);
  };

  const getUserDisplayName = () => {
    if (user?.full_name) {
      return user.full_name;
    }
    if (user?.name) {
      return user.name;
    }
    if (user?.email) {
      return user.email.split("@")[0];
    }
    return "User";
  };

  // Inject CSS to remove Bootstrap dropdown arrows
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .dropdown-toggle::after {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
    /* Remove Bootstrap dropdown arrows */
    .dropdown-toggle::after {
      display: none !important;
    }

    /* Hover for Nav.Link and NavDropdown.Item (excluding user dropdown toggle) */
    .nav-link:not(#user-dropdown-desktop > .dropdown-toggle):not(#user-dropdown-mobile > .dropdown-toggle):hover,
    .dropdown-item:hover {
      background-color: #fd7e14 !important;
      color: white !important;
      border-radius: 4px !important;
    }

    /* Selected/Active Nav.Link (excluding user dropdown toggle) */
    .nav-link:not(#user-dropdown-desktop > .dropdown-toggle):not(#user-dropdown-mobile > .dropdown-toggle).active,
    .nav-link:not(#user-dropdown-desktop > .dropdown-toggle):not(#user-dropdown-mobile > .dropdown-toggle):active {
      background-color: #fd7e14 !important;
      color: white !important;
      border-radius: 4px !important;
    }

    /* Dropdown items hover and selected */
    .dropdown-item:hover,
    .dropdown-item:active,
    .dropdown-item.active {
            background-color: #fd7e14 !important;
      color: white !important;
      border-radius: 4px !important;
    }

    /* User display name dropdown toggle: No hover/active effects */
    #user-dropdown-desktop > .dropdown-toggle,
    #user-dropdown-mobile > .dropdown-toggle {
      border-radius: 4px !important;
    }
    #user-dropdown-desktop > .dropdown-toggle:hover,
    #user-dropdown-mobile > .dropdown-toggle:hover,
    #user-dropdown-desktop > .dropdown-toggle:active,
    #user-dropdown-mobile > .dropdown-toggle:active {
      background-color: transparent !important;
      color: inherit !important;
    }
  `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <Navbar
        variant="light"
        expand="xl"
        expanded={isMenuOpen}
        className="bg-white shadow-sm position-sticky top-0"
        style={{
          borderTop: "4px solid #FF5733",
          zIndex: 1000,
          minHeight: "70px",
        }}
      >
        <Container fluid className="px-2 px-sm-3 px-md-4 px-lg-5">
          {/* Brand/Logo */}
          <Navbar.Brand
            as={Link}
            to="/"
            className="me-auto d-flex align-items-center"
            onClick={handleHomeClick}
          >
            <img
              src={HeaderLogo}
              alt="Header Logo"
              className="img-fluid"
              style={{
                height: "auto",
                width: "auto",
                maxHeight: "80px",
                maxWidth: "200px",
              }}
            />
          </Navbar.Brand>

          {/* Custom Toggle Button */}
          <Button
            variant="outline-danger"
            className="d-xl-none navbar-toggler border-2 p-2"
            onClick={toggleMenu}
            aria-controls="basic-navbar-nav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </Button>

          {/* Collapsible Content */}
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Mobile Layout */}
            <div className="w-100 d-xl-none">
              {/* Navigation Links - Mobile */}
              <Nav className="flex-column text-center mb-3">
                <Nav.Link
                  as={Link}
                  to="/"
                  className="fw-medium py-3 px-4 text-dark border-bottom border-light"
                  onClick={() => {
                    handleHomeClick();
                    scrollToTop();
                  }}
                >
                  Home
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/aboutus"
                  className="fw-medium py-3 px-4 text-dark border-bottom border-light"
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                >
                  About
                </Nav.Link>

                <NavDropdown
                  title={
                    <span className="fw-medium">
                      Projects <FaChevronDown size={12} className="ms-2" />
                    </span>
                  }
                  id="projects-dropdown-mobile"
                  className="text-center border-bottom border-light"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/current-projects"
                    className="text-dark fw-medium"
                    onClick={() => {
                      setIsMenuOpen(false);
                      scrollToTop();
                    }}
                  >
                    Current Projects
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/upcoming-projects"
                    className="text-dark fw-medium"
                    onClick={() => {
                      setIsMenuOpen(false);
                      scrollToTop();
                    }}
                  >
                    Upcoming Projects
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  as={Link}
                  to="/our-warriors"
                  className="fw-medium py-3 px-4 text-dark border-bottom border-light"
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                >
                  Our Warriors
                </Nav.Link>

                <NavDropdown
                  title={
                    <span className="fw-medium">
                      Join Hands <FaChevronDown size={12} className="ms-2" />
                    </span>
                  }
                  id="join-hands-dropdown-mobile"
                  className="text-center border-bottom border-light"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/#join1"
                    className="text-dark fw-medium"
                    onClick={() => {
                      setIsMenuOpen(false);
                      scrollToTop();
                    }}
                  >
                    Join 1
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/#join2"
                    className="text-dark fw-medium"
                    onClick={() => {
                      setIsMenuOpen(false);
                      scrollToTop();
                    }}
                  >
                    Join 2
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/#join3"
                    className="text-dark fw-medium"
                    onClick={() => {
                      setIsMenuOpen(false);
                      scrollToTop();
                    }}
                  >
                    Join 3
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  as={Link}
                  to="/gallery"
                  className="fw-medium py-3 px-4 text-dark border-bottom border-light"
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                >
                  Gallery
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/#blog"
                  className="fw-medium py-3 px-4 text-dark border-bottom border-light"
                  onClick={(e) => handleNavClick(e, "blog")}
                >
                  Blog / News
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/#partners"
                  className="fw-medium py-3 px-4 text-dark border-bottom border-light"
                  onClick={(e) => handleNavClick(e, "partners")}
                >
                  Partners
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/contact"
                  className="fw-medium py-3 px-4 text-dark"
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                >
                  Contact
                </Nav.Link>
              </Nav>

              {/* Action Buttons - Mobile */}
              <div className="d-flex flex-column align-items-center gap-2 ">
                {user || token ? (
                  <NavDropdown
                    title={
                      <span className="d-flex align-items-center gap-2 ">
                        <FaUser size={16} />
                        <span
                          className="text-truncate"
                          style={{ maxWidth: "120px" }}
                        >
                          {getUserDisplayName()}
                        </span>
                      </span>
                    }
                    id="user-dropdown-mobile"
                    className="text-center w-100 "
                 
                  >
                    <NavDropdown.Item as={Link} to="/donation-dashboard">
                      My Donations
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={handleLogout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Button
                    variant="outline-primary"
                    className="d-flex align-items-center gap-2 fw-medium px-4 py-2 w-100"
                    style={{ maxWidth: "200px" }}
                    onClick={handleLoginClick}
                  >
                    <FaUser size={16} />
                    Login
                  </Button>
                )}

                <Button
                  className="fw-bold px-4 py-2 w-100 text-white border-0"
                  style={{
                    backgroundColor: "#FF5733",
                    maxWidth: "200px",
                  }}
                  onClick={() => {
                    navigate("/donation");
                    scrollToTop();
                    setIsMenuOpen(false);
                  }}
                >
                  Donate Now
                </Button>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="w-100 d-none d-xl-flex align-items-center justify-content-between">
              {/* Navigation Links - Desktop */}
              <Nav className="mx-auto d-flex align-items-center gap-1">
                <Nav.Link
                  as={Link}
                  to="/"
                  className={`fw-medium px-3 py-2 text-dark rounded`}
                  onClick={() => {
                    handleHomeClick();
                    scrollToTop();
                  }}
                >
                  Home
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/aboutus"
                  className={`fw-medium px-3 py-2 text-dark rounded`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                >
                  About
                </Nav.Link>

                <NavDropdown
                  title={
                    <span className="d-flex align-items-center text-black gap-2">
                      Projects <FaChevronDown size={10} />
                    </span>
                  }
                  id="projects-dropdown-desktop"
                  className="fw-medium"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/current-projects"
                    className="text-dark fw-medium"
                    onClick={() => {
                      setIsMenuOpen(false);
                      scrollToTop();
                    }}
                  >
                    Current Projects
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/upcoming-projects"
                    className="text-dark fw-medium"
                    onClick={() => {
                      setIsMenuOpen(false);
                      scrollToTop();
                    }}
                  >
                    Upcoming Projects
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  as={Link}
                  to="/our-warriors"
                  className="fw-medium px-3 py-2 text-dark rounded"
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                >
                  Our Warriors
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/joinus"
                  className="fw-medium px-3 py-2 text-dark rounded"
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                >
                  Join Hands
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/gallery"
                  className="fw-medium px-3 py-2 text-dark rounded"
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                >
                  Gallery
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/#blog"
                  className="fw-medium px-3 py-2 text-dark rounded"
                  onClick={(e) => handleNavClick(e, "blog")}
                >
                  Blog / News
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/#partners"
                  className="fw-medium px-3 py-2 text-dark rounded"
                  onClick={(e) => handleNavClick(e, "partners")}
                >
                  Partners
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/contact"
                  className="fw-medium px-3 py-2 text-dark rounded"
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                >
                  Contact
                </Nav.Link>
              </Nav>

              {/* Action Buttons - Desktop */}
              <div className="d-flex align-items-center gap-2 ">
                <Button
                  size="sm"
                  className="fw-bold px-3 py-2 me-3 text-white border-0"
                  style={{ backgroundColor: "#FF5733" }}
                  onClick={() => {
                    navigate("/donation");
                    scrollToTop();
                    setIsMenuOpen(false);
                  }}
                >
                  Donate Now
                </Button>
                {user || token ? (
                  <NavDropdown
                    title={
                      <span className="d-flex align-items-center gap-2 text-success fw-medium border border-success rounded p-2 bg-white">
                        <FaUser size={14} />
                        <span className="text-truncate">
                          {getUserDisplayName()}
                        </span>
                      </span>
                    }
                    id="user-dropdown-desktop"
                  >
                    <NavDropdown.Item as={Link} to="/donation-dashboard">
                      My Donations
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={handleLogout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="d-flex align-items-center gap-2 fw-medium px-3 py-2"
                    onClick={handleLoginClick}
                  >
                    <FaUser size={14} />
                    Login
                  </Button>
                )}
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <LoginModal show={showLoginModal} onHide={handleCloseLoginModal} />
    </>
  );
};

export default Header;
