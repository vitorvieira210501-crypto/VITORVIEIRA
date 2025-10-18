class Produto {
    constructor(nome, preco, qtd) {
        this.nome = nome
        this.preco = preco
        this.qtd = qtd
    }


    vender(quantidade) {
        if (quantidade <= this.qtd) {
            this.qtd -= quantidade
            document.write("seu estoque foi vendido de acordo com a disponibildade: " + this.qtd)
            document.write("<br>")
        } else {
            document.write("Estoque não foi vendido")
        }

    }
    reporestoque(quantidade){
         this.qtd += quantidade
         document.write ("seu estoque está reposto: " + this.qtd)
         }
    exbirinfo(){
        console.log (this.nome + " " + this.preco + " " + this.qtd)
    }
}

let product = new Produto ("Margarina", 8.75, 50)
product.vender(50)
product.reporestoque(20)
product.exibirinfo()