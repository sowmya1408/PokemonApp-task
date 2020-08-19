import React, { useContext } from 'react';
import Heading from '../components/Heading';
import Description from '../components/Description';
import SearchPokemon from '../components/SearchPokemon';
import PokemonList from '../components/PokemonList';
import { PokemonContext } from '../helpers/PokemonContext';
import ShowPokemonCard from '../components/ShowPokemonCard';
import Button from '../components/Button';

const PokemonPage = () => {
	const { pokemonList, inputText, handleTextChange, handleClick, pokemonClick, specificPokemonData, handleButtonClick,searchButtonClick } = useContext(
		PokemonContext
	);
	return (
		<div className="wrapper">
			<Heading />
			<Description />
			<div className="input-container">
				<SearchPokemon inputValue={inputText} handleTextChange={handleTextChange} />
				<Button handleButtonClick={handleButtonClick} inputValueOnButtonClick={inputText}/>
			</div>
			<PokemonList pokemonList={pokemonList} inputTextValue={inputText} handleClick={handleClick} />
			{(pokemonClick && specificPokemonData) || (searchButtonClick && specificPokemonData) ? <ShowPokemonCard pokemonData={specificPokemonData} /> : null}
		</div>
	);
};

export default PokemonPage;
