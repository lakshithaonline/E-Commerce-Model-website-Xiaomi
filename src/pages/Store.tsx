import { Col, Container, Row } from 'react-bootstrap';
import { StoreItem } from '../components/StoreItem';
import storeItems from '../data/items.json';
import './storeCSS.css';

export function Store() {
  return (
    <Container>
      <div className="store-header">
        <h1>Xiaomi Flagship Store</h1>
        <p>Welcome to our flagship store offering a wide range of Xiaomi products!</p>
      </div>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
