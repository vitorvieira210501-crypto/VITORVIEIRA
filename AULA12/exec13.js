class Aluno {
    constructor(nome, notas) {
        this.nome = nome
        this.notas = notas
    }
    media() {
        let soma = 0
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i]

        }

      let media1 = soma / this.notas.length
        console.log("A media do " + this.nome + " é " + media1.toFixed(1))
    }
}

let aluno1 = new Aluno('vitor', [10, 1, 8])
aluno1.media()

