
let numeroSecreto = geraNumeroAleatorio();
let contadorTentativas = 1;

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
        let palavraTentativa = 1 ? 'tentativa':'tentativas';
        let mensagemFinal = `Parabéns! Você acertou em ${contadorTentativas} ${palavraTentativa}!`;
        exibirTexto('p',mensagemFinal);
    } else{
        if(chute > numeroSecreto){
            exibirTexto('h1', 'Não foi dessa vez!');
            exibirTexto('p','O número secreto é menor que seu chute!');
        }else {
            exibirTexto('h1', 'Não foi dessa vez!');
            exibirTexto('p', 'O Número Secreto é maior que seu chute!');
        }
        contadorTentativas++;
        limparCampo();
    }
}

function geraNumeroAleatorio(){
    return parseInt(Math.random()*10+1)
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ' ';
}