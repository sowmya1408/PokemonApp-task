import React from 'react';
import '../AllComponents.css';

function ShowPokemonCard({ pokemonData }) {
	return (
		<div className="pokemon-card">
			<h2>Name: {pokemonData.name}</h2>
			<img src={pokemonData.sprites.front_shiny} alt="pokemons" />
			<p>Weight: {pokemonData.weight}</p>
			<p>Height: {pokemonData.height}</p>
			<p>Ability : {pokemonData.abilities[0].ability.name}</p>
		</div>
	);
}

export default ShowPokemonCard;
