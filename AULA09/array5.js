let alunos = []
let notas = []

for ( let i = 0; i < 3; i++){
    let nome = prompt("Digite o nome do aluno " + ( i + 1) +":")
    let nota = parseFloat(prompt("Infome sua nota: " + nome + ":"))

    alunos.push(nome)
    notas.push(nota)
}

let somanotas = 0
for ( let i = 0; i < notas.length; i++){
    somanotas += notas[i];
}


let mediaturma = somanotas / notas.length
console.log("a media é: " + mediaturma.toFixed(2))

console.log("Notas dos alunos")
for ( let i = 0; i < alunos.length; i++){
    console.log (alunos[i]) + ":" + notas[i]
}


