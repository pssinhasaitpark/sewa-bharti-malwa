import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderLogo from "../../assets/icons/HeaderLogo.svg";
import { BiHome } from "react-icons/bi";
import { FaChevronDown, FaBars, FaTimes, FaUser } from "react-icons/fa";
import { logout, fetchUserData } from "../../redux/slice/LoginSlice";
import LoginModal from "../../components/LoginModal/LoginModal";
import "./Header.css";

const Header = ({ blogSliderRef, partnersRef }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("Authorization");
    if (storedToken && !user) {
      dispatch(fetchUserData());
    }
  }, [dispatch, user]);

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

  return (
    <>
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
                    Upcoming Projects
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
              <div className="action-buttons-wrapper">
                {user || token ? (
                  <NavDropdown
                    title={
                      <span className="user-dropdown-title">
                        <FaUser className="user-icon" />
                        <span className="user-name">
                          {getUserDisplayName()}
                        </span>
                      </span>
                    }
                    id="user-dropdown"
                    className="user-dropdown-custom"
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
                    className="login-button"
                    onClick={handleLoginClick}
                  >
                    <FaUser className="user-icon" />
                    <span className="button-text">Login</span>
                  </Button>
                )}
                <Button
                  variant="warning"
                  className="action-button donate-button"
                  onClick={handleDonateNowClick}
                >
                  <span className="button-text">Donate Now</span>
                </Button>
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
