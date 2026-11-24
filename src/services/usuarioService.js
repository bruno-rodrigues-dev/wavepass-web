
const API_URL = "https://wavepass-api.onrender.com/api/wavepass/usuario";

export async function cadastrarUsuario(usuario) {
    const resposta = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    });

    const dados = await resposta.json().catch(() => null);

    if (!resposta.ok) {
        const erros = dados?.erros
            ?.map(erro => erro.mensagem)
            .join(", ");

        throw new Error(
            erros || dados?.mensagem || "Erro ao realizar cadastro."
        );
    }

    return dados;
}