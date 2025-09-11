import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaArrowRight, FaHistory, FaEye } from 'react-icons/fa';
import './UpcomingProject.css';

const upcomingProject = () => {
  const upcomingProjects = [
    {
      id: 1,
      title: "Winter Clothing Drive 2023",
      description: "Distributed warm clothing and blankets to underprivileged families across the Malwa region during the winter season.",
      location: "Malwa Region, Punjab",
      beneficiaries: "3,500+ families",
      startDate: "October 2023",
      endDate: "January 2024",
      impact: "Reduced winter-related illnesses by 18% in target areas",
      image: "https://images.unsplash.com/photo-1491172700640-4f1dfbb3d7f3?w=400&h=250&fit=crop",
      category: "Relief & Welfare"
    },
    {
      id: 2,
      title: "Village Sanitation Program",
      description: "Implemented sanitation facilities and awareness programs in 15 villages, resulting in improved hygiene and reduced disease.",
      location: "Multiple Villages",
      beneficiaries: "8,000+ people",
      startDate: "April 2023",
      endDate: "November 2023",
      impact: "Improved sanitation coverage by 65%",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=250&fit=crop",
      category: "Health & Sanitation"
    },
    {
      id: 3,
      title: "Scholarship Support Program",
      description: "Provided scholarships and study materials to meritorious students from low-income families to continue higher education.",
      location: "Punjab",
      beneficiaries: "500+ students",
      startDate: "June 2022",
      endDate: "May 2023",
      impact: "90% of beneficiaries continued education successfully",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&h=250&fit=crop",
      category: "Education"
    }
  ];

  const highlights = [
    {
      id: 1,
      title: "Community Impact Report 2023",
      excerpt: "A comprehensive overview of our community initiatives and the measurable impact created in 2023.",
      date: "December 30, 2023",
      views: 1880,
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Volunteer Stories: Making a Difference",
      excerpt: "Heartwarming stories from our dedicated volunteers who worked tirelessly across projects.",
      date: "November 20, 2023",
      views: 1422,
      image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Award for Social Service Excellence",
      excerpt: "Sewa Bharti Malwa received regional recognition for outstanding contribution to community service.",
      date: "October 10, 2023",
      views: 980,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=200&fit=crop"
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      "Relief & Welfare": "warning",
      "Health & Sanitation": "primary",
      "Education": "success"
    };
    return colors[category] || "secondary";
  };

  return (
    <div className="upcoming-project-page">
      <div className="hero-section upcoming-hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="hero-title">upcoming Projects</h1>
              <p className="hero-subtitle">
                A showcase of our completed initiatives and the lasting impact created through collective effort and compassion.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="projects-section">
        <Row>
          <Col lg={8}>
            <div className="section-header">
              <h2 className="section-title">Completed Initiatives</h2>
              <p className="section-subtitle">Highlights of our work and its outcomes</p>
            </div>

            <div className="projects-grid">
              {upcomingProjects.map((project) => (
                <Card key={project.id} className="project-card">
                  <div className="card-image-container">
                    <Card.Img variant="top" src={project.image} className="project-image" />
                    <Badge bg={getCategoryColor(project.category)} className="category-badge">
                      {project.category}
                    </Badge>
                    <Badge bg="secondary" className="status-badge">
                      <FaHistory style={{ marginRight: 6 }} /> Completed
                    </Badge>
                  </div>

                  <Card.Body className="project-body">
                    <Card.Title className="project-title">{project.title}</Card.Title>
                    <Card.Text className="project-description">{project.description}</Card.Text>

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
                        <span>{project.startDate} - {project.endDate}</span>
                      </div>
                    </div>

                    <div className="impact-banner">
                      <span className="impact-label">Impact</span>
                      <span className="impact-text">{project.impact}</span>
                    </div>

                    <Button variant="outline-dark" className="learn-more-btn">
                      Read Case Study <FaArrowRight className="btn-icon" />
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
                  <FaHistory className="title-icon" />
                  Project Highlights
                </h3>
              </div>

              <div className="news-list">
                {highlights.map((item) => (
                  <Card key={item.id} className="news-card">
                    <div className="news-image-container">
                      <Card.Img src={item.image} className="news-image" />
                    </div>
                    <Card.Body className="news-body">
                      <Card.Title className="news-title">{item.title}</Card.Title>
                      <Card.Text className="news-excerpt">{item.excerpt}</Card.Text>
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
                View Archive <FaArrowRight className="btn-icon" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default upcomingProject;

