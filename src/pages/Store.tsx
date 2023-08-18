import { useState } from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';
import { StoreItem } from '../components/StoreItem';
import storeItems from '../data/items.json';
import './storeCSS.css'; // Import the CSS file

export function Store() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredStoreItems = selectedCategory === 'All'
        ? storeItems
        : storeItems.filter(item => item.category === selectedCategory);

    return (
        <Container>
            <div className="store-header">
                <h1>Xiaomi Flagship Store</h1>
                <p>Welcome to our flagship store offering a wide range of Xiaomi products!</p>
            </div>
            <Form.Group className="category-filter"> {/* Apply category-filter class */}
                <Form.Label>Filter by Category:</Form.Label>
                <Form.Control
                    as="select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="All">All Categories</option>
                    {Array.from(new Set(storeItems.map(item => item.category))).map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </Form.Control>
            </Form.Group>
            <Row md={2} xs={1} lg={3} className="g-3">
                {filteredStoreItems.map((item) => (
                    <Col key={item.id}>
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
