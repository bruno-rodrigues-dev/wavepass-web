import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import MarqueeModule from "react-fast-marquee";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import MenuPerfil from "../MenuPerfil/MenuPerfil";

const Marquee = MarqueeModule.default ?? MarqueeModule;

const categorias = ["Shows", "Festas", "Teatro", "Exposições", "Gastronomia", "Jogos", "Cinema"];

// fixo por enquanto; depois virá da API de login
const usuario = {
    nome: "Usuário Santos",
    email: "usuario.santos@email.com",
};

function Navbar() {
    const [menuAberto, setMenuAberto] = useState(false);
    const areaPerfil = useRef(null);

    useEffect(() => {
        function clicarFora(evento) {
            if (areaPerfil.current && !areaPerfil.current.contains(evento.target)) {
                setMenuAberto(false);
            }
        }

        function apertarEsc(evento) {
            if (evento.key === "Escape") setMenuAberto(false);
        }

        document.addEventListener("mousedown", clicarFora);
        document.addEventListener("keydown", apertarEsc);

        return () => {
            document.removeEventListener("mousedown", clicarFora);
            document.removeEventListener("keydown", apertarEsc);
        };
    }, []);

    return (
        <header className="navbar">
            <div className="navbar-topo">
                <Link to="/home">
                    <img src={logo} alt="Página inicial" className="navbar-logo" />
                </Link>

                <nav className="navbar-links">
                    <Link to="/carrinho" className="navbar-carrinho">
                        <i className="fi fi-rr-shopping-cart"></i>
                        Carrinho
                    </Link>

                    <div className="navbar-usuario" ref={areaPerfil}>
                        <button
                            type="button"
                            className="navbar-icone"
                            aria-label="Perfil"
                            aria-expanded={menuAberto}
                            onClick={() => setMenuAberto(!menuAberto)}
                        >
                            <i className="fi fi-rr-circle-user"></i>
                        </button>

                        {menuAberto && <MenuPerfil usuario={usuario} />}
                    </div>
                </nav>
            </div>

            <Marquee className="navbar-faixa" speed={40} autoFill pauseOnHover>
                {categorias.map((categoria) => (
                    <span key={categoria} className="navbar-categoria">
                        {categoria}
                        <span className="navbar-separador">▪</span>
                    </span>
                ))}
            </Marquee>
        </header>
    );
}

export default Navbar;