function contarimpares(n) {
    let qtdimpar = 0
    for (i = 1; i <= n; i++) {
        if (i % 2 != 0) qtdimpar++
    } return qtdimpar
}

let n = parseInt(prompt("Informe um numero: "))
let qtd = contarimpares(n)
alert("A QUANTIDADE DE IMPARES É: " + qtd)