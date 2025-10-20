class Carro {
    constructor(marca, modelo, cor) { 
        this.marca = marca; 
        this.modelo = modelo; 
        this.cor = cor; 
    } 
    acelerar() { 
        console.log("O carro está acelerando..."); 
    } 
} 
 
// Criando um objeto a partir da classe 
let meuCarro = new Carro("Toyota", "Corolla", "Preto"); 
meuCarro.acelerar(); 
let seuCarro = new Carro("Fiat", "Uno 98", "Verde")
seuCarro.acelerar()
 
// "+this.modelo+" 

