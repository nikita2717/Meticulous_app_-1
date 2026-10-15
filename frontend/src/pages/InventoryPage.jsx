import { Link } from "react-router-dom";

const PRODUCT = {
  id: "backpack",
  name: "Sauce Labs Backpack",
  description:
    "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.",
  price: "$29.99",
};

function InventoryPage({ cartItems, onAddToCart }) {
  const isInCart = cartItems.length > 0;

  return (
    <main className="inventory-page">
      <header className="store-header">
        <h1>Meticulous Demo Store</h1>

        <nav>
          <Link to="/inventory.html">
            Products
          </Link>

          <Link to="/cart.html">
            Cart ({cartItems.length})
          </Link>
        </nav>
      </header>

      <section className="products">
        <h2>Products</h2>

        <article className="product-card">
          <div
            className="product-image"
            aria-label="Backpack"
          >
            🎒
          </div>

          <div className="product-info">
            <h3>{PRODUCT.name}</h3>

            <p>{PRODUCT.description}</p>

            <p className="product-price">
              {PRODUCT.price}
            </p>

            <button
              type="button"
              onClick={() => onAddToCart(PRODUCT)}
              disabled={isInCart}
            >
              {isInCart ? "Added to cart" : "Add to cart"}
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}

export default InventoryPage;
