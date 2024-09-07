type Pessoa = {
    nome: string;
    idade: number;
}

type Empregado = {
    empresa: string;
    salario: number;
}

type PessoaEmpregada = Pessoa & Empregado;

function exibirDetalhesEmpregado(pessoa: PessoaEmpregada): string {
    return `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Empresa: ${pessoa.empresa}, Salário: R$${pessoa.salario.toFixed(2)}.`;
}

const pessoa: PessoaEmpregada = {
    nome: 'João',
    idade: 30,
    empresa: 'Empresa X',
    salario: 5000.00
};

console.log(exibirDetalhesEmpregado(pessoa));

// Output: Nome: João, Idade: 30, Empresa: Empresa X, Salário: R$5000.00.