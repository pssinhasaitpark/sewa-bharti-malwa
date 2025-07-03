import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Badge } from 'react-bootstrap';
import './MemoriesSlider.css'; // Assuming you have a CSS file for custom styles

const ImageCarousel = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mistralaichatupprodswe.blob.core.windows.net/chat-images/34/98/ad/3498ad43-0a44-4bba-9f62-aca0eee5184a/5d08a88c-4532-4385-a47f-0533d6a5d614/33ec06da-900a-451d-9669-6935b68ef130?sv=2025-01-05&st=2025-07-03T13%3A20%3A30Z&se=2025-07-03T14%3A20%3A30Z&sr=b&sp=rade&sig=dZ4Yf89X%2BzPeFl%2BmK3SzJeIFZv8vDqrZlp2GEBBBen8%3D"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://example.com/path-to-your-second-image.jpg" // Replace with your image URL
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://example.com/path-to-your-third-image.jpg" // Replace with your image URL
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
        <Badge pill bg="warning" text="dark" style={{ fontSize: '1.5rem', padding: '10px 20px' }}>
          25+ YEARS Completed
        </Badge>
      </div>
    </div>
  );
};

export default ImageCarousel;
