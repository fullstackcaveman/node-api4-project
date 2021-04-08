import { useState, useEffect } from 'react';
import './App.css';
import CharacterCard from './component/CharacterCard';

const url = (path) => {
	return process.env.NODE_ENV === 'development'
		? `http://localhost:5000${path}`
		: path;
};

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(url('/api'))
			.then((res) => res.json())
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='App'>
			<header className='App-header'>
				{data.map((char) => {
					return <CharacterCard {...char} />;
				})}
			</header>
		</div>
	);
}

export default App;
