import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaArrowRight, FaNewspaper, FaEye } from 'react-icons/fa';
import './CurrentProject.css';

const CurrentProject = () => {
  const currentProjects = [
    {
      id: 1,
      title: "Clean Water Initiative",
      description: "Providing clean drinking water to remote villages in rural areas. This initiative focuses on installing water purification systems and creating sustainable water sources.",
      location: "Malwa Region, Punjab",
      beneficiaries: "5,000+ families",
      startDate: "January 2024",
      status: "Active",
      progress: 75,
      image: "https://images.unsplash.com/photo-1541644435734-4c5a8654ddf4?w=400&h=250&fit=crop",
      category: "Health & Sanitation"
    },
    {
      id: 2,
      title: "Education for All",
      description: "Building schools and providing quality education materials to underprivileged children. We aim to reduce the education gap and empower the next generation.",
      location: "Rural Punjab",
      beneficiaries: "2,500+ children",
      startDate: "March 2024",
      status: "Active",
      progress: 60,
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=250&fit=crop",
      category: "Education"
    },
    {
      id: 3,
      title: "Community Health Centers",
      description: "Establishing mobile health clinics and community health centers to provide accessible healthcare services to remote communities.",
      location: "Malwa Districts",
      beneficiaries: "10,000+ people",
      startDate: "February 2024",
      status: "Active",
      progress: 45,
      image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=400&h=250&fit=crop",
      category: "Healthcare"
    }
  ];

  const recentNews = [
    {
      id: 1,
      title: "Clean Water Initiative Reaches Milestone",
      excerpt: "We're proud to announce that our Clean Water Initiative has successfully provided clean drinking water to over 3,000 families in the Malwa region.",
      date: "December 15, 2024",
      views: 1250,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "New School Inauguration in Rural Punjab",
      excerpt: "Today marks a significant day as we inaugurated our 5th school under the Education for All project, bringing quality education closer to children.",
      date: "December 10, 2024",
      views: 987,
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Mobile Health Clinic Expands Services",
      excerpt: "Our mobile health clinic has expanded its services to include specialized care for women and children, serving 500+ patients monthly.",
      date: "December 5, 2024",
      views: 756,
      image: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      title: "Community Volunteers Training Program",
      excerpt: "Over 200 community volunteers completed our comprehensive training program, enhancing their skills to better serve their communities.",
      date: "November 28, 2024",
      views: 634,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=200&fit=crop"
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      "Health & Sanitation": "primary",
      "Education": "success",
      "Healthcare": "info"
    };
    return colors[category] || "secondary";
  };

  const getStatusColor = (status) => {
    return status === "Active" ? "success" : "warning";
  };

  return (
    <div className="current-project-page">
      {/* Hero Section */}
      <div className="hero-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="hero-title">Current Projects</h1>
              <p className="hero-subtitle">
                Discover our ongoing initiatives that are making a real difference in communities across the Malwa region.
                Together, we're building a brighter future for everyone.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Current Projects Section */}
      <Container className="projects-section">
        <Row>
          <Col lg={8}>
            <div className="section-header">
              <h2 className="section-title">Active Projects</h2>
              <p className="section-subtitle">Making an impact through dedicated community service</p>
            </div>

            <div className="projects-grid">
              {currentProjects.map((project) => (
                <Card key={project.id} className="project-card">
                  <div className="card-image-container">
                    <Card.Img variant="top" src={project.image} className="project-image" />
                    <Badge bg={getCategoryColor(project.category)} className="category-badge">
                      {project.category}
                    </Badge>
                    <Badge bg={getStatusColor(project.status)} className="status-badge">
                      {project.status}
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
                        <span>Started {project.startDate}</span>
                      </div>
                    </div>

                    <div className="progress-section">
                      <div className="progress-header">
                        <span className="progress-label">Progress</span>
                        <span className="progress-value">{project.progress}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <Button variant="outline-primary" className="learn-more-btn">
                      Learn More <FaArrowRight className="btn-icon" />
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>

          {/* News Sidebar */}
          <Col lg={4}>
            <div className="news-sidebar">
              <div className="sidebar-header">
                <h3 className="sidebar-title">
                  <FaNewspaper className="title-icon" />
                  Latest News & Updates
                </h3>
              </div>

              <div className="news-list">
                {recentNews.map((news) => (
                  <Card key={news.id} className="news-card">
                    <div className="news-image-container">
                      <Card.Img src={news.image} className="news-image" />
                    </div>
                    <Card.Body className="news-body">
                      <Card.Title className="news-title">{news.title}</Card.Title>
                      <Card.Text className="news-excerpt">{news.excerpt}</Card.Text>
                      <div className="news-meta">
                        <div className="news-date">
                          <FaCalendarAlt className="meta-icon" />
                          {news.date}
                        </div>
                        <div className="news-views">
                          <FaEye className="meta-icon" />
                          {news.views} views
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </div>

              <Button variant="primary" className="view-all-news-btn">
                View All News <FaArrowRight className="btn-icon" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CurrentProject;
