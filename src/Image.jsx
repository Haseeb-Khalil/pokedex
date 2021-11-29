import React from "react";
// const id = "016";
const Image = ({ id, handleClick }) => {
  let src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;
  return <img src={src} alt="" onClick={handleClick} />;
};
export default Image;
