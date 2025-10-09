let nome;
let idade;
let maisvelho
let maioridade = 0;

for (let i = 1; i <= 5; i++) {
    nome = prompt("QUAL SEU NOME ?")
    idade = Number(prompt("QUAL A SUA IDADE ?"))
    if (idade > maioridade) {
        maioridade = idade
        maisvelho = nome
    }
}
document.write("O MAIS VELHO TEM: " + maioridade + "ANOS " + " E SEU NOME É: " + maisvelho)