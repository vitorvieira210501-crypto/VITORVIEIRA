class Carro {
    constructor(modelo, ano, velocidade) {
        this.modelo = modelo
        this.ano = ano
        this.velocidade = velocidade
    }
    acelerar(valor) {
        if (valor > 10) {
            this.velocidade += valor
        } else {
            console.log(this.modelo + " não acelerou (valor muito baixo). Velocidade atual: " + this.velocidade + " KM/H");
        }
    }
    frear(valor) {

        if (valor < 10) {
            this.velocidade -= valor
            if (this.velocidade <= 0) {
                this.velocidade = 0

            } else {
                console.log(this.modelo + " não freou (valor muito alto). Velocidade atual: " + this.velocidade + " KM/H");
            }
        }

        console.log(this.modelo + " freando para " + this.velocidade + "KM/H")
    }

}
let carro1 = new Carro('TOYOTA COROLLA', 2025, 50)
carro1.acelerar(10)
carro1.frear(5)