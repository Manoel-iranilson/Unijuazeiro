class Conta{
    constructor(
        public numero:number,
        public saldo:number,
        public nome:string
    ){}

    getSaldo():number{
        return this.saldo
    }
}


class Corrente extends Conta{
    constructor(
        numero:number,
        saldo:number,
        nome:string,
        public limite :number
    ){super(numero,saldo,nome)}
   

    depositar(valor:number){
        if(valor <= 0){
            console.log(`valor invalido`)
        }else{
            this.saldo = this.saldo + valor
        return console.log(`o valor depositado foi: ${valor},seu saldo é: ${this.saldo}`)
        }
    }

    sacar(valor: number):void{
        if (valor > this.saldo){
            console.log(`Saldo indisponivel`)
            if(valor < this.limite){
                this.limite = this.limite - valor
                console.log(`valor sacado do limite especial,seu limite especial agora: ${this.limite}`)
            }

        }else if(valor <= 0){
            console.log(`Valor invalido`)
        }else{
            this.saldo = this.saldo - valor
            console.log(`valor sacado ${valor}, seu saldo atual é ${this.saldo}`)
        }
    }
}


const corrente = new Corrente(82662,1000,"manoel",500) 

corrente.depositar(200)
corrente.sacar(100)
