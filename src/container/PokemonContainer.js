import React, { useState, useEffect } from 'react';
import { GetPokemons } from '../helpers/GetPokemons';
import PokemonPage from '../page/PokemonPage';
import { PokemonContext } from '../helpers/PokemonContext';

const InitailPokemonUrl = 'https://pokeapi.co/api/v2/pokemon';

const PokemonContainer = () => {
	const [pokemonList, setPokemonList] = useState([]);
	const [inputText, setInputText] = useState('');
	const [specificPokemonData, setSpecificPokemonData] = useState('');
	const [pokemonClick, setPokemonClick] = useState(false);
	const [pokemonText, setPokemonText] = useState('');
	const[searchButtonClick, setSearchButtonClick] = useState(false);

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

	useEffect(() => {
		(async (pokemonDetailData) => {
			try {
				pokemonDetailData.map(async (pokemon) => {
					if (pokemonText === pokemon.name || inputText === pokemon.name) {
						const detailPokemon = await GetPokemons(pokemon.url);
						setSpecificPokemonData(detailPokemon);
					}
				});
			} catch (error) {
				console.log(error);
			}
		})(pokemonList);
	}, [pokemonClick, pokemonText, pokemonList, inputText]);

	const handleClick = (e) => {
		setPokemonClick(!pokemonClick);
		setPokemonText(e.target.innerText);
	};
    const handleButtonClick = (e) => {
		e.preventDefault();
		setSearchButtonClick(!searchButtonClick);

	}
	const handleTextChange = (e) => {
		setInputText(e.target.value);
	};
	return (
		<PokemonContext.Provider
			value={{
				pokemonList,
				inputText,
				handleTextChange,
				handleClick,
				specificPokemonData,
				pokemonClick,
				pokemonText,
				handleButtonClick,
				searchButtonClick
			}}
		>
			<PokemonPage />
		</PokemonContext.Provider>
	);
};

export default PokemonContainer;
