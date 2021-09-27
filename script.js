let order = [];
let clickedOrder = [];
let score = 0;

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor = (element, number) => {
    number *= 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    });
}

let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nCorreto! Vamos para o próximo nível.`);
        nextLevel();
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;

    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

let createColorElement = (color) => {
    switch(color) {
        case 0:
            return  green;
        case 1:
            return red;
        case 2: 
            return yellow;
        case 3:
            return blue;             
    }
}

let nextLevel = () => {
    score++;
    shuffleOrder();
}

let gameOver = () => {
    alert(`Você perdeu!\nSua pontuação: ${score}\nClique em OK para continuar e iniciar um novo jogo.`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert('Bem vido ao Genius!');
    score = 0;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();
