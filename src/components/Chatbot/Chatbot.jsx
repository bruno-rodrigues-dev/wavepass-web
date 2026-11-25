import { useState, useEffect, useRef } from "react";
import "./Chatbot.css";
import mascote from "../../assets/images/mascotes/wave.png";

const NOME_AGENTE = "Wave";

const saudacao = {
    id: 0,
    autor: "agente",
    texto: `Olá! Me chamo ${NOME_AGENTE}, como posso te ajudar hoje?`,
};

function enviarMensagem() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Esta é uma resposta de teste. Em breve vou estar conectado à IA do WavePass!");
        }, 1200);
    });
}

function Chatbot() {
    const [aberto, setAberto] = useState(false);
    const [mensagens, setMensagens] = useState([saudacao]);
    const [texto, setTexto] = useState("");
    const [enviando, setEnviando] = useState(false);
    const fimDaLista = useRef(null);

    useEffect(() => {
        fimDaLista.current?.scrollIntoView({ behavior: "smooth" });
    }, [mensagens, enviando, aberto]);

    useEffect(() => {
        function apertarEsc(evento) {
            if (evento.key === "Escape") setAberto(false);
        }
        document.addEventListener("keydown", apertarEsc);
        return () => document.removeEventListener("keydown", apertarEsc);
    }, []);

    async function enviar(evento) {
        evento.preventDefault();
        const pergunta = texto.trim();
        if (!pergunta || enviando) return;

        const historico = mensagens.slice(-10).map(({ autor, texto }) => ({ autor, texto }));

        setMensagens((atual) => [...atual, { id: Date.now(), autor: "usuario", texto: pergunta }]);
        setTexto("");
        setEnviando(true);

        let resposta;
        try {
            resposta = await enviarMensagem(pergunta, historico);
        } catch {
            resposta = "Não consegui responder agora. Tente novamente em instantes.";
        }

        setMensagens((atual) => [...atual, { id: Date.now() + 1, autor: "agente", texto: resposta }]);
        setEnviando(false);
    }

    return (
        <>
            {aberto && (
                <section className="chatbot" role="dialog" aria-label="Chat de atendimento">
                    <header className="chatbot-topo">
                        <img src={mascote} alt="" className="chatbot-mascote" />
                        <button
                            type="button"
                            className="chatbot-fechar"
                            onClick={() => setAberto(false)}
                            aria-label="Fechar chat"
                        >
                            <i className="fi fi-rr-cross-small"></i>
                        </button>
                    </header>

                    <div className="chatbot-mensagens" aria-live="polite">
                        {mensagens.map((mensagem) => (
                            <div key={mensagem.id} className={`chatbot-mensagem ${mensagem.autor}`}>
                                <span className="chatbot-autor">
                                    {mensagem.autor === "agente" ? NOME_AGENTE : "Você"}
                                </span>
                                <p>{mensagem.texto}</p>
                            </div>
                        ))}

                        {enviando && (
                            <div className="chatbot-mensagem agente">
                                <span className="chatbot-autor">{NOME_AGENTE}</span>
                                <p className="chatbot-digitando">Digitando...</p>
                            </div>
                        )}

                        <div ref={fimDaLista} />
                    </div>

                    <form className="chatbot-rodape" onSubmit={enviar}>
                        <input
                            type="text"
                            placeholder="Escreva aqui..."
                            value={texto}
                            onChange={(e) => setTexto(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="chatbot-enviar"
                            disabled={!texto.trim() || enviando}
                            aria-label="Enviar mensagem"
                        >
                            <i className="fi fi-rr-paper-plane"></i>
                        </button>
                    </form>
                </section>
            )}

            <button
                type="button"
                className="chatbot-abrir"
                onClick={() => setAberto(!aberto)}
                aria-expanded={aberto}
                aria-label={aberto ? "Fechar chat" : "Abrir chat"}
            >
                <img src={mascote} alt="" />
            </button>
        </>
    );
}

export default Chatbot;