function contar(a) {
    let entre;
    if (a > 1 && a <= 100) {
        entre = "Esse Número está entre 1 e 100 "
    } return entre
}

let numero = parseInt(prompt("Informe um numero: "))
let result = contar(numero)
document.write(result)