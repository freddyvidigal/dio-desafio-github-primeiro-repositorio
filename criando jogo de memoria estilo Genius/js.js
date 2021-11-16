let orden = [];
let clickedOrden = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//criando ordem aleatoria
let shuffleOrden = () => {
    let colorOrden = Math.floor(Math.random() * 4);
    orden[orden.length] = colorOrden;
    clickedOrden = [];

    for (let i in orden) {
        let elementColor = CreateColorElement(orden[i]);
        ligthColor(elementColor, Number(i) + 1);
    }
}
// acende proxima cor
let ligthColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('select');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('select');
    });
}
// checagem de botoes se saõ os mesmos
let checkOrden = () => {
    for (let i in clickedOrden) {
        if (clickedOrden[i] != orden[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrden.length == orden.length) {
        alert(`pontuação: ${score}\n Você acertou! Iniciando próximo nível`);
        nextlevel();
    }
}
// função para o clique do usuario
let click = (color) => {
    clickedOrden[clickedOrden.length] = color;
    CreateColorElement(color).classList.add('select');

    setTimeout(() => {
        CreateColorElement(color).classList.remove('select');

        checkOrden();
    }, 250);


}

// função que retorna a cor
let CreateColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}
//função para proximo nivel
let nextlevel = () => {
    score++;
    shuffleOrden();
}
// função para game over
let gameOver = () => {
    alert(`pontuação: ${score}!\nVocÊ perdeu o jogo!\nClique em oh para iniciar um novo jogo`);
    orden = [];
    clickedOrden = [];

    playGame();
}

//inicio do jogo
let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!')
    score = 0;

    nextlevel();
}

green.onclik = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclik = () => click(3);


playGame();