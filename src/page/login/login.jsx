import React, { useState, useContext } from "react";
import "./login.css";
import { userContext } from "../../utils/authContext";
import {useNavigate, Navigate} from 'react-router-dom';
import newRequest from './../../utils/newRequest';

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoggedIn, setLoggedIn] = useContext(userContext);
  const navigate = useNavigate()

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const res = await newRequest.post("/api/auth/login", user, {withCredentials: true});
      await setLoggedIn({
        user: res.data.username,
        authenticated: true,
      });

      navigate('/admin', { replace: true });
    } catch (error) {
      setError(error.response?.data.message);
    }
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h2>Admin</h2>
        <input
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="Username"
          required
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <p>{error}</p>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
