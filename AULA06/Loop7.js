let soma = 0


for (let i = 1; i <= 5; i++) {
    let num = Number(prompt("Informe um numero: "))
    soma = num + soma
}
document.write(soma + "<br>")


//USANDO WHILE 

let num1; let som = 0; cont = 0;

while (cont < 5) {
    num1 = Number(prompt("Digite um numero"))
    som += num1
    cont++;

}
document.write("Total da soma é", som)