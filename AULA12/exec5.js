let palavras = []

for ( let i = 1; i < 6; i++){
    palavras.push(prompt("digite a " + i + "1 palavra"))
}

document.write('Essas são as palavras com mais de 5 letras: <br>') 

 

for (i= 0; i < palavras.length; i++) { 

    if (palavras[i].length > 5) { 

        document.write(palavras[i] + ': Tem ' + palavras[i].length + ' letras.<br>') 

    } 

} 