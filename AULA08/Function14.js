function numeromaior(num1, num2, num3) {
   let maior;
   if ( num1 >= num2 && num1 >= num3 ){maior = num1}
   else if (num2 >= num1 && num2 >= num3 ) {maior = num2}
   else {maior = num3}
   return maior;
}

let n1= parseInt(prompt("infome um numero"))
let n2= parseInt(prompt("infome um numero"))
let n3= parseInt(prompt("infome um numero"))
let maior = numeromaior(n1, n2, n3)
document.write("O maior número é: "+ maior)