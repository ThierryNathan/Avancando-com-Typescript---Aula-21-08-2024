class ContaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    exibirSaldo(): string {
        return `Saldo atual: R$${this.saldo.toFixed(2)}.`;
    }

}

class ContaCorrente extends ContaBancaria {
    limite: number;

    constructor(titular: string, saldo: number, limite: number) {     
        super(titular, saldo);
        this.limite = limite;
    }

    exibirSaldo(): string {
        return `${super.exibirSaldo()} Limite: R$${this.limite.toFixed(2)}.`;
    }
}

const contaCorrente: ContaCorrente = new ContaCorrente('João', 1000.00, 500.00);
console.log(contaCorrente.exibirSaldo());
// Output: Saldo atual: R$1000.00. Limite: R$500.00.
