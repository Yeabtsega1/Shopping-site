import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  let Submit = (e) => {
    e.preventDefault();
    const newEntry = {
      email: email,
      password: password,
    };
    console.log([newEntry]);
    if (email === "" || password === "")
      return window.alert("Please Fill out the field first");
    else {
      //  const backendUrl = process.env.REACT_APP_BACKEND_URL;
      // const url = `${backendUrl}/api/login`;
      const url = "https://yb-ecommerce-backend.onrender.com/api/login";
      const params = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEntry),
      };
      fetch(url, params)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          if (data.message !== "Login successful") return;
          navigate("/Product");
        });
    }
  };
  return (
    <>
    
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={Submit}>
              <div className="my-3">
                <label htmlFor="display-4">Email address</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter your email id"/>
              </div>
              <div className="my-3">
                <label htmlFor="floatingPassword display-4">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="********"/>
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
