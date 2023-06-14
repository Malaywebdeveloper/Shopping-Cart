import React from "react";
import "../Style/home.css"
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="home">
      <div className="home2">
        <h1>Hurry!Sale End Tomorrow</h1>
        <h3>Grab the Best Monsoon Deals</h3>
        <Link to="/products">
          <button>Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
