import { api } from "./api";

const ROTA = "/api/wavepass/evento";

// Agrupa as sessões soltas por dia: [{ data: "2026-11-28T00:00:00", horarios: ["19:00", "22:00"] }]
function agruparSessoes(sessoes = []) {
    const dias = {};

    sessoes.forEach(({ dataHora }) => {
        const [dia, hora] = dataHora.split("T");
        (dias[dia] ??= []).push(hora.slice(0, 5));
    });

    return Object.entries(dias)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([dia, horarios]) => ({ data: `${dia}T00:00:00`, horarios: horarios.sort() }));
}

function mapearEvento(dto) {
    const datas = (dto.sessoes ?? []).map((s) => s.dataHora).sort();

    return {
        id: dto.id,
        titulo: dto.nome,
        imagem: dto.imagemCard ?? dto.imagemBanner,
        banner: dto.imagemBanner ?? dto.imagemCard,
        local: dto.local,
        cidade: dto.cidade,
        estado: dto.estado,
        data: datas[0],
        categoria: dto.categoria,
        preco: Number(dto.precoMinimo ?? 0),
        descricao: dto.descricaoCompleta ?? dto.descricaoCurta,
        cor: dto.corTema,
        sessoes: agruparSessoes(dto.sessoes),
    };
}

export async function listarEventos() {
    const pagina = await api(`${ROTA}?size=100`);
    return pagina.content.map(mapearEvento);
}

export async function buscarEvento(id) {
    return mapearEvento(await api(`${ROTA}/${id}`));
}