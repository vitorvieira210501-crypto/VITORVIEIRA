class Animal {
    constructor(animal, especie){
        this.animal = animal
        this.especie = especie
    }
emitirSom(){
    console.log ('Rugido')
}
}

let som1 = new Animal ('Leão', 'Felino')
som1.emitirSom()