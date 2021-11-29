import "./App.css";
import Logo from "./Logo";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

const BestPokemon = () => {
  let abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <ul>
      {abilities.map((ability, index) => (
        <li key={index}>{ability}</li>
      ))}
    </ul>
  );
};
function App() {
  let date = new Date().toLocaleDateString();

  return (
    <div className="App">
      <Logo id={"016"} name={"Haseeb"} />
      <BestPokemon />
      <CaughtPokemon todayDate={date} />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
}

export default App;
