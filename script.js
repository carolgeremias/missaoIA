const caixaPrincipal = document.querySelector(".caixa-Principal");
const caixaPerguntas = document.querySelector(".caixa-Perguntas");
const caixaAlternativas = document.querySelector(".caixa-Alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:Arthur achou o mapa do tesouro, e partiu para caçar O Tesouro, e viu que no mapa tem riscos marrons e verdes
        alternativas: [
            { 
            texto: "ir para a floresta"
            afirmação: "afirmação"
            },
             { 
            texto: "ir para a prisão"
            afirmação: "afirmação"
            },
        ]
    },
    {
        enunciado:Arthur caminhou pela floresta, viu que no mapa, tinha uma caverna e seguindo ele achou a caverna.
        alternativas: [
            "ir para a caverna"
            "ir para embora"
        ]
    },
    {
        enunciado:
        alternativas: [
            "ir para a floresta"
            "ir para a prisão"
        ]
    },
    }
];
let  atual = 0;
let perguntaAtual;

function mostraPergunta ( ) {
    pergunraAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntas.enunciado;
}

mostraPergunta ();