function verificar(num){
let mensagem; 
if ( num > 0 ){ mensagem = "Numero positivo"
} else if ( num < 0 ) {mensagem = "Numero negativo"}
else {mensagem = "Numero é 0"}
return mensagem
}

let num = parseFloat(prompt("informe um numero: "))

let resultado = verificar(num)
document.write(resultado)