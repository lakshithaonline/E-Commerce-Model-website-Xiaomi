import { Row, Col, Card, Typography, List } from 'antd';
import './Admin.css';
import itemsData from '../../data/items.json';
import AdminNavigationBar from './AdminNavigationBar.tsx';

const { Title } = Typography;

function AdminPage() {
    // Sample data from items.json
    const items = itemsData;

    // Extract unique categories from the items
    const categories = [...new Set(items.map(item => item.category))];

    // Sample data for placeholders
    const recentOrders = itemsData.slice(0, 5); // Use first 5 items as recent orders
    const topSellingProducts = itemsData.slice(5, 10); // Use next 5 items as top-selling products

    return (
        <div className="admin-page">
            <AdminNavigationBar />
            <Title className="admin-header" level={2}></Title>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="Product Categories" className="admin-card">
                        {/* Display dynamic product categories */}
                        <ul>
                            {categories.map(category => (
                                <li key={category}>{category}</li>
                            ))}
                        </ul>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Recently Added Products" className="admin-card">
                        <div className="slideshow">
                            <img src="https://via.placeholder.com/640x220" alt="Slideshow" />
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="Recent Orders" className="admin-card">
                        {/* Placeholder for recent orders */}
                        <List
                            dataSource={recentOrders}
                            renderItem={item => (
                                <List.Item>{item.name}</List.Item>
                            )}
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Top Selling Products" className="admin-card">
                        {/* Placeholder for top-selling products */}
                        <List
                            dataSource={topSellingProducts}
                            renderItem={item => (
                                <List.Item>{item.name}</List.Item>
                            )}
                        />
                    </Card>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Card title="Notifications" className="admin-card">
                        {/* Placeholder for notifications */}
                        <ul>
                            <li>New order received</li>
                            <li>Product out of stock</li>
                            <li>Special promotion coming soon</li>
                            {/* Add more notifications */}
                        </ul>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default AdminPage;
