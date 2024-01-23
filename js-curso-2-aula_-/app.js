
let numeroSecreto = geraNumeroAleatorio();

function exibirTexto(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTexto('p','Escolha um número entre 1 e 10:');
exibirTexto('h1','Jogo do Número Screto');

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTexto('h1', 'Você Ganhou!');
        exibirTexto('p','Parabéns! Você acertou!');
    } else{
        if(chute > numeroSecreto){
            exibirTexto('h1', 'Não foi dessa vez!');
            exibirTexto('p','O número secreto é menor que seu chute!');
        }else {
            exibirTexto('h1', 'Não foi dessa vez!');
            exibirTexto('p', 'O Número Secreto é maior que seu chute!');
        }
    }
}

function geraNumeroAleatorio(){
    return parseInt(Math.random()*10+1)
}