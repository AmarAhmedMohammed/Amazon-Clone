import React, { useState, useContext } from "react";
import "./authentication.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth } from "../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { Type } from "../Utility/action.type";
import {ClipLoader} from "react-spinners";

function Authentication() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({signIn: false, signUp: false});
  const [{user}, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const authHandler = async (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    if (e.target.name === "signIn") {
      setLoading({...loading, signIn: true})
      signInWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          dispatch({
            type: Type.SET_USER,
            user: auth.user,
          });
          setLoading({...loading, signIn: false})
          navigate("/")
        })
        .catch((error) => {
          setError(error.message);
          setLoading({...loading, signIn: false});
        });
        // .catch((error) => console.log(error.message));
    } else if (e.target.name === "signUp") {
      setLoading({...loading, signUp: true})
      createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          dispatch({
            type: Type.SET_USER,
            user: auth.user,
          });
          setLoading({...loading, signUp: false})
          navigate("/")
        })
        .catch((error) => {
          setError(error.message);
          setLoading({...loading, signUp: false});
        });
        // .catch((error) => console.log(error.message));
    }
  };

  // console.log(password, email);
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
            <input
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <div className="password-field">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="toggle-visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </span>
            </div>
          </form>

          <button
            type="submit"
            className="auth-button"
            onClick={authHandler}
            name="signIn"
          >
            {
              loading.signIn ? (<ClipLoader color="#000" size={15}></ClipLoader>): ("Sign In")
            }
          </button>

          <p className="terms-text">
            By signing in, you agree to the AMAZON FAKE CLONE Conditions of Use
            & Sale. Please see our Privacy Notice, our Cookies Notice, and our
            Interest-Based Ads Notice.
          </p>

          <button
            className="create-account-button"
            onClick={authHandler}
            name="signUp"
          >
            {
              loading.signUp ? (<ClipLoader color="#000" size={15}></ClipLoader>): ("Create Your Amazon Account")
            }
            
          </button>
          {
            error && <p className="error-text">{error}</p>  
          }
        </div>
      </div>
    </div>
  );
}

export default Authentication;
