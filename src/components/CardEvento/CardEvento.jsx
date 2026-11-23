import { Link } from "react-router-dom";
import "./CardEvento.css";

function CardEvento({ evento }) {
    const data = new Date(evento.data).toLocaleDateString("pt-BR");

    return (
        <Link to={`/evento/${evento.id}`} className="card-evento">
            <img src={evento.imagem} alt="" className="card-evento-imagem" />

            <div className="card-evento-info">
                <h3 className="card-evento-titulo">{evento.titulo}</h3>
                <p className="card-evento-local">
                    {evento.cidade} - {evento.estado}
                </p>
                <p className="card-evento-data">{data}</p>
            </div>
        </Link>
    );
}

export default CardEvento;