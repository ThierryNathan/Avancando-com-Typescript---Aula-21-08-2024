async function buscarDadosDaAPI(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = Math.random() > 0.6;  // Simula sucesso ou erro aleatoriamente
            if (sucesso) {
                resolve('Dados da API recebidos.');
            } else {
                reject('Erro ao buscar dados da API.');
            }
        }, 5000);  // Simulando tempo de resposta
    });
}

// Exemplo de uso:
async function executarBusca() {
    try {
        const dados = await buscarDadosDaAPI();
        console.log(dados);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

executarBusca();  // Simula a busca de dados com async/await
