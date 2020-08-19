import React, { useState, useEffect, createContext } from 'react';
import { GetPokemons } from '../helpers/GetPokemons';
import PokemonPage from '../page/PokemonPage';
import {PokemonContext} from '../helpers/PokemonContext';
const InitailPokemonUrl = 'https://pokeapi.co/api/v2/pokemon';
const PokemonContainer = () => {
	const [pokemonList, setPokemonList] = useState([]);
	const [inputText, setInputText] = useState('');

	useEffect(() => {
		(async () => {
			try {
				const pokemonAPICall = await GetPokemons(InitailPokemonUrl);
				setPokemonList(pokemonAPICall.results);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
console.log(pokemonList);

	const handleTextChange = (e) => {
		setInputText(e.target.value);
	};
	return (
		<PokemonContext.Provider value={{ pokemonList, inputText, handleTextChange }}>
			<PokemonPage />
		</PokemonContext.Provider>
	);
};

export default PokemonContainer;
