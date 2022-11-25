import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonT } from "../organisms/PokemonInfo";

const usePokemon = (url:string) => {
    const navigate = useNavigate()
    const [pokemonInfo, setPokemonInfo] = useState<PokemonT>();

	useEffect(() => {
		fetch(url)
        .then(response => {
            if (response.ok)
                return response.json()
            return response.text().then(text => {throw new Error(text)})
        })
        .then(data => setPokemonInfo(data))
        .catch(() => {
            navigate("/404")
        });
	}, [url])

    return pokemonInfo;
}

export default usePokemon;