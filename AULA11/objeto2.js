class ContaBancaria {  

    #saldo;  // Atributo privado 

      

    constructor(titular_ct, saldo_ct) {  

        this.titular = titular_ct; // Atributo público  

        this.#saldo = saldo_ct;  // Atributo privado  

    }  

    depositar(valor) {  

        this.#saldo += valor;  

        console.log(`Depósito de R$ ${valor} realizado. Saldo atual: R$ ${this.#saldo}`);  

    }  

    consultarSaldo() {  

        console.log(`Saldo de ${this.titular}: R$ ${this.#saldo}`);  

    } 

    debitar(valor) { 

        if (valor>this.#saldo){ 

            console.log('Não há saldo para este débito'); 

        } else { 

            this.#saldo -= valor; 

            this.consultarSaldo(); 

        } 

    } 

}  

  

// Criando uma conta  

let conta = new ContaBancaria("Ana", 1000);  

  

// ✅ Acesso permitido (público)  

console.log(conta.titular); // "Ana"  

conta.consultarSaldo();  

conta.debitar(500) 

conta.consultarSaldo(); 

 

 
 

 