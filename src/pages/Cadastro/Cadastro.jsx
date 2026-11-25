import { useState } from "react";
import { Link } from "react-router-dom";
import "./Cadastro.css";
import { cadastrarUsuario } from "../../services/usuarioService";

function Cadastro () {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [telefone, setTelefone] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [mensagem, setMensagem] = useState("");

    async function cadastrar(e) {
    e.preventDefault();

        if (senha !== confirmarSenha) {
            setMensagem("As senhas não coincidem.");
            return;
        }

        try {
            const dados = await cadastrarUsuario({
            nome,
            email,
            cpf: cpf.replace(/\D/g, ""),
            senha,
            telefone,
            dataNascimento
            });

            setMensagem("Cadastro realizado com sucesso!");

            setNome("");
            setEmail("");
            setCpf("");
            setSenha("");
            setConfirmarSenha("");
            setTelefone("");
            setDataNascimento("");

        } catch (erro) {
            setMensagem(erro.message);
        }
    }

    return(
        <main className="tela-cadastro">
            <form className="painel-cadastro" onSubmit={cadastrar}>
                <h1 className="texto-cadastro">Cadastre-se</h1>

                <div className="campo-login">
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                
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
                    <label htmlFor="cpf">CPF</label>
                    <input
                        type="text"
                        id="cpf"
                        placeholder="Digite seu CPF"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
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

                <div className="campo-login">
                    <label htmlFor="confirmar-senha">Confirme a senha:</label>
                    <input
                        type="password"
                        id="confirmar-senha"
                        placeholder="Confirme sua senha"
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                        required
                    />
                </div>

                <div className="campo-login">
                    <label htmlFor="telefone">Número de telefone:</label>
                    <input
                        type="tel"
                        id="telefone"
                        placeholder="Digite seu telefone"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        required
                    />
                </div>

                <div className="campo-login">
                    <label htmlFor="dataNascimento">Data de nascimento:</label>
                    <input
                        type="date"
                        id="dataNascimento"
                        value={dataNascimento}
                        onChange={(e) => setDataNascimento(e.target.value)}
                        required
                    />
                </div>

                {mensagem && <p>{mensagem}</p>}

                <button type="submit" className="botao-entrar">
                    Cadastrar
                </button>

                <Link to="/Login" className="login">Já tenho conta!</Link>
            </form>
            
            <section className="painel-imagem" />

        </main>
    )
}

export default Cadastro;
