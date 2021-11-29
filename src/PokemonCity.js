import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");

  return (
    <div>
      <p>Welcome to the city of {city}</p>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </div>
  );
}

export default PokemonCity;
