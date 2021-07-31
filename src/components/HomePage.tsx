import React from "react";
import usePokeList from "../models/usePokeList";
import { Container } from "react-bootstrap-v5";
import PokeCard from "../components/PokeCard";
import getId from "../models/getId";
import usePokeInfo from "../models/usePokeInfo";

export default function HomePage() {
  const PokeList = usePokeList();
  interface Pokemon {
    name:string;
    url: string;
  }

  let children =  PokeList && PokeList.map( (item: Pokemon) => (<PokeCard
    name={item.name} link={`ProfilePage/${getId(item.url)}`} img={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + getId(item.url) + ".png"}
  />));
  return (
    <>
      <h1>Pokedex</h1>
      <Container className="section">{children}</Container>
    </>
  );
}
