class Moto {
    constructor(modelo, marca, cor){
    this.modelo = modelo;
    this.marca = marca;
    this.cor = cor;

  }
  parado(){
console.log("A moto " + this.modelo + " está parada na avenida")
  }
}

let minhaMoto = new Moto ("CB300, HONDA, BRANCA")
minhaMoto.parado()
