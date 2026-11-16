import { Link } from "react-router-dom";
import "../Erro/Erro.css";
import imagem from "../../assets/images/not-found-page.png";

function NotFound() {
    return (
        <main className="tela-erro">
            <section className="erro-texto">
                <h1>Ops! Algo não está certo com este link.</h1>
                <p>
                    Não conseguimos processar a sua solicitação. Verifique se
                    o endereço digitado está correto ou tente limpar os
                    cookies do seu navegador.
                </p>
                <Link to="/home" className="erro-botao">Página Inicial</Link>
            </section>

            <img src={imagem} alt="" className="erro-imagem" />
        </main>
    );
}

export default NotFound;