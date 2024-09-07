function encontrarMaiorElemento<T>(array: T[]): T {
    let maiorElemento = array.reduce((maior, atual) => maior > atual ? maior : atual);
    return maiorElemento; 
}

// Exemplo de uso:
const maiorNumero = encontrarMaiorElemento([10, 20, 30]);  
const maiorPalavra = encontrarMaiorElemento(['gato', 'cachorro', 'zebra']);  

console.log(maiorNumero); // 30
console.log(maiorPalavra); // 'zebra'
