import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Redirect } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";

function Login({ location }) {
  const { isAuthenticated, setAuthenticated } = useContext(AuthContext);
  const handleLogin = () => {
    setAuthenticated(true);
  };

  if (isAuthenticated) {
    return <Redirect to={location.state.from.pathname} />;
  }
  const handleSignin = () => {
    setAuthenticated(true);
  };

  if (isAuthenticated) {
    return <Redirect to={location.state.from.pathname} />;
  }

  return (
    <form className="pageWrapper">
      <div className="cardLogin">
        <div className="inputBody">
          <input type="text" placeholder="User name" className="input" />

          <input type="text" placeholder="Password" className="input" />

          <input type="text" placeholder="Confirm Password" className="input" />
        </div>

        <button className="btn2" onClick={handleSignin}>
          Sign up
        </button>

        <div>
          <span className="span">Already have an account?</span>
        </div>
        <button className="btnLogin" onClick={handleLogin}>
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;
