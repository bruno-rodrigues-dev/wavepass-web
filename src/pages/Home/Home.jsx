import Navbar from "../../components/Navbar/Navbar";
import Destaques from "../../components/Destaques/Destaques";

function Home() {
    return (
        <>
            <Navbar />
            <main className="tela-home">
                <Destaques />
            </main>
        </>
    );
}

export default Home;