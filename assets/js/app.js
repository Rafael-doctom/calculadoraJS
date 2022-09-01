const buttons = document.querySelectorAll('button');
const screen = document.getElementById("screen");
const calc = document.getElementById('calc');

function insert(valor) {
    screen.innerHTML += valor;
};

calc.addEventListener('click', () => {
    screen.innerHTML = eval(screen.innerHTML);
});

buttons.forEach((button) => {
    button.addEventListener('click', (valor) => {

    })
});


function AllClear() {
    screen.innerText = '';
};



