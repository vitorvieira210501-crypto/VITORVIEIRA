class Livro {
   constructor(titulo, diretor, anolanc){
    this.titulo = titulo
    this.diretor = diretor 
    this.anolanc = anolanc
   }

info(){
    console.log (this.titulo + ' ' + this.diretor + ' ' + this.anolanc)
  }
}

let livro1 = new Livro ('Harry Potter', 'Chris Columbus', '2004')
livro1.info()