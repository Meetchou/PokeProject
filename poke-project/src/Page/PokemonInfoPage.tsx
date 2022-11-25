import React from "react";
import PageLayout from "../organisms/PageLayout";
import PokemonInfo from "../organisms/PokemonInfo";

const PokemonInfoPage: React.FC<any> = () => {
    return (
        <PageLayout>
            <PokemonInfo/>
        </PageLayout>
    );
}

export default PokemonInfoPage;