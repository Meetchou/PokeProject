import React from "react";
import { Card } from 'antd';

type PropsT = {
    name: string
};

const PokemonCard: React.FC<PropsT> = ({name}:PropsT) => {
    return(
        <Card title={name}>
        </Card>
    )
}

export default PokemonCard;