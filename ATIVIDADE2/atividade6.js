const prompt = require('prompt-sync')({ sigint: true });

var numeroreal = parseFloat(prompt("digite um número positivo: "));

if (numeroreal <= 0) {
    console.log("Por favor, insira um número real positivo.");
} else {

    var numeroInteiro = parseInt(numeroreal);


    if (numeroInteiro % 3 === 0) {
        console.log("O número " + numeroInteiro + " é múltiplo de 3.");
    } else {
        console.log("O número " + numeroInteiro + " não é múltiplo de 3.");
    }
}
