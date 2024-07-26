const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que é IA? ",
        alternativas: [
            {
                texto: "Aplicações que executam tarefas complexas!",
                afirmacao: "Certa, ela pode se comunicar com clientes online, jogar xadrez entre outras coisas!"
            },
            {
                texto: "É um jogo!",
                afirmacao: "Errada, porque não faz sentido ser um jogo e é algo muito complexo para ser um simples jogo!"
            }


        ]
    },
    {
        enunciado: "Quando iniciou o novo ensino médio nos deparamos com uma nova realidade, muita tecnologia inovadora nas novas matérias. Qual foi a sensação de estamos diante dessa situação? ",
        alternativas: [
            {
                texto:  "Que desespero como vamos nos adaptar com tantas tecnologias!",
                afirmacao: "Errada, porque temos muita capacidade de aprender e não devemos ficar preocupados em aprender coisas novas!"
            },
            {
                texto: "Isso é super interessante, finalmente iremos ter contato com as novas tecnologias!",
                afirmacao: "Certa, porque finalmente tivemos acesso a tecnologia a uma nova realidade!"
            }
            
            
        ]
    },
    {
        enunciado: "Como utilizar IA da forma correta para fazer um  trabalho gerando imagens? ",
        alternativas: [
            {
                texto: "Utilizando de maneira correta, sem utilizar imagens prontas e criando a sua própria imagem!",
                afirmacao: "Certa, porque a pessoa estaria realmente criando o seu projeto e aprendendo cada vez mais!"
            },
            {
                texto: "Roubando dados de outras pessoas que já haviam feito antes!",
                afirmacao: "Errada, porque assim a pessoa estaria pegando um projeto pronto e não criando um!"
            }
        ]
    },
    {
        enunciado: "Qual a importância da inteligência artificial nos dias de hoje?",
        alternativas: [
            {
                texto: "Não tem nenhuma importância, visando que só trouxe complicações para a sociedade!",
                afirmacao: "Errado, ´porque ela é de suma importância para a sociedade!"
            },
            {
                texto: "Ela ajuda a resolver problemas mais complexos que os seres humanos não seriam capazes de resolver, e o melhoramento na área da saúde, educação e transportes!",
                afirmacao: "Certa, porque ela é muito importante e com o seu avanço ela trouxe muitos benefícios!"
            }
        ]
    },
    {
        enunciado: "Porque a Inteligência Artificial é muito utilizada nas escolas?",
        alternativas: [
            {
                texto: "Para reduzir os custos de ensino, e ajudar nos processos de avaliações!",
                afirmacao: "Certo, porque diminui os gastos com materiais e a tecnologia ajuda muito no processo de correção das avaliações!"

            },
            {
                texto: "Porque os alunos não tem acesso a livros manuais!",
                afirmacao: "Errada, porque todos os alunos tem acesso a livros!"
            }
        ]
    },


];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;

    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();

}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}

mostraPergunta();