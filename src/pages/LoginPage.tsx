import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <main className="login-page">
      <section className="login-card">
        <h1 className="login-title">Login</h1>
        <p className="login-subtitle">
          Welcome back. Please login to continue.
        </p>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            data-testid="email-input"
            type="email"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            data-testid="password-input"
            type="password"
            placeholder="Enter password"
          />
        </div>

        <button
          data-testid="login-button"
          className="login-button"
          onClick={handleLogin}
        >
          Login
        </button>
      </section>
    </main>
  );
}