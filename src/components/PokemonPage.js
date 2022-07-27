import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonCollection, setPokemonCollection] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    setSearchQuery(() => e.target.value)
  }

  const handleAddPokemon = (newPokemon) => {
    setPokemonCollection(pokemonCollection => [
      ...pokemonCollection, 
      newPokemon
    ])
  }

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(r => r.json())
      .then(pokedex => {
        setPokemonCollection(() => pokedex)
      })
  }, [])

  const filteredArray = pokemonCollection.filter(pokemon => {
    if(searchQuery === "") {
    return true;
  } else {
    return pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  }
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleAddPokemon={handleAddPokemon}/>
      <br />
      <Search searchQuery={searchQuery} handleSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemonCollection={filteredArray} />
    </Container>
  );
}

export default PokemonPage;
