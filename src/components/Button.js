import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Button = ({ handleButtonClick, inputText }) => {
	return (
		<button onClick={handleButtonClick} inputValueOnButtonClick={inputText}>
			<FontAwesomeIcon icon={faSearch} />
		</button>
	);
};
export default Button;
