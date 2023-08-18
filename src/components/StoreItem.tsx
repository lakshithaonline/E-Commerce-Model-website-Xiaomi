import { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';
import './StoreItem.css';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrls: string[];
};

export function StoreItem({ id, name, price, imgUrls }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedPhotoIndex((prevIndex) => (prevIndex + 1) % imgUrls.length);
    }, 3000); // Change photo every 3 seconds

    return () => clearInterval(timer);
  }, [imgUrls]);

  // If the quantity is greater than 0, show the "Remove" button
  const showRemoveButton = quantity > 0;

  return (
      <Card className="store-item-card">
        <div className="image-container">
          <Card.Img className="item-image" src={imgUrls[selectedPhotoIndex]} alt={name} />
        </div>
        <Card.Body>
          <Card.Title className="item-title">{name}</Card.Title>
          <div className="item-details">
            <span className="item-price">{formatCurrency(price)}</span>
            <div className="item-actions">
              {quantity === 0 ? (
                  <Button style={{ color: 'white' }} className="add-to-cart-button" onClick={() => increaseCartQuantity(id)}>
                    + Add To Cart
                  </Button>
              ) : (
                  <div className="quantity-controls">
                    <Button className="quantity-button" onClick={() => decreaseCartQuantity(id)}>
                      -
                    </Button>
                    <span className="quantity">{quantity}</span>
                    <Button className="quantity-button" onClick={() => increaseCartQuantity(id)}>
                      +
                    </Button>
                  </div>
              )}
              {/* Conditionally render the "Remove" button */}
              {showRemoveButton && (
                  <Button
                      className="remove-button"
                      onClick={() => removeFromCart(id)}
                      variant="danger"
                      size="sm"
                  >
                    Remove
                  </Button>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
  );
}
