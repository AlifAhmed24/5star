import React, { useState, useContext } from "react";
import axios from "axios";
import "./login.css";
import { userContext } from "../../utils/authContext";
import {useNavigate, Navigate} from 'react-router-dom';

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoggedIn, setLoggedIn] = useContext(userContext);
  console.log('from login ' + isLoggedIn.authenticated )
  const navigate = useNavigate()

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const res = await axios.post(
        "http://localhost:8800/api/auth/login",
        user);
        
      await setLoggedIn({
        user: 'Admin',
        authenticated: true,
      });

      navigate('/admin', { replace: true });
    } catch (error) {
      setError(error.response?.data.message);
      console.log(error);
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
