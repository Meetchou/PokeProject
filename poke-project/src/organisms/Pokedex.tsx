import React, { useState } from "react";
import usePokedex from "../hooks/pokedex.hooks";
import PaginationElem from "../moleculs/Pagination";
import Grid from "../organisms/Grid";

export type dataT = {
    count: number,
    next: string|null,
    previous: string|null,
    results: {name:string, url:string}[]
};

const Pokedex: React.FC<any> = () => {
    const [currentPage, setCurrentPage] = useState<string>("https://pokeapi.co/api/v2/pokemon?offset=0&limit=12")
    const data = usePokedex(currentPage);

    if (data)
        return (
            <div className="flex flex-col items-center p-10">
                <Grid pokemons={data.results}/>  
                <PaginationElem setCurrentPage={setCurrentPage} total={data.count}/>
            </div>
            
    );
    else
        return (
            <div>LOADING...</div>
	);
}

export default Pokedex;