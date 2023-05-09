import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "./authContext.jsx";

function ProtectedRoute({ children, ...rest }) {
  const [isLoggedIn, setLoggedIn] = useContext(userContext);

  return isLoggedIn?.authenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
