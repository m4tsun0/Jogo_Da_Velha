var jogador, vencedor = null; // X, O ou nulo;

var jogadorSelecionado = document.getElementById('jogador-selecionado'); // Vê qual o jogador está selecionado;
var vencedorSelecionado = document.getElementById('vencedor-selecionado'); // Vê qual vencedor está selecionado;

var quadrados = document.getElementsByClassName('quadrado'); // Verifica os quadrados;

mudarJogador('X'); // Inicia o jogo com o jogador X;

function selecionaQuadrado(id){

    if(vencedor !== null){ // Impede que o jogo continua depois de ganho;
        return;
    }
    
    var quadrado = document.getElementById(id); // Pega o quadrado do Id;
    if(quadrado.innerHTML !== '-'){
        return; // Impede que fique mudando o mesmo quadrado toda hora;
    }

    quadrado.innerHTML = jogador; // Altera o texto para X ou O;
    quadrado.style.color = '#000'; // Muda a cor do texto que estava transparente;

    if(jogador === 'X') { // Caso o jogador seja X, mudará para O;
        jogador = 'O';
    } else { // Caso seja O, mudará para X;
        jogador = 'X';
    }

    mudarJogador(jogador);
    confereVitoria();
};

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
};

function confereVitoria(){ // Confere se as fileiras foram preenchidas para a vitória;
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    // Sequências de vitórias válidas;
    if(confereSequencia(quadrado1, quadrado2, quadrado3)){
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    if(confereSequencia(quadrado4, quadrado5, quadrado6)){
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }

    if(confereSequencia(quadrado7, quadrado8, quadrado9)){
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

    if(confereSequencia(quadrado1, quadrado4, quadrado7)){
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }

    if(confereSequencia(quadrado2, quadrado5, quadrado8)){
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }

    if(confereSequencia(quadrado3, quadrado6, quadrado9)){
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }

    if(confereSequencia(quadrado1, quadrado5, quadrado9)){
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }

    if(confereSequencia(quadrado3, quadrado5, quadrado7)){
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
        return;
    }
};

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
};

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) { // Muda os quadrados para verde quando forem iguais;
    quadrado1.style.background = '#0f0';
    quadrado2.style.background  = '#0f0';
    quadrado3.style.background  = '#0f0';
};

function confereSequencia(quadrado1, quadrado2, quadrado3){
    var igual = false;

    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && 
        quadrado2.innerHTML === quadrado3.innerHTML){ // Verifica se são iguais
        igual = true; // Atribui true para igual;
    }

    return igual;
};

function reiniciar(){ // Limpa tudo e recomeça o jogo;
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for(var i = 1; i <= 9; i++){
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
};