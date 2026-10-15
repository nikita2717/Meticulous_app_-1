import { Link, useNavigate } from "react-router-dom";

function CartPage({ cartItems, onRemoveFromCart }) {
  const navigate = useNavigate();

  function handleCheckout() {
    navigate("/checkout-step-one.html");
  }

  return (
    <main className="cart-page">
      <header className="store-header">
        <h1>Meticulous Demo Store</h1>

        <nav>
          <Link to="/inventory.html">
            Products
          </Link>

          <span>
            Cart ({cartItems.length})
          </span>
        </nav>
      </header>

      <section className="cart-content">
        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>

            <Link to="/inventory.html">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {cartItems.map((product) => (
              <article
                className="cart-item"
                key={product.id}
              >
                <div className="cart-item-info">
                  <h3>{product.name}</h3>

                  <p>{product.description}</p>

                  <p className="product-price">
                    {product.price}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onRemoveFromCart}
                >
                  Remove
                </button>
              </article>
            ))}

            <div className="cart-actions">
              <Link to="/inventory.html">
                Continue Shopping
              </Link>

              <button
                type="button"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default CartPage;
