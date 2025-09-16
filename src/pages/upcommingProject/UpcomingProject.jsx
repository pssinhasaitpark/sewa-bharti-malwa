import React from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaArrowRight,
  FaHistory,
  FaEye,
  FaClock,
  FaBullseye,
  FaHandsHelping,
} from "react-icons/fa";
import "./UpcomingProject.css";
import projectData from "../../utils/UpCommingProjects.json";
import {RightSlider2,LeftSlide3,event3,event2} from '../../assets/index'
const UpcomingProject = () => {
  const { upcomingProjects, highlights } = projectData;
const projectImages = {
  1: RightSlider2,
  
};
const projectImageupcoming = {
  1: LeftSlide3,
  2: event3,
  3: event2,
  
};
  const getCategoryColor = (category) => {
    const colors = {
      "Relief & Welfare": "warning",
      "Health & Sanitation": "primary",
      "Healthcare": "success",
      "Education": "info",
    };
    return colors[category] || "secondary";
  };

  const getStatusColor = (status) => {
    const colors = {
      upcoming: "primary",
      completed: "success",
      ongoing: "warning",
    };
    return colors[status] || "secondary";
  };

  const getStatusIcon = (status) => {
    const icons = {
      upcoming: FaClock,
      completed: FaHistory,
      ongoing: FaHandsHelping,
    };
    const IconComponent = icons[status] || FaClock;
    return <IconComponent style={{ marginRight: 6 }} />;
  };

  return (
    <div className="upcoming-project-page">
      <div className="">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="newTitle flagship">
                Upcoming <span className="upholding-dharma">Projects</span>
              </h1>
              <p className="hero-subtitle">
                Innovative healthcare initiatives designed to transform lives
                and bridge the healthcare gap in rural and tribal communities
                of Madhya Pradesh.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="projects-section">
        <Row>
          <Col lg={8}>
            <div className="section-header">
              <h2 className="section-title">Revolutionary Healthcare Initiative</h2>
              <p className="section-subtitle">
                Mobile Hospitals bringing comprehensive medical care to
                underserved communities
              </p>
            </div>

            <div className="projects-grid">
              {upcomingProjects.map((project) => (
                <Card key={project.id} className="project-card">
                  <div className="card-image-container">
                    <Card.Img
                      variant="top"
                        src={projectImages[project.id]}
                      className="project-image"
                    />
                    <Badge
                      bg={getCategoryColor(project.category)}
                      className="category-badge"
                    >
                      {project.category}
                    </Badge>
                    <Badge 
                      bg={getStatusColor(project.status)} 
                      className="status-badge"
                    >
                      {getStatusIcon(project.status)}
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </Badge>
                  </div>

                  <Card.Body className="project-body">
                    <Card.Title className="project-title">
                      {project.title}
                    </Card.Title>
                    <Card.Text className="project-description">
                      {project.description}
                    </Card.Text>

                    <div className="project-details">
                      <div className="detail-item">
                        <FaMapMarkerAlt className="detail-icon" />
                        <span>{project.location}</span>
                      </div>
                      <div className="detail-item">
                        <FaUsers className="detail-icon" />
                        <span>{project.beneficiaries}</span>
                      </div>
                      <div className="detail-item">
                        <FaCalendarAlt className="detail-icon" />
                        <span>
                          {project.startDate} - {project.endDate}
                        </span>
                      </div>
                    </div>

                    {project.keyFeatures && (
                      <div className="key-features">
                        <h6 className="features-title">
                          <FaBullseye className="features-icon" />
                          Key Features
                        </h6>
                        <ul className="features-list">
                          {project.keyFeatures.slice(0, 4).map((feature, index) => (
                            <li key={index} className="feature-item">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="impact-banner">
                      <span className="impact-label">Mission</span>
                      <span className="impact-text">{project.impact}</span>
                    </div>

                    <div className="project-alignment">
                      <small className="alignment-text">
                        <strong>Aligned with:</strong> {project.alignment}
                      </small>
                    </div>

                    <Button variant="outline-dark" className="learn-more-btn">
                      Learn More <FaArrowRight className="btn-icon" />
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>

          <Col lg={4}>
            <div className="news-sidebar">
              <div className="sidebar-header">
                <h3 className="sidebar-title">
                  <FaClock className="title-icon" />
                  Project Updates
                </h3>
              </div>

              <div className="news-list">
                {highlights.map((item) => (
                  <Card key={item.id} className="news-card">
                    <div className="news-image-container">
                            <Card.Img
        variant="top"
        src={projectImageupcoming[item.id]}
        className="news-image"
      />

                    </div>
                    <Card.Body className="news-body">
                      <Card.Title className="news-title">
                        {item.title}
                      </Card.Title>
                      <Card.Text className="news-excerpt">
                        {item.excerpt}
                      </Card.Text>
                      <div className="news-meta">
                        <div className="news-date">
                          <FaCalendarAlt className="meta-icon" />
                          {item.date}
                        </div>
                        <div className="news-views">
                          <FaEye className="meta-icon" />
                          {item.views} views
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </div>

              <Button variant="dark" className="view-all-news-btn">
                View All Updates <FaArrowRight className="btn-icon" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UpcomingProject;
