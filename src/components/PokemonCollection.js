import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonCollection}) {

  const displayPokemon = pokemonCollection.map(pokemon => {
    return (
      <PokemonCard key={pokemon.id} pokemon={pokemon} />
    )
  })
  return (
    <Card.Group itemsPerRow={6}>
      {displayPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
