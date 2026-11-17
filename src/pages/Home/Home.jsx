import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Destaques from "../../components/Destaques/Destaques";
import Categorias from "../../components/Categorias/Categorias";

function Home() {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

    return (
        <>
            <Navbar />
            <main className="tela-home">
                <Destaques />
                <Categorias
                    selecionada={categoriaSelecionada}
                    onSelecionar={setCategoriaSelecionada}
                />
            </main>
        </>
    );
}

export default Home;