import React from 'react';

const SearchPokemon = ({ inputValue, handleTextChange }) => {
	return <input type="text" name="pokemon-search" placeholder="Search..." value={inputValue} onChange={handleTextChange} />;
};

export default SearchPokemon;
