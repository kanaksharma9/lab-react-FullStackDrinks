import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

function SingleBeer() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => response.json())
      .then((data) => setBeer(data));
  }, [beerId]);

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

export default SingleBeer;
