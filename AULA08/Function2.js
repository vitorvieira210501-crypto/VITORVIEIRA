function soma(a, b) {
    return a + b;
}
function subtracao(a, b) {
    return a - b;
}
function multiplicacao(a, b) {
    return a * b;
}
function divisao(a, b) {
    return a / b;
}

let n1 = parseInt(prompt("DIGITE UM VALOR PARA SOMA: "))
let n2 = parseInt(prompt("DIGITE UM VALOR PARA SOMA : "))
let resultado = soma(n1, n2)

alert(" a soma é: " + resultado)


let n3 = parseInt(prompt("DIGITE UM VALOR PARA SUBTRACAO: "))
let n4 = parseInt(prompt("DIGITE UM VALOR PARA SUBTRACAO: "))
let resultado1 = subtracao(n3, n4)

alert(" a subtracao é: " + resultado1)

let n5 = parseInt(prompt("DIGITE UM VALOR PARA MULTIPLICACAO: "))
let n6 = parseInt(prompt("DIGITE UM VALOR PARA MULTIPLICACAO: "))
let resultado2 = multiplicacao(n5, n6)

alert(" a multiplicacao é: " + resultado2)

let n7 = parseInt(prompt("DIGITE UM VALOR PARA DIVISAO: "))
let n8 = parseInt(prompt("DIGITE UM VALOR PARA DIVISAO: "))
let resultado3 = divisao(n7, n8)

alert(" a divisao é: " + resultado3)


