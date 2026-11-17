import "./Categorias.css";
import { categorias } from "../../data/categorias";

function Categorias({ selecionada, onSelecionar }) {
    function clicar(id) {
        onSelecionar(selecionada === id ? null : id);
    }

    return (
        <section className="categorias">
            <h2 className="categorias-titulo">Categorias</h2>

            <div className="categorias-lista">
                {categorias.map((categoria) => (
                    <button
                        key={categoria.id}
                        type="button"
                        className={
                            selecionada === categoria.id
                                ? "categoria-botao ativa"
                                : "categoria-botao"
                        }
                        style={{
                            "--cor-1": categoria.cores[0],
                            "--cor-2": categoria.cores[1],
                        }}
                        aria-pressed={selecionada === categoria.id}
                        onClick={() => clicar(categoria.id)}
                    >
                        <img src={categoria.imagem} alt="" className="categoria-imagem" />
                        <span className="categoria-nome">{categoria.nome}</span>
                        <i className="fi fi-rr-arrow-right categoria-seta"></i>
                    </button>
                ))}
            </div>
        </section>
    );
}

export default Categorias;