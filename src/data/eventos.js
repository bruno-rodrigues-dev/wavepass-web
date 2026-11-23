import wicked from "../assets/images/wicked.png"
import gastronomia from "../assets/images/gastronomia.avif"
import nba from "../assets/images/poster-nba.webp"
import porshefest from "../assets/images/porschefest.jpg"
import luna from "../assets/images/luna.png";

export const eventos = [
    {
        id: 1,
        titulo: "Wicked - A História Não Contada das Bruxas de Oz",
        imagem: wicked,
        cidade: "São Paulo",
        estado: "SP",
        data: "2027-01-22T22:00:00",
    },

    {
        id: 2,
        titulo: "NBA House Game Night",
        imagem: nba,
        cidade: "São Paulo",
        estado: "SP",
        data: "2027-12-19T20:00:00",
    },

    {
        id: 3,
        titulo: "Fest Gatronomia - Rio de Janeiro",
        imagem: gastronomia,
        cidade: "Belford Roxo",
        estado: "RJ",
        data: "2027-03-21T10:00:00",
    },

    {
        id: 4,
        titulo: "Porsche Fest",
        imagem: porshefest,
        cidade: "Balneário Camburiu",
        estado: "SC",
        data: "2027-04-15T10:00:00",
    },

    {
    id: 5,
    titulo: "Luna Dance Club - Edifício Martinelli",
    imagem: luna,
    local: "Edifício Martinelli",
    cidade: "São Paulo",
    estado: "SP",
    data: "2026-11-28T23:00:00",
    categoria: "festas",
    preco: 80,
    descricao: "Nos encontramos mais uma vez no primeiro arranha-céu da cidade, o centenário Edifício Martinelli! Separamos as músicas mais dançantes do Indie Pop e somamos a tudo o que move os nossos esqueletos com muito Pop, Disco e House. Tudo isso em formato Boiler Room.",
    sessoes: [
        { data: "2026-11-28T00:00:00", horarios: ["19:00", "22:00"] },
        { data: "2026-12-05T00:00:00", horarios: ["19:00", "22:00"] },
    ],
},

];