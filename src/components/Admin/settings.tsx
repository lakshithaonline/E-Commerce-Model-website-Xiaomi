import { useState, ChangeEvent } from 'react';
import AdminNavigationBar from './AdminNavigationBar.tsx';

function Settings() {
    const [productData, setProductData] = useState({
        id: 0,
        name: '',
        price: 0,
        imgUrls: [],
        category: '',
    });
    const [notification, setNotification] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setProductData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const addProduct = async () => {
        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            });

            if (response.ok) {
                setNotification('Product added successfully');
                setProductData({
                    id: 0,
                    name: '',
                    price: 0,
                    imgUrls: [],
                    category: '',
                });
            } else {
                const errorResponse = await response.json();
                console.error('Failed to add product:', errorResponse);
                setNotification('Failed to add product');
            }
        } catch (error) {
            console.error('An error occurred', error);
            setNotification('An error occurred');
        }
    };

    return (
        <div>
            <AdminNavigationBar />
            <h1>Add Product</h1>
            <label>
                Product Name:
                <input
                    type="text"
                    name="name"
                    value={productData.name}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Price:
                <input
                    type="number"
                    name="price"
                    value={productData.price}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Image URLs (comma-separated):
                <input
                    type="text"
                    name="imgUrls"
                    value={productData.imgUrls.join(',')}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Category:
                <input
                    type="text"
                    name="category"
                    value={productData.category}
                    onChange={handleInputChange}
                />
            </label>
            <button onClick={addProduct}>Add Product</button>
            <p>{notification}</p>
        </div>
    );
}

export default Settings;
