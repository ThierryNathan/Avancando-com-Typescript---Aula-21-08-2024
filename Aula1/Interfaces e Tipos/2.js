function exibirDetalhesEmpregado(pessoa) {
    return "Nome: ".concat(pessoa.nome, ", Idade: ").concat(pessoa.idade, ", Empresa: ").concat(pessoa.empresa, ", Sal\u00E1rio: R$").concat(pessoa.salario.toFixed(2), ".");
}
var pessoa = {
    nome: 'João',
    idade: 30,
    empresa: 'Empresa X',
    salario: 5000.00
};
console.log(exibirDetalhesEmpregado(pessoa));
// Output: Nome: João, Idade: 30, Empresa: Empresa X, Salário: R$5000.00.
