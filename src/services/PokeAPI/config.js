import axios from 'axios';

const baseAPI = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon",
    headers: {
        "Content-Type": "application/json"
    }
});

export function getPokemons(limit) {
    return baseAPI.get(`?limit=${limit}`);
}

export function getUniquePokemon(product) {
    return baseAPI.get(`/${product}`);
}