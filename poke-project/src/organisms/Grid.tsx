import React from "react";
import { Row, Col } from 'antd';
import PokemonCard from "../moleculs/PokemonCard";
import { Link } from "react-router-dom"

type CardType = {
	name: string,
	url: string
};

type PropsT = {
	pokemons: CardType[]
};

const Grid: React.FC<PropsT> = ({pokemons}:PropsT) => {
	const pokemonsElem = pokemons.map((item, idx) => (
		<Col key={idx} span={6} >
			<Link to={`/Pokemon/${item.name}`} state={{url:item.url}}>
				<PokemonCard name={item.name}/>
			</Link>
		</Col>
	))
    return(
        <Row gutter={[24, 24]}>
			{pokemonsElem}
		</Row>
    )
}

export default Grid;