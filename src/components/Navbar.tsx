import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import './Navbar.css';

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <NavbarBs sticky="top" className="navbar navbar-bg shadow-sm mb-3" expand="lg">
      <Container>
        <NavbarBs.Brand to="/" as={NavLink} className="navbar-logo" style={{ color: 'white' }}>
        <img
        src="https://assets.stickpng.com/images/6102dadda849c40004f9a13b.png"
        alt="Xiaomi Logo"
        className="logo-image"
        />
          Xiaomi Flagships
        </NavbarBs.Brand>
        <NavbarBs.Toggle aria-controls="navbar-nav" />

        <NavbarBs.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/store" as={NavLink}>
              Store
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink}>
              About
            </Nav.Link>
          </Nav>

          {cartQuantity > 0 && (
            <Button
              onClick={openCart}
              style={{
                width: '3rem',
                height: '3rem',
                position: 'relative',
                color: 'white',
                borderColor: 'white',
              }}
              variant="outline-primary"
              className="rounded-circle"
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="White" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>

              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: 'white',
                  width: '1.5rem',
                  height: '1.5rem',
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  transform: 'translate(25%, 25%)',
                }}
              >
                {cartQuantity}
              </div>
            </Button>
          )}
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
}
