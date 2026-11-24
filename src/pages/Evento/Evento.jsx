import { useState } from "react";
import { useParams } from "react-router-dom";
import { DayPicker } from "react-day-picker";
import { ptBR } from "react-day-picker/locale";
import "react-day-picker/style.css";
import "./Evento.css";
import Navbar from "../../components/Navbar/Navbar";
import NotFound from "../NotFound/NotFound";
import { eventos } from "../../data/eventos";
import { formatarDiaMes } from "../../utils/formatarData";
import { useCorDoEvento } from "../../hooks/useCorDoEvento";

function mesmoDia(a, b) {
    return a.toDateString() === b.toDateString();
}

function Evento() {
    const { id } = useParams();
    const [diaSelecionado, setDiaSelecionado] = useState(undefined);

    const evento = eventos.find((item) => String(item.id) === id);
    const cor = useCorDoEvento(evento?.imagem);

    if (!evento) return <NotFound />;

    const sessoes = evento.sessoes ?? [];
    const diasComSessao = sessoes.map((sessao) => new Date(sessao.data));

    const sessoesVisiveis = diaSelecionado
        ? sessoes.filter((sessao) => mesmoDia(new Date(sessao.data), diaSelecionado))
        : sessoes;

    return (
        <>
            <Navbar />
            <main
            className="evento"
            style={{
                "--cor-evento": cor.principal,
                "--cor-evento-texto": cor.texto,
                }}
            >
                
                <img src={evento.imagem} alt={evento.titulo} className="evento-banner" />

                <h1 className="evento-titulo">{evento.titulo}</h1>
                <p className="evento-local">
                    {evento.local} - {evento.cidade}, {evento.estado}
                </p>
                <p className="evento-descricao">{evento.descricao}</p>

                <div className="evento-corpo">
                    <section className="evento-sessoes">
                        {sessoesVisiveis.map((sessao) => (
                            <div key={sessao.data} className="evento-sessao">
                                <div className="evento-sessao-info">
                                    <span className="evento-sessao-data">
                                        {formatarDiaMes(sessao.data)}
                                    </span>
                                    <span className="evento-sessao-nome">{evento.titulo}</span>
                                </div>

                                <div className="evento-horarios">
                                    {sessao.horarios.map((horario) => (
                                        <button key={horario} type="button" className="evento-horario">
                                            {horario}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>

                    <aside className="evento-calendario">
                        <DayPicker
                            mode="single"
                            locale={ptBR}
                            selected={diaSelecionado}
                            onSelect={setDiaSelecionado}
                            defaultMonth={diasComSessao[0]}
                            modifiers={{ comSessao: diasComSessao }}
                            modifiersClassNames={{ comSessao: "dia-com-sessao" }}
                            disabled={(dia) => !diasComSessao.some((d) => mesmoDia(d, dia))}
                        />
                    </aside>
                </div>
            </main>
        </>
    );
}

export default Evento;