// 10. Desenvolver um programa para contar o número de letras maiúsculas da string abaixo: “LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY”

// Definindo a string
var texto = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";

// Função para contar letras maiúsculas
function contarLetrasMaiusculas(frase) {
    var contador = 0;
    for (var i = 0; i < frase.length; i++) {
        // Verifica se o caractere atual é uma letra maiúscula
        if (frase[i] === frase[i].toUpperCase() && frase[i] !== frase[i].toLowerCase()) {
            contador++;
        }
    }
    return contador;
}

// Chamando a função e exibindo o resultado
var numMaiusculas = contarLetrasMaiusculas(texto);
console.log("Número de letras maiúsculas: " + numMaiusculas);