class Filme {
    constructor(titulo, diretor, anolanc){
    this.titulo = titulo
    this.diretor = diretor 
    this.anolanc = anolanc
  }
info(){
    console.log ("O filme " + this.titulo + ", com a direção de: " + this.diretor + "; ano de lançamento em: " + this.anolanc )
  }
}

let movie = new Filme ("Origem", "Christopher Nolan", "2010")
movie.info()