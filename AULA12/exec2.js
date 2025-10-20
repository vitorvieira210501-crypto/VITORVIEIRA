//4 numero no array e calcule a media 
let numero = []
let soma = 0;

for ( let i = 0; i < 4; i++){
    let n = parseFloat(prompt("Informe um numero: "))
    numero.push(n)
    soma = soma + n
}

let media = soma / numero.length
console.log("a media é: " + media )
console.log("o conteudo do array é: " + numero)