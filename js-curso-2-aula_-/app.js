let listaNumerosSorteados = [];
let quantidadeMaxima = 10;
let numeroSecreto = geraNumeroAleatorio();
let contadorTentativas = 1;

function exibirTexto(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTexto('h1','Jogo do Número Secreto');
    exibirTexto('p','Escolha um número entre 1 e 10:');
}

exibirMensagemInicial();


function verificarChute(){

    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){

        exibirTexto('h1', 'Você Ganhou!');
        let palavraTentativa = 1 ? 'tentativa':'tentativas';
        let mensagemFinal = `Parabéns! Você acertou em ${contadorTentativas} ${palavraTentativa}!`;
        exibirTexto('p',mensagemFinal);
        document.getElementById('reiniciar').removeAttribute('disabled');

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
    numeroAVerificar = parseInt(Math.random()*quantidadeMaxima+1);
    let quantidadeSorteados = listaNumerosSorteados.length;

    if(quantidadeSorteados == quantidadeMaxima){
        listaNumerosSorteados=[];
    }

    if(listaNumerosSorteados.includes(numeroAVerificar)){
        return geraNumeroAleatorio();
    }else{
        listaNumerosSorteados.push(numeroAVerificar);
        console.log(listaNumerosSorteados);
        return numeroAVerificar;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ' ';
}

function reiniciarJogo(){
    numeroSecreto = geraNumeroAleatorio();
    limparCampo();
    contadorTentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
