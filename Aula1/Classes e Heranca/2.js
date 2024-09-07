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
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    ContaBancaria.prototype.exibirSaldo = function () {
        return "Saldo atual: R$".concat(this.saldo.toFixed(2), ".");
    };
    return ContaBancaria;
}());
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente(titular, saldo, limite) {
        var _this = _super.call(this, titular, saldo) || this;
        _this.limite = limite;
        return _this;
    }
    ContaCorrente.prototype.exibirSaldo = function () {
        return "".concat(_super.prototype.exibirSaldo.call(this), " Limite: R$").concat(this.limite.toFixed(2), ".");
    };
    return ContaCorrente;
}(ContaBancaria));
var contaCorrente = new ContaCorrente('João', 1000.00, 500.00);
console.log(contaCorrente.exibirSaldo());
// Output: Saldo atual: R$1000.00. Limite: R$500.00.
