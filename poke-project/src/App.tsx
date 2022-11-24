import './App.css';
import Pokedex from './Page/PokedexPage';
import { Routes, Route } from "react-router-dom";
import PokemonInfoPage from './Page/PokemonInfoPage.tsx'

function App() {
	return (
		<Routes>
			<Route path="/" element={<Pokedex />} />
			<Route path='/pokemon/:name' element={<PokemonInfoPage/>}/>
		</Routes>
	);
}

export default App;
