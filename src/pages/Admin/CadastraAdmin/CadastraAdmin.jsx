import { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import "./CadastraAdmin.css"

export default function CadastraAdmin() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] =useState("")

    function handleSubmit(e){
        e.preventDefault();

        const novoAdm ={
            nome, email, senha
        }
        console.log(novoAdm)
    }
  return (
    <section className="pageContainer">
        <Navbar/>

        <main className="mainContent flex">
            <h1 className="titulo">Cadastrar administrador</h1>

            <form className="formContainer flex" onSubmit={handleSubmit}>
                <div className="inputContainer">
                    <label htmlFor="nome">Nome completo</label>
                    <input id="nome" 
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    type="text"
                    placeholder="Digite o nome completo" 
                    required />
                </div>
                <div className="inputContainer">
                    <label htmlFor="email">E-mail</label>
                    <input id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    placeholder="example@email.com" 
                    required/>
                </div>
                <div className="inputContainer">
                    <label htmlFor="senha">Senha provisória</label>
                    <input id="senha" 
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    type="password" 
                    placeholder="Digite a senha" 
                    required />
                </div>
                <div className="inputContainer">
                    <label htmlFor="senha">Confirme a senha provisória</label>
                    <input id="senha" type="password" placeholder="Confirme a senha" required />
                </div>

                <div className="buttonContainer"><button type="submit">Cadastrar administrador</button></div>
            </form>
        </main>
    </section>
  )
}
