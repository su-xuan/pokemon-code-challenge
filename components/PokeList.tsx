import PokeItem from "./PokeItem";
import { PokemonData, Profile } from "./types";



export default function PokeList(props:PokemonData) {
  return (
    <ul>
      {props.results.map((item) => (
        <PokeItem key={item.id}  name={item.name} id={item.id} image={item.image} />
      ))}
    </ul>
  );
}
