
/*const prompt = require('prompt-sync')({ sigint: true });

let anoInicial = 2024;
let anoFinal = 2500;
let ano = parseInt(prompt("Digite um ano: "));

if (ano >= anoInicial && ano <= anoFinal) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        console.log(`O ano ${ano} é bissexto`);
    } else {
        console.log(`O ano ${ano} não é bissexto`);
    }
} else {
    console.log(`Por favor, digite um ano entre ${anoInicial} e ${anoFinal}.`);
}
   */
/*
const prompt = require('prompt-sync')({ sigint: true });

var hora = parseFloat(prompt("Digite a hora:"));
var Km = parseFloat(prompt("Digite a distancia:"));

var CustoDistancia;
var custoFixo;
var ValorTotal;

if (hora >= 0 && hora <= 6) {
  custoFixo = 5.30;
  CustoDistancia = 4.40;
  ValorTotal = custoFixo + CustoDistancia * Km;
  console.log(`O valor total é ${ValorTotal}`);
}else if(hora > 6 && hora <= 18 ) {
  custoFixo = 3.30;
  CustoDistancia = 3.80;
  ValorTotal = custoFixo + CustoDistancia * Km;
  console.log(`O valor total é ${ValorTotal}`);
}else if (hora > 18 && hora < 24) {
  custoFixo = 4.30;
  CustoDistancia = 4.10;
  ValorTotal = custoFixo + CustoDistancia * Km;
  console.log(`O valor total é ${ValorTotal}`);
}else {
  console.log("A hora ou/e distancia estão errados");
}


const prompt = require('prompt-sync')({ sigint: true });

var NInicial = 1;
var NFinal = 100;
var NumeroPremiado1 = 98;
var NumeroPremiado2 = 7;
var NumeroPremiado3 = 17;

for (let tentativas = 0; tentativas < 3; tentativas++) {
  var N = parseInt(prompt("Digite um número entre 1 e 100: "));

  if (N < NInicial || N > NFinal) {
      console.log(`Você digitou um número inválido, digite entre ${NInicial} e ${NFinal}`);
      continue;
  }

  if (N === NumeroPremiado1 || N === NumeroPremiado2 || N === NumeroPremiado3) {
      console.log("Você foi premiado, parabéns!");
      break;
  } else {
      console.log("Você não foi premiado. Tente novamente!");
  }

  if (tentativas === 2) {
      console.log("Você esgotou suas tentativas. Tente novamente na próxima vez!");
  }
}
  */
/*
const prompt = require('prompt-sync')({ sigint: true });

let dia = parseInt(prompt("Digite o dia do seu nascimento: "));
let mes = parseInt(prompt("Digite o mês do seu nascimento (1-12): "));

let signo;

if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
   signo = "Aquário";
} else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
   signo = "Peixes";
} else if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
   signo = "Áries";
} else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
   signo = "Touro";
} else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
   signo = "Gêmeos";
} else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
   signo = "Câncer";
} else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
   signo = "Leão";
} else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
   signo = "Virgem";
} else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
   signo = "Libra";
} else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
   signo = "Escorpião";
} else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
   signo = "Sagitário";
} else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
   signo = "Capricórnio";
} else {
   console.log("Data inválida.");
}

if (signo) {
   console.log("Seu signo é: " + signo);
}*/

//Problema no qual o usuário não sabe com qual cor de roupas passará em cada dia da semana.
//O usuário entrará com o dia da semana e o programa dará saida na cor que ele passará o dia.

const prompt = require('prompt-sync')({ sigint: true });

let cor = (prompt("Digite o dia da semana que deseja saber a cor das roupas: ")).toLowerCase();

switch (cor) {
    case "segunda":
        console.log("A cor de segunda é Preto!");
        break;
    case "terca":
        console.log("A cor de terca é Azul!");
        break;
    case "quarta":
        console.log("A cor de quarta é Verde!");
        break;
    case "quinta":
        console.log("A cor de quinta é Marrom!");
        break;
    case "sexta":
        console.log("A cor de sexta é Vermelho!");
        break;
    case "sabado":
        console.log("A cor de sabado é Cinza!");
        break;
    case "domingo":
        console.log("A cor de domingo é Branco!");
        break;
        default:
    console.log("Você não digitou um dia válido");
}
