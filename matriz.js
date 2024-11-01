const readline = require('readline');

// Função para substituir a linha por zeros
function substituirLinhaPorZeros(matriz, numeroLinha) {
    if (!Array.isArray(matriz) || !Array.isArray(matriz[0])) {
        throw new Error("A entrada deve ser uma matriz bidimensional.");
    }

    if (numeroLinha < 0 || numeroLinha >= matriz.length || !Number.isInteger(numeroLinha)) {
        throw new Error(`Número da linha inválido. Por favor, insira um valor entre 0 e ${matriz.length - 1}.`);
    }

    const novaMatriz = matriz.map(linha => [...linha]);
    const comprimentoLinha = novaMatriz[numeroLinha].length;
    novaMatriz[numeroLinha] = Array(comprimentoLinha).fill(0);

    return novaMatriz;
}

// Exemplo de matriz
let matrizExemplo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Configurando o readline para capturar a entrada do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta ao usuário qual linha deseja substituir
rl.question(`Digite o número da linha que deseja substituir por zeros (entre 0 e ${matrizExemplo.length - 1}): `, (input) => {
    let numeroLinha = parseInt(input, 10);

    try {
        let novaMatriz = substituirLinhaPorZeros(matrizExemplo, numeroLinha);
        console.log("Matriz modificada:");
        console.log(novaMatriz);
    } catch (error) {
        console.error(error.message);
    }

    rl.close();
});
