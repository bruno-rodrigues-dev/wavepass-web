import "./Erro.css";
import imagem from "../../assets/images/error-page.png";

function Erro() {
    return (
    <main className="tela-erro">

        <section className="erro-texto">
            <h1>Ops! Algo quebrou por aqui (Erro 500).</h1>
            <p>
                Já estamos cuidando para colocar tudo de volta nos trilhos
                o mais rápido possível. Enquanto isso, você pode voltar
                para a página inicial.
            </p>
             <a href="/home" className="erro-botao">Página Inicial</a>
        </section>

        <img src={imagem} alt="" className="erro-imagem" />

    </main> 
    )
}

export default Erro;