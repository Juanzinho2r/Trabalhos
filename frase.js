const readline = require('readline');

// Função para remover acentos e normalizar a string
function normalizarFrase(frase) {
    return frase.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Função para contar o número de vogais em uma frase
function contarVogais(frase) {
    const vogais = 'aeiouAEIOU';
    let contador = 0;

    // Normaliza a frase para remover acentos
    let fraseNormalizada = normalizarFrase(frase);

    for (let caractere of fraseNormalizada) {
        if (vogais.includes(caractere)) {
            contador++;
        }
    }

    return contador;
}

// Configurando o readline para capturar a entrada do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para capturar a entrada do usuário e processar
function capturarEntrada() {
    rl.question('Digite uma frase (ou digite "sair" para encerrar): ', (frase) => {
        // Se o usuário digitar "sair", o programa termina
        if (frase.toLowerCase() === 'sair') {
            console.log("Encerrando o programa. Até logo!");
            rl.close();
            return;
        }

        // Verifica se a frase está vazia ou contém apenas espaços
        if (frase.trim() === '') {
            console.log("Frase inválida. Por favor, insira uma frase válida.");
        } else {
            let numeroDeVogais = contarVogais(frase);
            console.log(`Número de vogais na frase: ${numeroDeVogais}`);
        }

        // Chama a função novamente para capturar outra entrada
        capturarEntrada();
    });
}

// Iniciar o processo de captura da entrada
capturarEntrada();
