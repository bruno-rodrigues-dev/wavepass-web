import { Link } from "react-router-dom";

function Login() {
    return (
        <main className="tela-login">

            <section className="painel-login">
                <h1 className="texto-login">Entre ou cadastre-se</h1>

                <div className="campo-login">
                    <label htmlFor="email">E-mail:</label>
                    <input
                    type="email"
                    id="email"
                    placeholder="Digite seu e-mail" 
                    />
                </div>

                <div className="campo-login">
                    <label htmlFor="senha">Senha:</label>
                    <input
                    type="password"
                    id="senha"
                    placeholder="Digite a senha"
                    />
                </div>

                <button type="submit" className="botao-entrar">
                    Entrar
                </button>

                <p>Não tem conta? <Link to="/Cadastro">Cadastre-se</Link></p>
            
            </section>

            <section className="painel-imagem" />

        </main>
    )
}

export default Login