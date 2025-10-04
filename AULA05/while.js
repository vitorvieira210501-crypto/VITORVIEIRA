// ler dois nuemros e a operacao até que o usuario informe a saida // 

let continua = "s";
let num1, num2;
let operacao;

while (continua == 's') {
  num1 = Number(prompt("INFORME O PRIMEIRO NUMERO:"))
  num2 = Number(prompt("INFORME O SEGUNDO NUMERO: "))
  operacao = prompt("operacao +, -, *, /, <") 

if (operacao == "+") { alert(num1 + num2) }
else if (operacao == "-") { alert ("resultado é " + num1 - num2) }
else if (operacao == "*" ) { alert( "resultado é " + num1 * num2) }
else if (operacao == "/") { alert("resultado é " + num1 / num2) }
else {alert("operacao invalida")}

continua = prompt("Deseja permanecer no programa<s/n>")
}
alert ("programa finalizado");