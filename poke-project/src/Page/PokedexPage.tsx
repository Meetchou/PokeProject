import React, { useEffect, useState } from "react";
import PaginationElem from "../moleculs/Pagination";
import Grid from "../organisms/Grid";

type dataT = {
    count: number,
    next: string|null,
    previous: string|null,
    results: {name:string, url:string}[]
};

const Pokedex: React.FC<any> = () => {
    const [data, setData] = useState<dataT>();
    const [loading, setLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<string>("https://pokeapi.co/api/v2/pokemon?offset=0&limit=12")
    

	useEffect(() => {
        setLoading(true);
		fetch(currentPage)
        .then(response => response.json())
        .then(data => setData(data));
        setLoading(false);
	}, [currentPage])

	return (
		<>
            {
            !loading && data ? 
            <>
                <Grid pokemons={data.results}/>  
                <PaginationElem setCurrentPage={setCurrentPage} total={data.count}/>
            </> :
            <div>LOADING ...</div>
            }
            
		</>
	);
}

export default Pokedex;