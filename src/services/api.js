const BASE_URL = import.meta.env.VITE_API_URL;

export async function api(caminho, opcoes = {}) {
    const token = localStorage.getItem("token");

    const resposta = await fetch(`${BASE_URL}${caminho}`, {
        ...opcoes,
        headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
            ...opcoes.headers,
        },
        body: opcoes.body ? JSON.stringify(opcoes.body) : undefined,
    });

    if (!resposta.ok) {
        const corpo = await resposta.json().catch(() => ({}));
        const erro = new Error(corpo.mensagem ?? `Erro ${resposta.status}`);
        erro.status = resposta.status;
        erro.campos = corpo.erros ?? [];
        throw erro;
    }

    return resposta.status === 204 ? null : resposta.json();
}