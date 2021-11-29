import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function PokemonMoves(props) {
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
      .then((response) => response.json())
      .then((data) => setPokemonData(data));
  }, [props.pokemonId]);
  //console.log(pokemonData);

  return (
    pokemonData && (
      <div>
        <p>{pokemonData.name}'s moves:</p>
        <ul>
          {pokemonData.moves.map((move, index) => {
            return <li key={index}>{move.move.name}</li>;
          })}
        </ul>
      </div>
    )
  );

  //Both are same ways
  //   pokemonData ? (
  //   <div>
  //     <p>{pokemonData.name}'s moves:</p>
  //     <ul>
  //       {pokemonData.moves.map((move, index) => {
  //         return <li key={index}>{move.move.name}</li>;
  //       })}
  //     </ul>
  //   </div>
  // )
  //   ) : (
  //     <span>Loading...</span>
  //   );
}

export default PokemonMoves;
