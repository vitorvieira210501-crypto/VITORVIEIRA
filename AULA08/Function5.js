function contar(numero) {
    for (let i = 1; i <= numero; i++) {
        document.write(i + "<br>")
    }
}
let numero = parseInt(prompt("Informe o numero final da contagem: "))
contar(numero)

