export namespace PessoaNamespace{
    export class Pessoa {
        constructor(public nome: string, public idade: number, public cpf?: string) {}

        saudacao(): string {
            return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos. E meu Cpf é ${this.cpf}`;
        }
    }
}