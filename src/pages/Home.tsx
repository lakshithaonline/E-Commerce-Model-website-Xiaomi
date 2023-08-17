import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import './Home.css'; 

export function Home() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const imageUrls = [
    'https://raw.githubusercontent.com/lakshithaonline/E-Commerce-Model-website-Xiaomi/main/Images/slide2.png',
    'https://raw.githubusercontent.com/lakshithaonline/E-Commerce-Model-website-Xiaomi/main/Images/slide3.png',
    'https://raw.githubusercontent.com/lakshithaonline/E-Commerce-Model-website-Xiaomi/874907f0deba5fedae16a08d77824d09662e1f51/Images/slide4.png',
    'https://raw.githubusercontent.com/lakshithaonline/E-Commerce-Model-website-Xiaomi/main/Images/slide1.jpg',
  ]; 

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedPhotoIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000); //slider

    return () => clearInterval(timer);
  }, [imageUrls]);

  return (
    <div className="home">
      <div className="hero">
        <Container>
          <Row>
            <Col md={6}>
              <h1>Welcome to the Xiaomi Flagship Store</h1>
              <p>Your One-Stop Destination for Xiaomi Gadgets and Accessories</p>
              <Button className="btn btn-primary">Explore Now</Button>
            </Col>
            <Col md={6}>
              <Carousel interval={3000} activeIndex={selectedPhotoIndex}>
                {imageUrls.map((imageUrl, index) => (
                  <Carousel.Item key={index}>
                    <img src={imageUrl} alt={`Slide ${index}`} />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
      
    </div>
  );
}
