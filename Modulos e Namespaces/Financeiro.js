"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Financeiro = void 0;
var Financeiro;
(function (Financeiro) {
    function calcularImposto(valor, taxaDeImposto) {
        return valor * taxaDeImposto;
    }
    Financeiro.calcularImposto = calcularImposto;
    function calcularDesconto(valor, taxaDeDesconto) {
        return valor * taxaDeDesconto;
    }
    Financeiro.calcularDesconto = calcularDesconto;
    var Orcamento = /** @class */ (function () {
        function Orcamento(valorTotal, itens) {
            this.valorTotal = valorTotal;
            this.itens = itens;
        }
        return Orcamento;
    }());
    Financeiro.Orcamento = Orcamento;
})(Financeiro || (exports.Financeiro = Financeiro = {}));
