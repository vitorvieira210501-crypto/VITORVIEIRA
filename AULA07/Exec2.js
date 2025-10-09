let idades;
let control = 0  
let somaqtdmaior = 0 

while ( control < 9 ) { 
    idades = Number(prompt(" Informes as idades: "))
    if ( idades >= 18 ) {
    somaqtdmaior++;}
    control++
    
}

document.write ("Quantidade de maiores: " + somaqtdmaior + ("<br>"))
document. write ("Voce é de maior: ", idades)


