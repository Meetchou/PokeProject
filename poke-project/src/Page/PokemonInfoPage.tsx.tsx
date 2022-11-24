import { Card, Image } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type PokemonT = {
    abilities: [],
    base_experience: number
    forms: [],
    game_indices :[],
    height: number,
    held_items: number,
    id: number,
    is_default: boolean,
    location_area_encounters: string,
    moves: [],
    name: string,
    order: number,
    past_types: [],
    species: {},
    sprites: {
        front_default: string
    },
    stats: [],
    types: [],
    weight: number
} 

const Pokedex: React.FC<any> = () => {
    const { url } = useLocation().state;
    const [pokemonInfo, setPokemonInfo] = useState<PokemonT>();
    const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
        setLoading(true);
		fetch(url)
        .then(response => response.json())
        .then(data => setPokemonInfo(data));
        setLoading(false);
	}, [url])
    console.log(url);
    return (
		<>
            {
                (!loading && pokemonInfo) ? 
                    <Card title={pokemonInfo.name}>
                        <Image
                            width={200}
                            src={pokemonInfo.sprites.front_default}
                        />
                    </Card>
                 :
                 "Loading..."
            
            }
		</>
	);
}

export default Pokedex;