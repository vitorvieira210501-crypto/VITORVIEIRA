function tabuada(t) {
    let resultado = "" 
    for (let i = 1; i <= 10; i++) {
        resultado += (t + "x" + i + "=" + t*i + "<br>")
    }
    return resultado
}

let num = parseInt(prompt("Informe um numero: "))
let result = tabuada(num)
document.write(result)
