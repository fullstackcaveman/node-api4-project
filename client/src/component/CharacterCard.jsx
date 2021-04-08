import React from 'react';

const CharacterCard = (props) => {
	const {
		name,
		height,
		mass,
		gender,
		born,
		species,
		hairColor,
		eyeColor,
		skinColor,
	} = props;

	return (
		<div>
			<h2>{name}</h2>
			<p>{height}</p>
			<p>{mass}</p>
			<p>{gender}</p>
			<p>{born}</p>
			<p>{species}</p>
			<p>{hairColor}</p>
			<p>{eyeColor}</p>
			<p>{skinColor}</p>
		</div>
	);
};

export default CharacterCard;
