function nasc(n){
    return (2025 - n)
}

let n = parseInt(prompt("Informe a sua data de nascimento: "))
let idade = nasc(n)
document.write("Você nasceu em " + n + " e tem " + idade + " anos ")