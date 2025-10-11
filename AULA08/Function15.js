function numeromenor(num1, num2){
    let menor
    if (num1 <= num2 ){ menor = num1}
    else  { menor = num2 } 
    return menor 
}

let num1 = parseInt(prompt("Informe um numero"))
let num2 = parseInt(prompt("Informe um numero"))
let menor = numeromenor(num1, num2)
document.write("O menor numero é: " + menor)