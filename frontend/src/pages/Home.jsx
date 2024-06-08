// import { Navbar, Main, Product, Footer } from "../components";

// function Home() {
//   return (
//     <>
//       <Navbar />
//       <Main />
//       <Product />
//       <Footer />
//     </>
//   )
// }

// export default Home






import React from "react";

import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (

    <section id="hero">
      <div className="hero-container">
        <div className="hero-logo" >
          <img src="./assets/YB.jpeg" alt="YB is busy" />
        </div>
        <div className="hero-text">
          <h1>Welcome To YB Shopping</h1>
          <h2>All in One</h2>
        </div>
        <div className="actions">
          <Link to="/login" className="main-2">
            Login
          </Link>
          <Link to="/register" className="main-1">
            Register
          </Link>
        </div>
      </div>
    </section>
    
  );
};

export default Home;
