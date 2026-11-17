import { useState, useRef } from "react";
import "./FiltroValor.css";
import { faixasPreco } from "../../data/faixasPreco";
import { useFecharAoClicarFora } from "../../hooks/useFecharAoClicarFora";

function FiltroValor ({faixa, onSelecionar}) {
    const [aberto, setAberto] = useState(false);
    const area = useRef(null);

    useFecharAoClicarFora(area, () => setAberto(false))
}