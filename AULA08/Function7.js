function calculo(a, b) {
    return (a + b) / 2
}
let nota1 = parseFloat(prompt("Informe a 1 nota: "))
let nota2 = parseFloat(prompt("Informe a 2 nota: "))
let media = calculo(nota1, nota2)

calculo(media)
document.write(media)

