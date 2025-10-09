import React, { useState } from "react";
import "./authentication.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

function Authentication() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-wrapper">
      <Link to="/" className="black-amazon-logo-container">
        <img src="amazon-black-logo.png" alt="Amazon Logo" />
      </Link>

      <div className="auth-container">
        <div className="auth-box">
          <h1>Sign-in</h1>

          <form className="auth-form">
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email"  />

            <label htmlFor="password">Password</label>
            <div className="password-field">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                
              />
              <span
                className="toggle-visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </span>
            </div>
          </form>

          <button type="submit" className="auth-button">
            Sign In
          </button>

          <p className="terms-text">
            By signing in, you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice, and our
            Interest-Based Ads Notice.
          </p>

          <button className="create-account-button">
            Create Your Amazon Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
