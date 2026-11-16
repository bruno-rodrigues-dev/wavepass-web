import { Link } from "react-router-dom";
import MarqueeModule from "react-fast-marquee";
const Marquee = MarqueeModule.default ?? MarqueeModule;
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

const categorias = ["Shows", "Festas", "Teatro", "Exposições", "Gastronomia", "Jogos", "Cinema"];

function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-topo">
                <Link to="/home">
                    <img src={logo} alt="Página inicial" className="navbar-logo" />
                </Link>

                <nav className="navbar-links">
                    <Link to="/meus-eventos" className="navbar-link">
                        <i className="fi fi-rr-calendar"></i>
                        Meus Eventos
                    </Link>

                    <Link to="/meus-ingressos" className="navbar-link">
                        <i className="fi fi-rr-ticket"></i>
                        Meus Ingressos
                    </Link>

                    <Link to="/perfil" className="navbar-perfil" aria-label="Perfil">
                        <i className="fi fi-rr-circle-user"></i>
                    </Link>
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