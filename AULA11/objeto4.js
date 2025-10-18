class Pessoa {
    constructor(nome, idade, profissao){
        this.nome = nome 
        this.idade = idade 
        this.profissao = profissao
    }
 info(){
    console.log("O" + this.nome + "tem " + this.idade + " anos" + " e trabalha na area de " + this.profissao)
 }   
}

let alguem = new Pessoa (" VITOR ", '25', 'PROGRAMAÇÃO')
alguem.info()