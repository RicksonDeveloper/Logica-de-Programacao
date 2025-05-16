
//QUESTÃO 6
/*
const prompt = require('prompt-sync')({sigint: true});

var cor = prompt("Digite uma cor (verde, amarelo, azul, branco):");
cor = cor.toLowerCase();

if (cor === "verde") {
  console.log("florestas");
} else if (cor === "amarelo") {
  console.log("riquezas");
} else if (cor === "azul") {
  console.log("céu");
} else if (cor === "branco") {
  console.log("ordem e progresso");
} else {
  console.log("Erro: cor inválida.");
}
*/

//QUESTÃO 7
/*
const prompt = require('prompt-sync')({ sigint: true });

for (var ano = 1999; ano <= 2025; ano++) {
    switch (ano) {
        case 2019:
        case 2021:
        break;
        default:
            if ((ano - 1999) % 2 === 0) console.log(ano);
    }
}
*/

//QUESTÃO 8

const prompt = require('prompt-sync')({ sigint: true });

var diaNascimento = 15;
var mesNascimento = 8;
var anoNascimento = 1990;

for (var tentativas = 5; tentativas > 0; tentativas--) {
  var dia = parseInt(prompt("Adivinhe o DIA do aniversário:"));
  var mes = parseInt(prompt("Adivinhe o MÊS do aniversário:"));
  var ano = parseInt(prompt("Adivinhe o ANO do aniversário:"));

  if (dia === diaNascimento && mes === mesNascimento && ano === anoNascimento) {
    console.log("Parabéns! Você acertou a data do meu aniversário!");
    break;
  } else {
    console.log("Palpite incorreto.");
    if (tentativas - 1 === 0) {
      console.log("Suas tentativas acabaram! Tente novamente.");
    }
  }
}

