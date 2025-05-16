//25114290083
//Rickson Figueiredo Pessanha
const prompt = require ('prompt-sync') ({sigint: true});

var cor = prompt("Digite uma das cores dentre: verde, amarelo ou vermelho :").toLowerCase();

switch (cor) { 
    case"verde":
    console.log ("siga!");
    break;
    case"amarelo":
    console.log ("Atenção!");
    break;
    case"vermelho":
    console.log ("Pare!");
    break;
    default:
        console.log("Cor inválida!");
}