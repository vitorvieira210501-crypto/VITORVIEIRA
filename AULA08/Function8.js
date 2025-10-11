function converter(metros){
 return (metros * 100)
}

let metros = parseFloat(prompt("Informe um numero: "))
let centimetros = converter(metros)
document.write(("A conversão pra CM é: " + centimetros))