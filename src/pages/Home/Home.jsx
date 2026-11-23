import { useState } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Destaques from "../../components/Destaques/Destaques";
import Categorias from "../../components/Categorias/Categorias";
import Eventos from "../../components/Eventos/Eventos";

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
                <Eventos />

            </main>
        </>
    );
}

export default Home;