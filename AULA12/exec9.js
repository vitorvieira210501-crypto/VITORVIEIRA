let paises = ['brasil','angola','portugal','argentina','alemanha', 'espanha']
let num = Number(prompt("Informe um valor de 1 a 6"))

if ( num >= 1 && num <= 6){
    console.log("Pais escolhido: " + paises[num - 1])
} else {
    console.log('Erro: Número Invalido ')
}