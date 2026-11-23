function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

export function formatarData(dataIso) {
    const data = new Date(dataIso);

    const semana = data.toLocaleDateString("pt-BR", { weekday: "long" }).split("-")[0];
    const mes = data.toLocaleDateString("pt-BR", { month: "short" }).replace(".", "");
    const hora = data.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

    return `${capitalizar(semana)}, ${data.getDate()} de ${capitalizar(mes)} às ${hora}`;
}

export function formatarDiaMes(dataIso) {
    const data = new Date(dataIso);
    const mes = data.toLocaleDateString("pt-BR", { month: "short" }).replace(".", "");

    return `${data.getDate()} ${capitalizar(mes)}`;
}