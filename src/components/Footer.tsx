import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
          </Col>
          <Col md={4}>
            <h3>Address</h3>
            <p>123 Main Street</p>
            <p>City, Country</p>
          </Col>
          <Col md={4}>
            <h3>Follow Us</h3>
            <p>Facebook | Twitter | Instagram</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
