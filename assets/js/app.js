const buttons = document.querySelectorAll('button')
const screen = document.getElementById("screen")

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText

        if (+value >= 0) {
            console.log(`Número: ${value}`)
            screen.innerText += value

        }

        if (value == '=' || value == '-' || value == '+' || value == 'x' || value == '/' || value == '.') {
            console.log(`Operador: ${value}`)
            screen.innerText += value
        }
    })
});


function Limpar() {
    screen.innerText = ''
}