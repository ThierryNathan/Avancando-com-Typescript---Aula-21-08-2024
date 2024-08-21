interface Produto{
    nome: string;
    preco: number;
    categoria: string;
}

type FormaDePagamento = 'dinheiro' | 'cartão' | 'cartão';


function infoProduto(produto: Produto, pagamento: FormaDePagamento): string{
    return `O nome do produto é: ${produto} e possui ${pagamento} como forma de pagamento.`;
}

infoProduto
