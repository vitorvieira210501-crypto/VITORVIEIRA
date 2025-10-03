let idade = Number(prompt("Qual a sua idade ? "));

if (idade > 18) { console.log("VOCE PODE COMPRAR BEBIDA ALCOOLICA") }
else if (idade >= 16 && idade < 18) { console.log("VOCE PODE COMPRAR BEBIDA ALCOOLICA SE ESTIVER ACOMPANHADO DE UM RESPONSAVEL MAIOR") }
else { console.log("VOCE NAO PODE COMPRAR BEBIDA") }