const botoes = document.querySelectorAll('.botao');

const filmes = document.querySelectorAll('.filme');

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

    DesselecionarBotao();

        botao.classList.add("selecionado");

        desselecionarFilme();

        filmes[indice].classList.add("selecionado");
    });
}) ;
function desselecionarFilme() {
    const filmeSelecionado = document.querySelector(".filme.selecionado");
    filmeSelecionado.classList.remove("selecionado");
}

function DesselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

