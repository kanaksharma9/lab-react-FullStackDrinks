import React, { useEffect, useState } from "react";
import Header from "./Header";

function RandomBeer() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => response.json())
      .then((data) => setBeer(data));
  }, []);

  if (!beer) return <p>Loading...</p>;

  return (
    <div>
      <Header />
      <img src={beer.image_url} alt={beer.name} width="100" />
      <h1>{beer.name}</h1>
      <p>{beer.tagline}</p>
      <p><strong>First brewed:</strong> {beer.first_brewed}</p>
      <p><strong>Attenuation level:</strong> {beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
    </div>
  );
}

export default RandomBeer;
