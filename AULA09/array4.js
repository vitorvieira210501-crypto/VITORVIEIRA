let diasSemana = ['DOMINGO', 'SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO']
let numero = parseInt(prompt("Informe um numero de 1 a 7 para selecionar o dia"))

if ( numero >= 1 && numero <= 7 ){
    console.log ("O dia da semana correspondente é: " + diasSemana[numero - 1])
    } else {
        console.log ("numero invalido")
    }
