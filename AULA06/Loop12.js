let salario;
let somasalf = 0;
let somasalm = 0;
let qtdf = 0;
let qtdm = 0;
let control = "continua";
let sexo;

while (control != "fim") {
    salario = Number(prompt("Qual é o salario ? "))
    sexo = prompt("Qual é o sexo ? ")
    if (sexo == "f" || sexo == "f") { qtdf++; somasalf += salario; }
    else if (sexo == "m" || sexo == "m") { qtdm++; somasalm += salario; }
    else { (alert("sexo invalido")) }
    control = prompt("Deseja encerrar o programa")
}

document.write("qtd de mulheres: " + qtdf + " salarios femininos: " + somasalf + "<br>")
document.write("qtd de homens: " + qtdm + " salarios masculinos: " + somasalm + "<br>")
document.write("media dos salarios: " + (somasalf + somasalm) / (qtdf + qtdm) + "<br >")
