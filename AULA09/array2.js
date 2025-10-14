let num = []
let lernum; 
for ( i = 1; i <= 3; i++ ) {
lernum = parseFloat(prompt("Informe um valor"))
num.push(lernum)

}

console.log(Math.max(num[0], num[1], num[2]));

//outra forma com for 

let maior = 0; 
for ( i = 0; i<=3; i++){
    if (num [i]>maior) 
    maior = num[i]
}

console.log(maior)
