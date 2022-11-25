import { Typography, Button, Card } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const Page404: React.FC<any> = () => {
    const navigate = useNavigate();
    const onclick = () =>
    {
        navigate("/")
    }
    return (
        <Card className="flex flex-col justify-center items-center">
            <Title>404 ERROR</Title>
            <Button shape="round" onClick={() => onclick()}>return to pokedex</Button>
        </Card>
        

	);
}

export default Page404;