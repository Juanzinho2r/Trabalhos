const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Lista completa de palíndromos
const palindromeExamples = {
    words: [
        "arara", "radar", "ovo", "salas", "reviver", "asas", "civic", "level", "deified",
        "repaper", "noon", "racecar", "Aibohphobia"
    ],
    phrases: [
        "A man a plan a canal Panama", "Ana, a mala nada na lama", 
        "Was it a car or a cat I saw?", "Madam, in Eden, I'm Adam",
        "No lemon, no melon", "Step on no pets", "Yo, Banana Boy!",
        "Evil is a name of a foeman, as I live", "A Santa at NASA"
    ],
    numbers: [
        "121", "12321", "1234321", "111", "1221", "1001"
    ]
};

// Função para verificar se uma palavra é um palíndromo
function isPalindrome(word) {
    const cleanedWord = word.replace(/\s+/g, '').toLowerCase();
    const reversedWord = cleanedWord.split('').reverse().join('');
    return cleanedWord === reversedWord;
}

// Função para mostrar exemplos completos de palíndromos
function showAllExamples() {
    console.log("\nExemplos de Palíndromos:");
    console.log("Palavras:");
    palindromeExamples.words.forEach(word => console.log(`- ${word}`));
    console.log("Frases:");
    palindromeExamples.phrases.forEach(phrase => console.log(`- ${phrase}`));
    console.log("Números:");
    palindromeExamples.numbers.forEach(number => console.log(`- ${number}`));
}

// Função para solicitar entrada do usuário
function askForInput() {
    rl.question("Digite uma palavra ou frase para verificar se é um palíndromo (ou 'sair' para terminar): ", (input) => {
        if (input.toLowerCase() === 'sair') {
            console.log("Programa encerrado.");
            rl.close();
            return;
        }
        
        const result = isPalindrome(input);
        console.log(`\n"${input}" é um palíndromo? ${result}`);

        // Se for palíndromo, mostra todos os exemplos
        if (result) {
            showAllExamples();
        }
        
        // Chama a função novamente para continuar pedindo entrada
        askForInput();
    });
}

// Inicia a solicitação de entrada
askForInput();
