// funcão declarada ( simples )
function mensagemboasvindas(){
  alert ("bem vindo ao curso de programacao")
}

//funcao de parametros 
function cumprimentar(nome){
    alert ("Olá!, " + nome + " seja bem vindo");
}

//funcao de retorno 
function somar(a, b) { 
    return a + b; 

}
// funcao para calcular de forma direta sem retorno 
function calcular(a, b) {
    alert ("a soma é ", a + b)
}

mensagemboasvindas();
cumprimentar("Vitor");
cumprimentar("Alex");
let resultado = somar(1, 2)
alert ("A SOMA É: " + resultado)
calcular(1, 2)
