import { Offcanvas, Stack, Button } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./CartItem"
import storeItems from "../data/items.json"

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems, clearCart } = useShoppingCart()

  // Calculate the total price of the items in the cart
  const totalAmount = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find(i => i.id === cartItem.id)
    return total + (item?.price || 0) * cartItem.quantity
  }, 0)

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total {formatCurrency(totalAmount)}
          </div>
        </Stack>
        <Button variant="primary" className="w-100 mt-3" style={{ backgroundColor: "#FF6900", borderColor: "#FF6900" }}>
          Checkout
        </Button>
        <Button variant="outline-danger" className="w-100 mt-2" onClick={clearCart}>
          Clear Cart
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
