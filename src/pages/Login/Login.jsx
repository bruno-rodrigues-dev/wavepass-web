import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { loginUsuario } from "../../services/usuarioService";

function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

    async function entrar(e) {
        e.preventDefault();

        try {
            const dados = await loginUsuario({
                email,
                senha
            });

            localStorage.setItem("token", dados.token);

            setMensagem("Login realizado com sucesso!");

            setEmail("");
            setSenha("");

        } catch (erro) {
            setMensagem(erro.message);
        }
    }

    return (
        <main className="tela-login">

            <form className="painel-login" onSubmit={entrar}>
                <h1 className="texto-login">Entre ou cadastre-se</h1>

                <div className="campo-login">
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="campo-login">
                    <label htmlFor="senha">Senha:</label>
                    <input
                        type="password"
                        id="senha"
                        placeholder="Digite a senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                </div>

                {mensagem && <p>{mensagem}</p>}

                <button type="submit" className="botao-entrar">
                    Entrar
                </button>

                <p>Não tem conta? <Link to="/Cadastro">Cadastre-se</Link></p>

            </form>

            <section className="painel-imagem" />

        </main>
    )
}

export default Login;
