import React from 'react';

const PokemonList = ({ pokemonList, inputTextValue, handleClick }) => {
	const pokemonFilter = pokemonList.filter((item) => item.name.toLowerCase().includes(inputTextValue));
	return (
		<ul>
			{inputTextValue
				? pokemonFilter.map((matchedPokemons) => (
						<li key={matchedPokemons.name} onClick={handleClick}>
							{matchedPokemons.name}
						</li>
				  ))
				: null}
			{inputTextValue ? <li className="results-list">see results for {inputTextValue}</li> : null}
		</ul>
	);
};

export default PokemonList;
