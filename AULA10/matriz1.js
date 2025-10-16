let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

console.log(matriz)
console.log(matriz[0][1]);

matriz[1][1] = 99;
console.log(matriz)

//percorrer matriz

for ( let i = 0; i < matriz.length; i++){
    for ( let j = 0; j < matriz[i].length; j++){
    console.log(matriz[i][j])}
}

let media = 0
media = nota/nota.length