function contarpares(numero){
    let pares = 0
    for (let i = 0; i < numero.length; i++){
        if (numero[i] % 2 == 0){
            pares++
        }
    }
    console.log ("A quantidade de pares é: ", pares)
}
let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
contarpares(lista)