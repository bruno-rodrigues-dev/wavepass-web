import { useState } from "react";
import "./Eventos.css";
import CardEvento from "../CardEvento/CardEvento";
import FiltroValor from "../FiltroValor/FiltroValor";
import { eventos } from "../../data/eventos";
import { normalizarTexto } from "../../utils/normalizarTexto";

function Eventos({ categoria }) {
    const [faixa, setFaixa] = useState(null);
    const [local, setLocal] = useState("");

    const eventosFiltrados = eventos.filter((evento) => {
        const passaCategoria = !categoria || evento.categoria === categoria;

        const passaValor = !faixa || (evento.preco >= faixa.min && evento.preco < faixa.max);

        const textoLocal = `${evento.local} ${evento.cidade} ${evento.estado}`;
        const passaLocal = normalizarTexto(textoLocal).includes(normalizarTexto(local));

        return passaCategoria && passaValor && passaLocal;
    });

    return (
        <section className="eventos">
            <h2 className="eventos-titulo">Eventos</h2>

            <div className="eventos-filtros">
                <FiltroValor faixa={faixa} onSelecionar={setFaixa} />

                <label className="eventos-filtro">
                    <input
                        type="text"
                        placeholder="Filtrar por local"
                        value={local}
                        onChange={(e) => setLocal(e.target.value)}
                    />
                    <i className="fi fi-rr-marker"></i>
                </label>
            </div>

            {eventosFiltrados.length > 0 ? (
                <div className="eventos-lista">
                    {eventosFiltrados.map((evento) => (
                        <CardEvento key={evento.id} evento={evento} />
                    ))}
                </div>
            ) : (
                <p className="eventos-vazio">Nenhum evento encontrado com esses filtros.</p>
            )}
        </section>
    );
}

export default Eventos;