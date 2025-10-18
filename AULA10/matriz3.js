let oceano = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
]

let linha = Math.floor(Math.random() * 5)
let coluna = Math.floor(Math.random() * 5)
oceano[linha][coluna] = 1;

let vida = 5
while (vida > 0) {
    let linha = parseInt(prompt("Informe um valor para selecionar o tiro: "))
    let coluna = parseInt(prompt("Informe outro valor para selecionar a posicao: "))
    if (oceano[linha][coluna] === 1) {
        alert("ACERTOU O NAVIO!")
     break}
    else {
        vida--;
        if (vida == 0) {
            alert("gameover")

        }
    }

}

