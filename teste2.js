const prompt = require ('prompt-sync') ({sigint: true});
var soma;

var n1 = parseFloat(prompt("Digite seu primeiro número: "));
console.log(n1);

var n2 = prompt("Digite seu segundo número: ");
n2 = parseFloat(n2);
console.log(n2);

soma = n1 + n2;
console.log("o valor da soma é:", soma)
console.log(soma);

