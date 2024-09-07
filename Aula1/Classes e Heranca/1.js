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
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario, cargo) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }
    Funcionario.prototype.descricaoFuncionario = function () {
        return "Nome: ".concat(this.nome, ", Cargo: ").concat(this.cargo, ", Sal\u00E1rio: R$").concat(this.salario.toFixed(2), ".");
    };
    return Funcionario;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nome, salario, departamento) {
        var _this = _super.call(this, nome, salario, 'Gerente') || this;
        _this.departamento = departamento;
        return _this;
    }
    Gerente.prototype.descricaoGerente = function () {
        return "".concat(this.descricaoFuncionario(), " Departamento: ").concat(this.departamento, ".");
    };
    return Gerente;
}(Funcionario));
var gerente = new Gerente('Maria', 10000.00, 'Vendas');
console.log(gerente.descricaoGerente());
// Output: Nome: Maria, Cargo: Gerente, Salário: R$10000.00. Departamento: Vendas.
var funcionario = new Funcionario('João', 5000.00, 'Analista');
console.log(funcionario.descricaoFuncionario());
// Output: Nome: João, Cargo: Analista, Salário: R$5000.00.
