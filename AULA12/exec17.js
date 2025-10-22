class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome
        this.preco = preco
        this.estoque = estoque
    }

    vender(qtd) {
        if (this.estoque -= qtd) {
            console.log("O produto foi vendido de acordo a disponibilidade do estoque: " + this.estoque)
        } else {
            console.log(" Estoque insuficiente ")
        }

    }
    reporEstoque(qtd) {
        if (this.estoque += qtd) {
            console.log(" O estoque foi reposto: " + this.estoque)
        }

    }
    exibirInfo() {
        console.log(this.nome + ',  ' + this.preco + ',  ' + this.estoque)
    }
}

let prod = new Produto("Margarina", 8.75, 50)

prod.vender(20)
prod.reporEstoque(10)
prod.exibirInfo(prod)