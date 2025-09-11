// src/pages/WarriorsPage/WarriorsPage.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const WarriorsPage = () => {
  return (
    <div className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <h1 className="text-center mb-5 fw-bold  flagship">
              Our Warriors : 
              <span className="upholding-dharma"> The Yashodas of Matruchhaya</span> 
            </h1>
            <Card className="mb-4 shadow-sm border-0">
              <Card.Body className="p-4">
                <Card.Text className="fs-5 lh-base text-dark mb-4">
                  Just as Shri Krishna was nurtured by Maa Yashoda, at Matruchhaya,
                  every caregiver is lovingly called a <strong>Yashoda</strong>.
                  These mothers shower the little Krishnas with boundless affection
                  and care. Visitors often mistake the children for their own,
                  because the attachment is so pure and natural.
                </Card.Text>
                <Card.Text className="fs-5 lh-base text-dark mb-4">
                  It is said that Krishna Himself has blessed them—the ability to
                  nurture so many Krishnas in one lifetime, a privilege not even
                  bestowed upon Maa Yashoda. Their dedication, devotion, and
                  unconditional love are truly divine.
                </Card.Text>
                <Card.Text className="fs-5 lh-base text-dark mb-4">
                  We consider ourselves blessed to have such Yashodas as the heart
                  of Matruchhaya. Their selfless service is the backbone of our
                  mission, and their love is the light that guides every child
                  toward a brighter future.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WarriorsPage;
