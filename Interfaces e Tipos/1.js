// Função que recebe um objeto do tipo Produto e a forma de pagamento, retornando uma mensagem
function exibirDetalhesCompra(produto, pagamento) {
    return "Produto: ".concat(produto.nome, ", Categoria: ").concat(produto.categoria, ", Pre\u00E7o: R$").concat(produto.preco.toFixed(2), ".\nForma de pagamento escolhida: ").concat(pagamento, ".");
}
// Exemplo de uso
var meuProduto = {
    nome: 'Smartphone',
    preco: 2500.00,
    categoria: 'Eletrônicos'
};
var formaPagamento = 'cartão';
console.log(exibirDetalhesCompra(meuProduto, formaPagamento));
