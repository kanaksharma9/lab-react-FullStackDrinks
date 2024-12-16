import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function AllBeers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => response.json())
      .then((data) => setBeers(data));
  }, []);

  return (
    <div>
      <Header />
      <h1>All Beers</h1>
      {beers.map((beer) => (
        <div key={beer._id}>
          <img src={beer.image_url} alt={beer.name} width="50" />
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
          <Link to={`/beers/${beer._id}`}>More details</Link>
        </div>
      ))}
    </div>
  );
}

export default AllBeers;
