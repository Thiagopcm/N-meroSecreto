let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();  
let tentativas = 1;

function exibirTexto(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMsgInicial(){
exibirTexto('h1', 'Jogo do número secreto');
exibirTexto('p','Escolha um número entre 1 e 10');
}

exibirMsgInicial();

function verificarChute() {
    let chute = document.querySelector('input').value
    
    if (chute == numeroSecreto){
        exibirTexto('h1', 'Você Acertou!!');
        let qntTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let msgTentativa =  `Parabéns, você descobriu o número secreto em ${tentativas} ${qntTentativa}!`
        exibirTexto('p', msgTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if(chute > numeroSecreto){
        exibirTexto('p', 'O numero secreto é menor');
    }else{ 
        exibirTexto('p', 'O numero secreto é maior');
    }
    tentativas++;
    limparCampo();
}

function numeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementos = listaDeNumerosSorteados.length;
    if(quantidadeElementos == numeroLimite){
        listaDeNumerosSorteados = [];
    } 
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    }else{
        listaDeNumerosSorteados.push();
        return numeroEscolhido
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMsgInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);
}