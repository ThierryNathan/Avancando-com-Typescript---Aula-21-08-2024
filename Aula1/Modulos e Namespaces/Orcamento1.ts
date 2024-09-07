import { Financeiro } from "./Financeiro";

class Orcamento1 extends Financeiro.Orcamento {
    constructor(valorTotal: number, itens: string[]) {
        super(valorTotal, itens);
    }

    exibirOrcamento(): string {
        return `Valor total: R$${this.valorTotal.toFixed(2)}. Itens: ${this.itens.join(', ')}.`;
    }
}

const orcamento: Orcamento1 = new Orcamento1(500.00, ['Smartphone', 'Notebook']);
console.log(orcamento.exibirOrcamento());
// Output: Valor total: R$500.00. Itens: Smartphone, Notebook.