const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com um mapa do tesouro, nele esta varios lugares que você tem que atravessar. Oque ele deve fazer?",
        alternativas: ["ir embora", "No início ficou com medo e recusou essa aventura. "
            },
            {
                texto: "Partiu Nessa!",
                afirmacao: "Você vai a Aventura"
            }
        ]
    },
    {
        enunciado: " o mapa leva para a floresta, assim que chega vê que há um cercado, mas acha um alicate ali perto"
        alternativas: [
            {
                texto: "Utiliza uma ferramenta"
                afirmacao: "vc corta o cercado e vai para a floresta"
                "
            },
            {
                texto: "ignorar e voltar",
                afirmacao: "você volta para a casa"
            }
        ]
    },
    {
        enunciado: "após você seguir a floresta você encontra 2 caminhos
            {
                texto: "caminho 1",
                afirmacao: "você acha a caverna"
            },
            {
                texto: "caminho 2",
                afirmacao: "você não acha a caverna"
            }
        ]
    },
    {
        enunciado: "o mapa do tesouro te leva para a caverna, você segue e acha um 'X' ",
        alternativas: [
            {
                texto: "cavar",
                afirmacao: "você acha um baú"
            },
            {
                texto: "não cavar",
                afirmacao: "você não cava"
        ]
    },
    {
        enunciado: "você pega o baú do tesouro após abrir, acha vários tesouros, mas vocÊ se pergunta sobre oque deve fazer.",
        alternativas: [
            {
                texto: "Doar todo o tesouro para a caridade",
                afirmacao: "Após fazer isso, você se sente bem com isso, e as crianças carentes ficam felizes!
            },
            {
                texto: "Gastar tudo no Tigrinho",
                afirmacao: "Ele ameaçou jogar a carta mas não jogou e perdeu tudo, FIM! (OTÁRIO) "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();