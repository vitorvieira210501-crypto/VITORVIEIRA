let preco;
let precomaior = 0

for (let control = 1; control <= 5; control++) {
    preco = Number(prompt("o Preço é: "))
    if ( preco < precomaior){(precomaior = preco)}
}

document.write ("o maior preco é: ", preco)
