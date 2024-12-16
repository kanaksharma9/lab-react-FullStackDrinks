import React from "react";
import Header from "./Header";

function NewBeer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    fetch("https://ih-beers-api2.herokuapp.com/beers/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <Header />
      <h1>Add New Beer</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" required />
        <input name="tagline" placeholder="Tagline" required />
        <textarea name="description" placeholder="Description" required />
        <input name="first_brewed" placeholder="First Brewed" required />
        <input name="brewers_tips" placeholder="Brewers Tips" required />
        <input name="attenuation_level" type="number" placeholder="Attenuation Level" required />
        <input name="contributed_by" placeholder="Contributed By" required />
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default NewBeer;
