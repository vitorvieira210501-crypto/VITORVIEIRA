class Filme {
    constructor (titulo, ano, diretor, nota){
        this.titulo = titulo
        this.diretor = diretor
        this.ano = ano
        this.nota = nota
    }
exibirInfo(){
    console.log("O Filme: " + this.titulo + " - " + (this.ano) + ". " + this.diretor + "; Nota: "  + this.nota + "|10" )

}
}


let movie = new Filme ('Origem', 2010, 'Christopher Nolan', 9)

movie.exibirInfo()