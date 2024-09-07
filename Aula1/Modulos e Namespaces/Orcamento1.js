"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Financeiro_1 = require("./Financeiro");
var Orcamento1 = /** @class */ (function (_super) {
    __extends(Orcamento1, _super);
    function Orcamento1(valorTotal, itens) {
        return _super.call(this, valorTotal, itens) || this;
    }
    Orcamento1.prototype.exibirOrcamento = function () {
        return "Valor total: R$".concat(this.valorTotal.toFixed(2), ". Itens: ").concat(this.itens.join(', '), ".");
    };
    return Orcamento1;
}(Financeiro_1.Financeiro.Orcamento));
var orcamento = new Orcamento1(500.00, ['Smartphone', 'Notebook']);
console.log(orcamento.exibirOrcamento());
// Output: Valor total: R$500.00. Itens: Smartphone, Notebook.
