import { Card, Image } from "antd";
import React from "react";
import { useLocation } from "react-router-dom";
import usePokemon from "../hooks/pokemon.hook";

export type PokemonT = {
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

const PokemonInfo: React.FC<any> = () => {
    const { url } = useLocation().state;
    const pokemonInfo = usePokemon(url);
    console.log(pokemonInfo);
    if (pokemonInfo)
        return (
            <>
                <Card className="flex flex-col items-center " title={pokemonInfo.name}>
                    <Image
                        width={200}
                        src={pokemonInfo.sprites.front_default}
                    />
                </Card>
            </>
        )
    else
        return (
            <div>LOADING...</div>
	);
}

export default PokemonInfo;