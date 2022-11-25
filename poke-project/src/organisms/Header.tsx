import Search from 'antd/es/input/Search';
import { Header } from 'antd/es/layout/layout'
import { Typography } from 'antd';

import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const { Title } = Typography;

const HeaderNav: React.FC<any> = () => {
    const navigate = useNavigate();
    const onSearch = (value: string) => {
        if (value !== "")
        {
            const cleanValue = value.toLowerCase();
            const url = `https://pokeapi.co/api/v2/pokemon/${cleanValue}`;
            navigate(`/Pokemon/${cleanValue}`, {state: {url: url}} );
        }    
    };

    return (
        <Header className="flex justify-between	items-center p-10 mb-10 bg-sky-500/100">
                <Link to="/">
                    <Title style={{ color: 'white'}}>Pokédex</Title>
                </Link>
                <Search 
                    placeholder="Search your pokemon" 
                    allowClear 
                    onSearch={onSearch}
                    maxLength={40}
                    style={{ width: 200 }} />
        </Header>
    );
}

export default HeaderNav;