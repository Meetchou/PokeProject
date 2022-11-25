import './App.css';
import { Routes, Route } from "react-router-dom";
import PokemonInfoPage from './Page/PokemonInfoPage'
import Page404 from './Page/Page404';
import PokedexPage from './Page/PokedexPage';

function App() {
	return (
		<Routes>
			<Route path="/" element={<PokedexPage />} />
			<Route path="/404" element={<Page404 />} />
			<Route path='/pokemon/:name' element={<PokemonInfoPage/>}/>
		</Routes>
	);
}

export default App;
