class Personagem {
    constructor(nome, energia, nivel) {
        this.nome = nome
        this.energia = energia
        this.nivel = nivel
    }

    aumentarEnergia(atbenergia) {
        this.energia += atbenergia
        if (this.energia > 100) {
            console.log("Sua energia está no máximo " + "| Total: " + (this.energia = 100))
        } else {
            console.log("Voce ganhou mais energia " + atbenergia + "| Total: " + this.energia)
        }

    }
    perderEnergia(atbenergia) {
        if (atbenergia > this.energia) {
            this.energia = 0
            console.log("sua energia foi zerada")
        } else {
            this.energia -= atbenergia
            console.log ("Voce perdeu mais energia " + atbenergia + "| Total: " + this.energia)
        }
    }
    subirNivel(exp){
        this.nivel += exp 
        console.log("Parabéns, voce subiu de nivel!")
        console.log (">>> " + this.nivel)
         

    }

}

let person1 = new Personagem ('Vitor', 85, 2)
person1.aumentarEnergia(15)
person1.perderEnergia(0)
person1.subirNivel(person1)