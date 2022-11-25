import { useEffect, useState } from "react";
import { dataT } from "../organisms/Pokedex";

const usePokedex = (url:string) => {
    const [data, setData] = useState<dataT>();

    useEffect(() => {
		fetch(url)
        .then(response => response.json())
        .then(data => setData(data));
	}, [url])

    return data;
}

export default usePokedex