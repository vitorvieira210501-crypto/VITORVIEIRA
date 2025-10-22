class Usuario {
    constructor ( nome, idade ){
        this.nome = nome 
        this.idade = idade 

    }
maior(){
    if (this.idade >= 18 ){
        console.log ("O Usuario é maior de idade")
    }
    else { 
        console.log("O Usuario não é maior de idade")
    }
}
exibirInfo(){
    console.log("O Usuario " + this.nome + " tem " + this.idade + " anos" )
}
}

let person1 = new Usuario ('Vitor', 15)
person1.maior()
person1.exibirInfo()