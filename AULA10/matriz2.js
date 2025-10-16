//A: Criar uma matriz 3x3 preenchida com valores numéricos representando as notas dos alunos. 

let nota = [
    [7, 8, 1],
    [1, 6, 2],
    [5, 4, 3],
]
//B Exibir a matriz no console de forma organizada. (usando uma estrutura de repetição)
console.log("Matriz é: " + nota)
for (let i = 0; i < nota.length; i++) {
    console.log(nota[i].join(" | "));

}
//C Calcular e exibir a média das notas de cada aluno

console.log("Média dos alunos: ");
for (let i = 0; i < nota.length; i++) {
    let soma = 0;
    for (let j = 0; j < nota[i].length; j++) {
        soma += nota[i][j];
    }

    let media = soma / nota[i].length;
    console.log("ALUNO " + (i + 1) + " - Média: " + media.toFixed(1));
}

//D Identificar e exibir a maior nota da matriz.
let maior = [0][0]
for (i = 0; i < nota.length; i++) {
    for (let j = 0; j < nota[i].length; j++) {
        if (nota[i][j] > maior) {
            maior = nota[i][j]
        }
    }
}

console.log("A maior nota é: " + maior)

//D Substituir todas as notas menores que 6 por 6, garantindo que nenhum aluno fique com nota abaixo desse valor. 

for (i = 0; i < nota.length; i++) {
    for (let j = 0; j < nota[i].length; j++)
        if (nota[i][j] < 6) {
            nota[i][j] = 6
        }
}

console.log('Notas maiores ou iguais: ' + nota)