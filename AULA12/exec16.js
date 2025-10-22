class Conta {
    #saldo;
    constructor(saldoInicial) {
        this.#saldo = saldoInicial

    }
    consultarSaldo() {
        console.log ("O seu saldo  é: " + this.#saldo)
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor
            console.log("O deposito de " + valor + " foi efetuado com sucesso!")
        } else {
            console.log("O deposito deve ser positivo")
        }
    }
    saque(valor) {
        if (valor <= 0) {
            console.log(" O valor do saque deve ser positivo ")

        } else if (valor > this.#saldo) {
            console.log(" saldo insuficiente ")
        } else {
            this.#saldo -= valor
            console.log("O saque de " + valor + " foi efetuado com sucesso! ")
        }

    }

}

let conta1 = new Conta(1000)
conta1.depositar(1000)
conta1.saque(100)
conta1.consultarSaldo(conta1)