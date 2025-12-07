import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return (
      <div>
        {/* <h1>Please log in to access this page.</h1>
        <Link to="/login">go to log in</Link> */}
        <Navigate to="/login" />
      </div>
    );
  }
  return children;
};

export default PrivateRoute;
