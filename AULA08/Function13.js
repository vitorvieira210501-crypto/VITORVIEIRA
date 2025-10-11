function parouimpar(a){
    let mensagem;
    if ( a % 2 == 0) {mensagem = " esse numero é par "}
    else {mensagem = "esse numero é impar"}
    return mensagem
}

let a = parseInt(prompt("Informe um numero: "))
let result = parouimpar(a)
document.write(result)