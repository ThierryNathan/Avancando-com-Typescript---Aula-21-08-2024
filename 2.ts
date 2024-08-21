type Pessoa = {
    nome: string;
    idade: number;
};

type Empregado = {
    empresa: string;
    salario: number;
};

type PessoaEmpregado = Pessoa & Empregado;

const pessoaEmpregada: PessoaEmpregado = {
    nome: 'omsad',
    idade: 34,
    empresa: 'Logitech',
    salario: 1500
}

function retorno(pessoaEmpregada: PessoaEmpregado): string{
    return `O nome do empregado é ${pessoaEmpregada.nome}, possui ${pessoaEmpregada.idade} anos de idade. Trabalha na ${pessoaEmpregada.empresa} e recebe ${pessoaEmpregada.salario}`;
}

console.log(retorno(pessoaEmpregada))