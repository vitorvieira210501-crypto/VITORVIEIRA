function velocidade(v) {

    let veloz
    if ( v > 80 ) { veloz = "Acima da velocidade "}
    else {veloz = "Velocidade normal"}
    return veloz
}

let velocimetro = parseInt(prompt("Informe a velocidade: "))
let result = velocidade(velocimetro)
document.write(result)