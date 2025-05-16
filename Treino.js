const prompt = require ('prompt-sync') ({sigint: true});

var idade = (prompt("Digite sua idade: "));
var esporte = (idade >= 18) ? "Futebol" : "Volei";
console.log(`A pessoa tem ${idade} anos, logo seu esporte é ${esporte}.`)