
let numeroSecreto = geraNumeroAleatorio();

function exibirTexto(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTexto('p','Escolha um número entre 1 e 10:');
exibirTexto('h1','Jogo do Número Screto');

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

function geraNumeroAleatorio(){
    return parseInt(Math.random()*10+1)
}