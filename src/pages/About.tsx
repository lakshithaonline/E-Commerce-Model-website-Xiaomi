import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

export function About() {
  return (
    <div className="about-page">
      <Container>
        <h1></h1>
        <Row>
          <Col md={6}>
            <h2>Our Story</h2>
            <p>
              At Xiaomi Flagship Store, our journey began with a passion for innovation and technology.
              We believe in providing our customers with the latest and best gadgets that make life smarter and more convenient.
              From cutting-edge smartphones to smart home devices, our goal is to bring the future to your hands today.
            </p>
          </Col>
          <Col md={6}>
            <h2>Contact Us</h2>
            <p>If you have any questions or inquiries, feel free to contact us:</p>
            <address>
              <strong>Xiaomi Flagship Store</strong><br />
              140/14, Galle<br />
              Sri Lanka, 80000<br />
              Email: example@gmail.com<br />
              Phone: +9412 456 7890
            </address>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h2>Contact Form</h2>
            <form className="contact-form">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" />
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
