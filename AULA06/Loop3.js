// contar de 1 a 10 usando while //

let cont = 1;

while (cont <= 10) {
    console.log("contado com while", cont)

    if (cont == 5) {
        console.log("saindo")
        break;
    }
    cont++
}

for (let cont = 1; cont <= 10; cont++) {
    console.log("contando com for: ", cont)
}
