import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckoutStepOnePage({ onContinue }) {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [error, setError] = useState("");

  function handleContinue(event) {
    event.preventDefault();

    if (!firstName || !lastName || !zipCode) {
      setError("All fields are required");
      return;
    }

    setError("");

    onContinue({
      firstName,
      lastName,
      zipCode,
    });

    navigate("/checkout-step-two.html");
  }

  return (
    <main className="checkout-page">
      <section className="checkout-card">
        <h1>Checkout: Your Information</h1>

        <form onSubmit={handleContinue}>
          <div className="form-field">
            <label htmlFor="first-name">
              First Name
            </label>

            <input
              id="first-name"
              name="firstName"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(event) =>
                setFirstName(event.target.value)
              }
            />
          </div>

          <div className="form-field">
            <label htmlFor="last-name">
              Last Name
            </label>

            <input
              id="last-name"
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(event) =>
                setLastName(event.target.value)
              }
            />
          </div>

          <div className="form-field">
            <label htmlFor="zip-code">
              Zip / Postal Code
            </label>

            <input
              id="zip-code"
              name="zipCode"
              type="text"
              placeholder="Zip / Postal Code"
              value={zipCode}
              onChange={(event) =>
                setZipCode(event.target.value)
              }
            />
          </div>

          {error && (
            <p className="error-message" role="alert">
              {error}
            </p>
          )}

          <button type="submit">
            Continue
          </button>
        </form>
      </section>
    </main>
  );
}

export default CheckoutStepOnePage;
