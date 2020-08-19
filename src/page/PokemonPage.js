import React,{useContext} from 'react';
import Heading from '../components/Heading';
import Description from '../components/Description';
import SearchPokemon from '../components/SearchPokemon';
import PokemonList from '../components/PokemonList';
import {PokemonContext} from '../helpers/PokemonContext';


const PokemonPage = () => {
    const {pokemonList, inputText, handleTextChange} = useContext(PokemonContext) 
 console.log(pokemonList);
	return (
		<div>
			<Heading />
			<Description />
			<SearchPokemon inputValue={inputText} handleTextChange={handleTextChange} />
			<PokemonList pokemonList={pokemonList} inputTextvalue={inputText}/>
		</div>
	);
};

export default PokemonPage;
