function encontrarMaiorElemento(array) {
    var maiorElemento = array.reduce(function (maior, atual) { return maior > atual ? maior : atual; });
    return maiorElemento;
}
// Exemplo de uso:
var maiorNumero = encontrarMaiorElemento([10, 20, 30]);
var maiorPalavra = encontrarMaiorElemento(['gato', 'cachorro', 'zebra']);
console.log(maiorNumero); // 30
console.log(maiorPalavra); // 'zebra'
