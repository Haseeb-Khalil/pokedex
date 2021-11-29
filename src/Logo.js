import React from "react";
import Image from "./Image";

const AppName = ({ name }) => {
  return <h1>{name}'s Pokedex</h1>;
};

const Logo = (props) => {
  const logWhenClicked = () => {
    console.log("Button Clicked");
  };

  return (
    <header>
      <AppName name={props.name} />
      <Image id={props.id} handleClick={logWhenClicked} />
    </header>
  );
};

export default Logo;
