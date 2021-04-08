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
			<p>Height: {height}m</p>
			<p>Weight: {mass}kg</p>
			<p>Gender: {gender}</p>
			<p>Born: {born}bby</p>
			<p>Species: {species}</p>
			<p>Hair Color: {hairColor}</p>
			<p>Eye Color: {eyeColor}</p>
			<p>Skin Color: {skinColor}</p>
		</div>
	);
};

export default CharacterCard;
