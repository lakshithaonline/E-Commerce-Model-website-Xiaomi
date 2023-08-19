import { useState } from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';
import { StoreItem } from '../components/StoreItem';
import storeItems from '../data/items.json';
import './storeCSS.css';
import { FaSearch } from 'react-icons/fa';

export function Store() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredStoreItems = selectedCategory === 'All'
        ? storeItems
        : storeItems.filter(item => item.category === selectedCategory);

    const filteredAndSearchedItems = filteredStoreItems.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Container>
            <div className="store-header">
                <h1>Xiaomi Flagship Store</h1>
                <p>Welcome to our flagship store offering a wide range of Xiaomi products!</p>
            </div>
            <div className="category-and-search">
                <Form.Group className="category-filter">
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
                <Form.Group className="search-bar">
                    <Form.Label>Search Your Desire:</Form.Label>
                    <div className="search-bar-wrapper">
                        <FaSearch className="search-icon" />
                        <Form.Control
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </Form.Group>
            </div>
            <Row md={2} xs={1} lg={3} className="g-3">
                {filteredAndSearchedItems.map((item) => (
                    <Col key={item.id}>
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
