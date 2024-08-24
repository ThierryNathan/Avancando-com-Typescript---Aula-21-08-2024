// Definindo a interface Produto
interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}

// Definindo o tipo de união FormaPagamento
type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';

// Função que recebe um objeto do tipo Produto e a forma de pagamento, retornando uma mensagem
function exibirDetalhesCompra(produto: Produto, pagamento: FormaPagamento): string {
    return `Produto: ${produto.nome}, Categoria: ${produto.categoria}, Preço: R$${produto.preco.toFixed(2)}.
Forma de pagamento escolhida: ${pagamento}.`;
}

// Exemplo de uso
const exemplo: Produto = {
    nome: 'Smartphone',
    preco: 2500.00,
    categoria: 'Eletrônicos'
};

const formaPagamento: FormaPagamento = 'cartão';

console.log(exibirDetalhesCompra(exemplo, formaPagamento));
