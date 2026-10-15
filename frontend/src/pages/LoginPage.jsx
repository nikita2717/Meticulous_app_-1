import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    if (
      username === "standard_user" &&
      password === "secret_sauce"
    ) {
      setError("");
      navigate("/inventory.html");
      return;
    }

    setError("Username and password do not match");
  }

  return (
    <main className="login-page">
      <div className="login-card">
        <h1>Meticulous Demo Store</h1>

        <form onSubmit={handleLogin}>
          <div className="form-field">
            <label htmlFor="username">Username</label>

            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          {error && (
            <p className="error-message" role="alert">
              {error}
            </p>
          )}

          <button type="submit">
            Login
          </button>
        </form>

        <p className="credentials">
          standard_user / secret_sauce
        </p>
      </div>
    </main>
  );
}

export default LoginPage;
