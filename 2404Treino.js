//const prompt = require('prompt-sync')({ sigint: true });
/*
let car = prompt("Digite um caractere: ").toLowerCase();
let vogais = ['a','e','i','o','u']

if(vogais.includes(car)){
    console.log(`${car} é vogal.`);
} else {
    console.log(`${car} não é vogal`)
}*/

/*
let cor = prompt("Digite uma cor entre: azul, verde, cinza ou preto: ").toLowerCase();
let corescolhida = ['cinza', 'verde']

if(corescolhida.includes(cor)){
    console.log("Parabéns, você escolheu a cor certa");
}else {
    console.log("Vish, você errou!");
}*/
/*
let inicio = parseInt(prompt("Ano inicial:"));
let fim = parseInt(prompt("Ano final:"));
let copas = [];

for (let ano = 1930; ano <= fim; ano += 4) {
  if (ano >= inicio && ano !== 1942 && ano !== 1946) {
    copas.push(ano);
  }
}

console.log(copas);*/

/*
let inicio = parseInt(prompt("Ano inicial:"));
let fim = parseInt(prompt("Ano final:"));
let olimpíadas = [];

for (let ano = 1896; ano <= fim; ano += 4) {
  if (ano >= inicio && ano !== 1916 && ano !== 1940 && ano !== 1944) {
    olimpíadas.push(ano);
  }
}

console.log(olimpíadas);
*/
/*
let inicio = 1930;
let fim = 2025;
let copas = [];

for (let ano = 1930; ano <= fim; ano += 4) {
    if (ano >= inicio && ano !== 1942 && ano !== 1946) {
        copas.push(ano);
    }
}

console.log("O ano da quarta copa do mundo " + copas[3]);
console.log("O ano da décima copa do mundo " + copas[9]);
console.log("O ano da última copa do mundo " + copas[copas.length - 1]);
console.log("O ano da primeira copa do mundo " + copas[0]);
*/
/*
const prompt = require('prompt-sync')({ signint: true });

let anoInicial = parseInt(prompt("Digite o ano incial: "));
let anoFinal = parseInt(prompt("Digite o ano final: "));
let copas = [];
let anossemcopa = [1942,1946];

for (let ano = anoInicial; ano <= anoFinal; ano++) {
  if (ano % 4===2 && ano>=1930 && !anossemcopa.includes(ano)) {
copas.push(ano);
  }
}
console.log(copas); 

console.log(copas[copas.length - 1]);
*/
const prompt = require('prompt-sync')({ signint: true });

let anoInicial = parseInt(prompt("Digite o ano incial: "));
let anoFinal = parseInt(prompt("Digite o ano final: "));
let olimpíadas = [];
let anossemolimpiadas = [1916, 1940, 1944];

for (let ano = anoInicial; ano <= anoFinal; ano++) {
  if (ano % 4 === 0 && ano >= 1896 && !anossemolimpiadas.includes(ano)) {
    olimpíadas.push(ano);
  }
}
console.log(olimpíadas);

console.log(olimpíadas[0]);
console.log(olimpíadas[3]);
console.log(olimpíadas[9]);
console.log(olimpíadas[olimpíadas.length - 1]);