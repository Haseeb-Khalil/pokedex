import React from "react";
import { useState } from "react";

// const CaughtPokemon = (props) => {
//   const [caught, setCount] = useState(0);
//   const catchPokemon = () => {
//     setCount((currentVal) => currentVal + 1);
//   };

//   return (
//     <div>
//       <p>
//         Caught {caught} Pokemon on {props.todayDate}
//       </p>
//       <button onClick={catchPokemon}> Catch Pokemon</button>
//     </div>
//   );
// };

const CaughtPokemon = (props) => {
  // const getRandomPokemon = () => {
  //   const index = Math.floor(Math.random() * 8);
  //   const pokemons = ["A", "B", "C", "D", "E", "F", "G", "H"];
  //   return pokemons[index];
  // };

  const [caught, setCaught] = useState([]);

  const catchPokemon = () => {
    setCaught([...caught, pokemonNameInput]);
    //setCaught(() => caught.concat([pokemonNameInput]));
    setPokemonNameInput("");
  };
  console.log(caught);

  const [pokemonNameInput, setPokemonNameInput] = useState("");
  const handleInputChange = (e) => {
    setPokemonNameInput(e.target.value);
  };

  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.todayDate}
      </p>
      <ul>
        {caught.map((pokemon, index) => {
          return <li key={index}> {pokemon}</li>;
        })}
      </ul>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}> Catch Pokemon</button>
    </div>
  );
};

export default CaughtPokemon;
