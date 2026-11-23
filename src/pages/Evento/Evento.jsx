import { useParams } from "react-router-dom";
import "./Evento.css";
import Navbar from "../../components/Navbar/Navbar";
import NotFound from "../NotFound/NotFound";
import { eventos } from "../../data/eventos";
import { formatarDiaMes } from "../../utils/formatarData";

function Evento() {
    const { id } = useParams();
    const evento = eventos.find((item) => String(item.id) === id);

    if (!evento) return <NotFound />;

    return (
        <>
            <Navbar />
            <main className="evento">
                <img src={evento.imagem} alt={evento.titulo} className="evento-banner" />

                <h1 className="evento-titulo">{evento.titulo}</h1>
                <p className="evento-local">
                    {evento.local} - {evento.cidade}, {evento.estado}
                </p>
                <p className="evento-descricao">{evento.descricao}</p>

                <section className="evento-sessoes">
                    {evento.sessoes?.map((sessao) => (
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
            </main>
        </>
    );
}

export default Evento;