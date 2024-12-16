import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="homepage">
      <h1>Welcome to RootBeers</h1>
      <Link to="/beers">
        <img src="/assets/beers.png" alt="All Beers" />
        <h2>All Beers</h2>
      </Link>
      <Link to="/random-beer">
        <img src="/assets/random-beer.png" alt="Random Beer" />
        <h2>Random Beer</h2>
      </Link>
      <Link to="/new-beer">
        <img src="/assets/new-beer.png" alt="New Beer" />
        <h2>New Beer</h2>
      </Link>
    </div>
  );
}

export default HomePage;
