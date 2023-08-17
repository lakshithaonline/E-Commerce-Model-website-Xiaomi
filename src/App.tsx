import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
//import {CheckoutForm } from "./components/orderCheckout/CheckoutForm"
//import {DeliveryMethod } from "./components/orderCheckout/DeliveryMethod"
//import {Confirmation } from "./components/orderCheckout/Confirmation"

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
         { /*<Route path="/checkout" element={<CheckoutForm/>} />*/}
          {/*<Route path="/delivery" element={<DeliveryMethod/>} />*/}
          {/*<Route path="/confirmation" element={<Confirmation/>} />*/}
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App