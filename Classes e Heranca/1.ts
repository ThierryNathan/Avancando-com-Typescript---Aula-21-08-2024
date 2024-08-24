class Funcionario {
    nome: string;
    salario: number;
    cargo: string;

    constructor(nome: string, salario: number, cargo: string) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }

    descricaoFuncionario(): string {
        return `Nome: ${this.nome}, Cargo: ${this.cargo}, Salário: R$${this.salario.toFixed(2)}.`;
    }
}

class Gerente extends Funcionario {
    departamento: string;

    constructor(nome: string, salario: number, departamento: string) {
        super(nome, salario, 'Gerente');
        this.departamento = departamento;
    }

    descricaoGerente(): string {
        return `${this.descricaoFuncionario()} Departamento: ${this.departamento}.`;
    }
}

const gerente: Gerente = new Gerente('Maria', 10000.00, 'Vendas');
console.log(gerente.descricaoGerente());
// Output: Nome: Maria, Cargo: Gerente, Salário: R$10000.00. Departamento: Vendas.

const funcionario: Funcionario = new Funcionario('João', 5000.00, 'Analista');
console.log(funcionario.descricaoFuncionario());
// Output: Nome: João, Cargo: Analista, Salário: R$5000.00.