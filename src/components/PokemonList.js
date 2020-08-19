import React from 'react';

const PokemonList = ({ pokemonList, inputTextvalue }) => {
	const pokemonFilter = pokemonList.filter(item => item.name.toLowerCase().includes(inputTextvalue));
	return (
		<ul>
			{inputTextvalue
				? pokemonFilter.map((matchedPokemons) => <li key={matchedPokemons.name}>{matchedPokemons.name}</li>)
				: null}
		</ul>
	);
};

export default PokemonList;
