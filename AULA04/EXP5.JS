let num1 = Number(prompt("DIGITE UM VALOR: "));
let num2 = Number(prompt("DIGITE OUTRO VALOR: "));
let operador = prompt("+ - / * : ");

if (operador == "+") {
    console.log(num1 + num2);
} else if (operador == "-") { console.log(num1 - num2) }
  else if ( operador == "/"){console.log (num1 / num2)}
  else if (operador == "*"){console.log(num1*num2)}
   else {console.log("operacao invalida")}
