function falsoouverdadeiro (m){
  
    let verdadeiro
    if ( m % 5 == 0 ){ verdadeiro = "VERDADE. Esse numero é multiplo de 5 "}
    else {verdadeiro = "FALSO. Esse numero não é multiplo de 5"}
    return verdadeiro
    
}

let numero = parseInt(prompt("Informe um valor: "))
let result = falsoouverdadeiro(numero)
alert(result)