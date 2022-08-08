import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import { getPokemons, getUniquePokemon } from "../../services/PokeAPI/config";

export default function Home() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=8')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json()

    setLoadMore(data.next);

    function createPokemonObject (result) {
      result.forEach( async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await res.json()

        setAllPokemons(currentList => [...currentList, data])
      })
    }

    createPokemonObject(data.results);
  }

  useEffect(() => {
    getAllPokemons()
  }, []);

  return (
    <>
      <Header />

      <main className="home">

        <h1>Catch your <i className="pokemon-font-style">Pokémon</i> here !</h1>
        
        <section className="pokemons-container">
          {allPokemons.map((pokemon, index) => (
            <Card
              key={index}
              id={pokemon.id}
              name={pokemon.name}
              price={pokemon.weight * 2}
              imgFront={pokemon.sprites.front_default}
              imgBack={pokemon.sprites.back_default}
              hp={pokemon.stats[0].base_stat}
              attack={pokemon.stats[1].base_stat}
              defence={pokemon.stats[2].base_stat}
              type={pokemon.types[0].type.name}
            />
          ))}
        </section>

        <button 
          className="load-more" 
          onClick={() => getAllPokemons()}>Load More
        </button>
      </main>

      <Footer />
    </>
  );
}
