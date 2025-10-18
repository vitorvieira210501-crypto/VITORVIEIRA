class Personagem {
    constructor(nome, energia, nivel) {
        this.nome = nome
        this.energia = energia
        this.nivel = nivel
    }

    ganharenergia(atbenergia) {
        this.energia += atbenergia
        if (this.energia > 100) {
            document.write("Sua energia está no máximo " + "Total | " + (this.energia = 100))
            document.write("<br>---------------------------------<br>")
        } else {
            document.write('Você ganhou mais energia ' + atbenergia + "Total | " + this.energia)

        }
    }
    perderenergia(atbenergia) {
        if (atbenergia > this.energia) {
            this.energia = 0
            document.write("Sua energia foi zerada")
            document.write("<br>---------------------------------<br>")
        }
        else {
            this.energia -= atbenergia
            document.write("Voce perdeu " + atbenergia + " de energia " + " Total |" + this.energia)
            document.write("<br>---------------------------------<br>")
        }

    }
    subirniver(exp) {
        document.write("Parabéns, você subiu de nivel!" + this.nivel)
        this.nivel += exp
        document.write(" >>> " + this.nivel)
        document.write("<br>---------------------------------<br>")



    }
    consultarAtrib() { 

        document.write("Nome: " + this.nome + "<br>" + "Energia: " + this.energia + "<br>" + "Nivel: " + this.nivel + "<br>") 

        document.write("<br>---------------------------------<br>") 

    } 

} 

 

let person1 = new Pessoa("Sarah", 100, 1) 

 

person1.consultarAtrib(); 

person1.aumentarEnergia(10); 

person1.subirNivel(1); 

person1.consultarAtrib(); 

person1.perderEnergia(50) 

person1.subirNivel(1) 

person1.consultarAtrib() 

