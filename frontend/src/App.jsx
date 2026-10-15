import { useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import InventoryPage from "./pages/InventoryPage";
import CartPage from "./pages/CartPage";
import CheckoutStepOnePage from "./pages/CheckoutStepOnePage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems([product]);
  }

  function removeFromCart() {
    setCartItems([]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LoginPage />}
        />

        <Route
          path="/inventory.html"
          element={
            <InventoryPage
              cartItems={cartItems}
              onAddToCart={addToCart}
            />
          }
        />

        <Route
          path="/cart.html"
          element={
            <CartPage
              cartItems={cartItems}
              onRemoveFromCart={removeFromCart}
            />
          }
        />

        <Route
          path="/checkout-step-one.html"
          element={
            <CheckoutStepOnePage
              onContinue={(customer) => {
                console.log("Customer information:", customer);
              }}
            />
          }
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
