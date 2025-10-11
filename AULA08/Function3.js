function verificarIdade(idade) {
    let mensagem;
    if (idade >= 18) {
        mensagem = "Voce é maior de idade"
    }
    else { mensagem = ("voce é menor de idade") }
    return mensagem
}

let idade = parseInt(prompt("Informe a sua Idade: "))
let txt = verificarIdade(idade)
alert(txt)

