const buttons = document.querySelectorAll('button')
const screen = document.getElementById("screen")



buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText
        const calc = document.getElementById('calc')



        if (+value >= 0) {
            console.log(`Número: ${value}`)
            screen.innerText += value

        }

        if (value == '-' || value == '+' || value == 'x' || value == '/' || value == '.') {
            console.log(`Operador: ${value}`)
            screen.innerText += value
        }


        calc.addEventListener('click', () => {
            let n1 = Number(value)
            screen.innerText = n1 + n1

        })



    })
});


function Limpar() {
    screen.innerText = ''
}



