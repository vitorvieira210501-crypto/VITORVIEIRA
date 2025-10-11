function informames(mes) {
    let mensagem;
    if  (mes == 1){
     mensagem = ("Janeiro")}
 else if (mes == 2){ mensagem = ("Fevereiro") }
 else if ( mes == 3){ mensagem = ("Março")}
 else if ( mes == 4){ mensagem = ("Abril")}
 else if ( mes == 5){ mensagem = ("Maio")}
 else if ( mes == 6){ mensagem = ("Junho")}
 else if ( mes == 7){ mensagem = ("Julho")}
 else if ( mes == 8){ mensagem = ("Agosto")}
 else if ( mes == 9){ mensagem = ("Setembro")}
 else if ( mes == 10){ mensagem = ("Outubro")}
 else if ( mes == 11){ mensagem = ("Novembro")}
 else if ( mes == 12){ mensagem = ("Dezembro")}
  else {mensagem = "mes invalido"}
   return mensagem
 }

let mes = parseInt(prompt('Informe um numero para selecionar o mes: '))
let txt = informames(mes)
document.write(txt)
 
