import { useNavigate } from "react-router-dom";
import "./MenuPerfil.css";

function MenuPerfil({ usuario }) {
    const navigate = useNavigate();

    function sair() {
        // futuramente: limpar o token de login aqui
        navigate("/login");
    }

    return (
        <div className="menu-perfil">
            <div className="menu-perfil-usuario">
                <i className="fi fi-rr-circle-user menu-perfil-avatar"></i>
                <div>
                    <p className="menu-perfil-nome">{usuario.nome}</p>
                    <p className="menu-perfil-email">{usuario.email}</p>
                </div>
            </div>

            <button type="button" className="menu-perfil-sair" onClick={sair}>
                Sair
                <i className="fi fi-rr-sign-out-alt"></i>
            </button>
        </div>
    );
}

export default MenuPerfil;