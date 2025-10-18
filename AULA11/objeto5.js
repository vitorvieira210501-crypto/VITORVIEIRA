class Produto {
    constructor(nome, preco, qtd){
    this.nome = nome 
    this.preco = preco 
    this.qtd = qtd

  }
  info(){
    console.log("A " + this.nome + " com valor de: " + this.preco + " tem essa quantidade: " + this.qtd)
  }
}

let meuproduto = new Produto ("Manteiga", 8.75, "50")
meuproduto.info()