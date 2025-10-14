// Criando um vetor com 5 números aleatórios entre 1 e 50 

let numeros = []; 

for (let i = 0; i < 5; i++) { 

    let numero = parseInt(prompt("Digite um número entre 1 e 50:")); 

    // Verificando se o número está no intervalo correto 

    if (numero >= 1 && numero <= 50) { 

        numeros.push(numero); 

    } else { 

        console.log("Número inválido. Tente novamente."); 

        i--; // Decrementa o índice para tentar novamente 

    } 

} 

 

// Exibindo apenas os números pares 

for (let i = 0; i < numeros.length; i++) { 

    if (numeros[i] % 2 === 0) { 

        console.log(numeros[i]); 

    } 

} 