export namespace Financeiro{

    export function calcularImposto(valor: number, taxaDeImposto: number): number {
        return valor * taxaDeImposto;
    }

    export function calcularDesconto(valor: number, taxaDeDesconto: number): number {
        return valor * taxaDeDesconto;
    }

    export class Orcamento{
        valorTotal: number;
        itens: string[];

        constructor(valorTotal: number, itens: string[]){
            this.valorTotal = valorTotal;
            this.itens = itens;
        }
    }
}