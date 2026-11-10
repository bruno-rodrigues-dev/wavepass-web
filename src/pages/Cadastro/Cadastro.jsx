import { Link } from "react-router-dom"

function Cadastro () {
    return(
        <main className="tela-cadastro">
            <section className="painel-cadastro">
                <h1 className="texto-cadastro">Cadastre-se</h1>

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

                <div className="campo-login">
                    <label htmlFor="confirmar-senha">Confirme a senha:</label>
                    <input
                    type="password"
                    id="confirmar-senha"
                    placeholder="Confirme sua senha"
                    />
                </div>

                <button type="submit" className="botao-entrar">
                    Cadastrar
                </button>

                <Link to="/Login">Já tenho conta!</Link>
            </section>
            
            <section className="painel-imagem" />

        </main>
    )
}

export default Cadastro