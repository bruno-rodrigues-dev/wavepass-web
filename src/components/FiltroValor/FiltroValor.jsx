import { useState, useRef } from "react";
import "./FiltroValor.css";
import { faixasPreco } from "../../data/faixasPreco";
import { useFecharAoClicarFora } from "../../hooks/useFecharAoClicarFora";

function FiltroValor ({faixa, onSelecionar}) {
    const [aberto, setAberto] = useState(false);
    const area = useRef(null);

    useFecharAoClicarFora(area, () => setAberto(false));

    function escolher(novaFaixa) {
        onSelecionar(novaFaixa);
        setAberto(false)
    }

     return (
        <div className="filtro-valor" ref={area}>
            <button
                type="button"
                className={faixa ? "eventos-filtro selecionado" : "eventos-filtro"}
                aria-expanded={aberto}
                onClick={() => setAberto(!aberto)}
            >
                <span>{faixa ? faixa.rotulo : "Filtrar por valor"}</span>
                <i className="fi fi-rr-dollar"></i>
            </button>

            {aberto && (
                <fieldset className="filtro-valor-painel">
                    <legend className="filtro-valor-titulo">Faixa De Preço (BRL)</legend>

                    {faixasPreco.map((item) => (
                        <label key={item.id} className="filtro-valor-opcao">
                            <input
                                type="radio"
                                name="faixa-preco"
                                checked={faixa?.id === item.id}
                                onChange={() => escolher(item)}
                            />
                            {item.rotulo}
                        </label>
                    ))}

                    {faixa && (
                        <button
                            type="button"
                            className="filtro-valor-limpar"
                            onClick={() => escolher(null)}
                        >
                            Limpar filtro
                        </button>
                    )}
                </fieldset>
            )}
        </div>
    );
}

export default FiltroValor;