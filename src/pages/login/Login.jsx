import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="card  bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl mx-auto">Login Now</h1>
        <form className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>
          Do you have an account? plaease{" "}
          <Link className="text-blue-500 underline" to="/signup">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
