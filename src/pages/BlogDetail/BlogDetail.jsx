import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  BlogImg1,
  BlogImg2,
  BlogImg3,
  BlogImg4,
  BlogImg5,
  BlogImg6,
} from "../../assets/index";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Every Life Deserves Dignity",
      author: "Sumit Sir",
      date: "05 June 2025",
      image: BlogImg1,
      description:
        "Insights and stories about serving humanity with compassion and dignity.",
      content: `
        <p>Every life is precious and deserves to be treated with dignity and respect. At our organization, we believe in uplifting every individual, regardless of their background or circumstances. Our mission is to ensure that no one is left behind and that everyone has access to basic necessities and opportunities to thrive.</p>
        <p>Through our various initiatives, we have touched the lives of thousands, providing them with hope and a brighter future. From education to healthcare, we are committed to making a difference in the world.</p>
        <p>Join us in our journey to create a more compassionate and inclusive society. Together, we can make a difference!</p>
      `,
    },
    {
      id: 2,
      title: "Serving Humanity With Compassion",
      author: "Sumit Sir",
      date: "05 June 2025",
      image: BlogImg2,
      description:
        "Exploring ways to make a positive impact in our communities through service.",
      content: `
        <p>Compassion is at the heart of everything we do. We believe that serving humanity is not just a duty, but a privilege. Our volunteers work tirelessly to bring smiles to the faces of those in need, whether it's through providing meals, organizing health camps, or offering educational support.</p>
        <p>We are always looking for new ways to make a positive impact in our communities. If you have an idea or want to contribute, we'd love to hear from you!</p>
      `,
    },
    {
      id: 3,
      title: "Empowering Futures Through Education",
      author: "Sumit Sir",
      date: "05 June 2025",
      image: BlogImg3,
      description: "",
      content: `
        <p>Education is the key to unlocking a brighter future. We are dedicated to empowering individuals through quality education, equipping them with the skills and knowledge they need to succeed in life.</p>
        <p>Our programs focus on providing access to education for underprivileged children, as well as vocational training for adults. We believe that education is a powerful tool for breaking the cycle of poverty and creating opportunities for all.</p>
      `,
    },
    {
      id: 4,
      title: "Building Stronger Communities",
      author: "Sumit Sir",
      date: "05 June 2025",
      image: BlogImg4,
      description: "",
      content: `
        <p>Strong communities are the foundation of a thriving society. We work to build and strengthen communities by fostering collaboration, providing resources, and promoting social cohesion.</p>
        <p>Our community development initiatives include infrastructure projects, skill development workshops, and awareness campaigns. We believe that by working together, we can create a better future for everyone.</p>
      `,
    },
    {
      id: 5,
      title: "Building Stronger Communities",
      author: "Sumit Sir",
      date: "05 June 2025",
      image: BlogImg5,
      description: "",
      content: `
        <p>Strong communities are the foundation of a thriving society. We work to build and strengthen communities by fostering collaboration, providing resources, and promoting social cohesion.</p>
        <p>Our community development initiatives include infrastructure projects, skill development workshops, and awareness campaigns. We believe that by working together, we can create a better future for everyone.</p>
      `,
    },
    {
      id: 6,
      title: "Building Stronger Communities",
      author: "Sumit Sir",
      date: "05 June 2025",
      image: BlogImg6,
      description: "",
      content: `
        <p>Strong communities are the foundation of a thriving society. We work to build and strengthen communities by fostering collaboration, providing resources, and promoting social cohesion.</p>
        <p>Our community development initiatives include infrastructure projects, skill development workshops, and awareness campaigns. We believe that by working together, we can create a better future for everyone.</p>
      `,
    },
  ];

  const blog = blogPosts.find((post) => post.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <Container className="my-5">
      <Button variant="outline-secondary" onClick={() => navigate(-1)}>
        Back
      </Button>
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className="border-0 shadow-sm">
            <Card.Img
              variant="top"
              src={blog.image}
              className="rounded-top"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title className="display-6 fw-bold mb-3">
                {blog.title}
              </Card.Title>
              <Card.Subtitle className="text-muted mb-3">
                {blog.author} - {blog.date}
              </Card.Subtitle>
              <Card.Text dangerouslySetInnerHTML={{ __html: blog.content }} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogDetail;
