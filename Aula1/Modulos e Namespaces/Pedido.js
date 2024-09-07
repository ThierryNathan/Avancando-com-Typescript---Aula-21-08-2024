"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
var Cliente_1 = require("./Cliente");
var Pedido = /** @class */ (function () {
    function Pedido(cliente, valorTotal, produto) {
        this.cliente = cliente;
        this.valor = valorTotal;
        this.produto = produto;
    }
    return Pedido;
}());
exports.Pedido = Pedido;
// Exemplo de uso
function exibirDetalhesPedido(pedido) {
    return "Cliente: ".concat(pedido.cliente.nome, ", Produto: ").concat(pedido.produto, ", Valor: R$").concat(pedido.valor.toFixed(2), ". Comprovante enviado para ").concat(pedido.cliente.email, ".");
}
var cliente = new Cliente_1.Cliente.Cliente('João', 'joaozinho@gmail.com');
var pedido = new Pedido(cliente, 500.00, 'Smartphone');
console.log(exibirDetalhesPedido(pedido));
// Output: Cliente: João, Produto: Smartphone, Valor: R$500.00.
