import React from "react";
import Pokedex from "../organisms/Pokedex";
import PageLayout from "../organisms/PageLayout";

const PokedexPage: React.FC<any> = () => {

        return (
            <PageLayout>
                <Pokedex/>
            </PageLayout>
    );
}

export default PokedexPage;