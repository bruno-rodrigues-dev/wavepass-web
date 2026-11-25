import wicked from "../assets/images/wicked.png"
import gastronomia from "../assets/images/gastronomia.avif"
import nba from "../assets/images/poster-nba.webp"
import porshefest from "../assets/images/porschefest.jpg"
import luna from "../assets/images/luna.png";

export const eventos = [
    {
        id: 1,
        titulo: "Wicked - O Musical",
        imagem: wicked,
        local: "Teatro Renault",
        cidade: "São Paulo",
        estado: "SP",
        data: "2026-11-28T19:30:00",
        categoria: "teatro",
        preco: 150,
        descricao: "A história não contada das bruxas de Oz! Muito antes de Dorothy chegar, duas jovens se conhecem na Terra de Oz: uma nascida com pele verde-esmeralda, inteligente e incompreendida; a outra, linda, ambiciosa e muito popular. Acompanhe a improvável amizade entre Elphaba e Glinda neste grande fenômeno da Broadway.",
        sessoes: [
            { data: "2026-11-28T00:00:00", horarios: ["15:00", "19:30"] },
            { data: "2026-11-29T00:00:00", horarios: ["15:00", "19:30"] },
        ],
    },

    {
        id: 2,
        titulo: "NBA House Game Night",
        imagem: nba,
        local: "Parque Villa-Lobos",
        cidade: "São Paulo",
        estado: "SP",
        data: "2027-12-19T20:00:00",
        categoria: "esportes",
        preco: 120,
        descricao: "A casa oficial da NBA no Brasil está de volta! Venha viver a emoção das partidas ao vivo em telões gigantes, participar de desafios na quadra oficial, conferir shows exclusivos no intervalo e aproveitar experiências interativas para toda a família.",
        sessoes: [
            { data: "2027-12-19T00:00:00", horarios: ["18:00", "20:00"] },
            { data: "2027-12-20T00:00:00", horarios: ["18:00", "20:00"] },
        ],
    },

    {
        id: 3,
        titulo: "Fest Gastronomia - Rio de Janeiro",
        imagem: gastronomia,
        local: "Parque de Eventos",
        cidade: "Belford Roxo",
        estado: "RJ",
        data: "2027-03-21T10:00:00",
        categoria: "gastronomia",
        preco: 35,
        descricao: "O maior encontro gastronômico da Baixada Fluminense! Saboreie pratos exclusivos assinados por chefs renomados, food trucks artesanais, cervejas especiais e apresentações musicais ao vivo durante todo o dia.",
        sessoes: [
            { data: "2027-03-21T00:00:00", horarios: ["10:00", "16:00"] },
            { data: "2027-03-22T00:00:00", horarios: ["10:00", "16:00"] },
        ],
    },

    {
        id: 4,
        titulo: "Porsche Fest",
        imagem: porshefest,
        local: "Expocentro Balneário Camboriú",
        cidade: "Balneário Camboriú",
        estado: "SC",
        data: "2027-04-15T10:00:00",
        categoria: "exposicoes",
        preco: 90,
        descricao: "Um evento imperdível para os apaixonados por velocidade e engenharia automotiva! Exposição de modelos clássicos e superesportivos da Porsche, simuladores de corrida, loja oficial e área gourmet.",
        sessoes: [
            { data: "2027-04-15T00:00:00", horarios: ["10:00", "15:00"] },
            { data: "2027-04-16T00:00:00", horarios: ["10:00", "15:00"] },
        ],
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