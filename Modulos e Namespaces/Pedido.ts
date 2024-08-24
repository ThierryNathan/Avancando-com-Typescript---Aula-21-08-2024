import { Cliente } from "./Cliente";


export class Pedido {
    cliente: Cliente.Cliente;
    produto: string;
    valor: number;


    constructor(cliente: Cliente.Cliente, valorTotal: number, produto: string) {
        this.cliente = cliente;
        this.valor = valorTotal;
        this.produto = produto;
    }
}

// Exemplo de uso

function exibirDetalhesPedido(pedido: Pedido): string {
    return `Cliente: ${pedido.cliente.nome}, Produto: ${pedido.produto}, Valor: R$${pedido.valor.toFixed(2)}. Comprovante enviado para ${pedido.cliente.email}.`;
}

const cliente: Cliente.Cliente = new Cliente.Cliente('João', 'joaozinho@gmail.com');
const pedido: Pedido = new Pedido(cliente, 500.00, 'Smartphone');

console.log(exibirDetalhesPedido(pedido));
// Output: Cliente: João, Produto: Smartphone, Valor: R$500.00.
