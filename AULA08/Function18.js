function alturaepeso(peso, altura) {
    let imc = peso / (altura * altura)
    return imc
}

let peso = parseInt(prompt("Informe seu peso: "))
let altura = parseFloat(prompt("Informe sua altura: "))

let result = alturaepeso(peso, altura)
document.write(result)