class EmailInvalidoError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'EmailInvalidoError';
        Object.setPrototypeOf(this, EmailInvalidoError.prototype);
    }
}

function verificarEmail(email: string): void {
    if (!email.includes('@')) {
        throw new EmailInvalidoError('Email inválido');
    }
    console.log('Email válido');
}

// Exemplo de uso:
try {
    verificarEmail('usuario.com');
} catch (error) {
    if (error instanceof EmailInvalidoError) {
        console.error(error.message);  // Irá imprimir "Email inválido"
    } else {
        console.error('Erro desconhecido:', error);
    }
}