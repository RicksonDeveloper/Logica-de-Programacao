const prompt = require('prompt-sync')({sigint: true});
//1. Crie um array com 5 elementos da forma string.
let tamanhoBlusa = ['pp','p', 'm', 'g', 'gg'];
let perifericos = ['Mouse','Monitor', 'Teclado', 'Headset', 'Microfone'];
//2. Determine o quarto elemento desse array usando indexação.
console.log("O Quarto elemento é:",tamanhoBlusa[3]);
console.log("O Quarto elemento é:",perifericos[3]);
//3. Determine o último elemento deste array.
console.log("O Ultimo elemento é:",tamanhoBlusa[tamanhoBlusa.length - 1]);
console.log("O Ultimo elemento é:",perifericos[perifericos.length - 1]);

//4. Use for loops e liste os elementos do array de duas formas:
//4.1. usando for loop sobre os índices
console.log("Os tamanhos disponíveis são:");
for(var i = 0; i < tamanhoBlusa.length; i++){
   console.log(tamanhoBlusa[i]);
}

console.log("Os itens disponíveis são:");
for(var i = 0; i < perifericos.length; i++){
   console.log(perifericos[i]);
}
//4.2. usando for...ofs
console.log("Os tamanhos disponíveis são:");
for (const tamanho of tamanhoBlusa) {
   console.log(tamanho);
}

console.log("Os itens disponíveis são:");
for (const periferico of perifericos) {
   console.log(periferico);
}
//5. Ordene os elementos deste array em forma alfabética.
console.log(tamanhoBlusa.sort());
console.log(perifericos.sort());
//6. Ordene os elementos do array em forma alfabética reversa
console.log(tamanhoBlusa.sort().reverse());
console.log(perifericos.sort().reverse());
//7. Crie um array com elementos numéricos. 
let Numeros = ['1','2','3','4','5'];
let Numeros2 = ['10','22','33','44','55'];
//7.1 ordene os elementos em ordem crescente
console.log(Numeros.sort((a, b) => a - b));
console.log(Numeros2.sort((a, b) => a - b));
//7.2 ordene os elementos em ordem decrescente
console.log(Numeros.sort((a, b) => b - a));
console.log(Numeros2.sort((a, b) => b - a));
//8. Crie um array com 3 elementos. 
let elementos = ['Céu','Água','Núvem'];
let elementos2 = ['CPU','HARDWARE','SOFTWARE'];
//8.1 adicione outros 4 elementos um por um usando push(.). Mostre a quantidade de elementos ao adicionar os elementos
elementos.push('Sol');
console.log("Quantidade de elementos após adicionar 'Sol':", elementos.length);

elementos.push('Terra');
console.log("Quantidade de elementos após adicionar 'Terra':", elementos.length);

elementos.push('Estrela');
console.log("Quantidade de elementos após adicionar 'Estrela':", elementos.length);

elementos.push('Lua');
console.log("Quantidade de elementos após adicionar 'Lua':", elementos.length);

elementos2.push('PROCESSADOR');
console.log("Quantidade de elementos após adicionar 'PROCESSADOR':", elementos2.length);

elementos2.push('FONTE');
console.log("Quantidade de elementos após adicionar 'FONTE':", elementos2.length);

elementos2.push('PLACA MÃE');
console.log("Quantidade de elementos após adicionar 'PLACA MÃE':", elementos2.length);

elementos2.push('CAIXA DE SOM');
console.log("Quantidade de elementos após adicionar 'CAIXA DE SOM':", elementos2.length);

//8.2 remova o último elemento e mostre o elemento que foi eliminado.
let elemmentoRemovido = elementos.pop();
console.log("Elemento Removido:", elemmentoRemovido);   
console.log("A quantidade de elementos após remover o último elemento é:", elementos.length);

let elemmento2Removido = elementos2.pop();
console.log("Elemento Removido:", elemmento2Removido);   
console.log("A quantidade de elementos após remover o último elemento é:", elementos2.length);

let impar=[1,3,7,9,11,15];
console.log(impar.splice(5,9,15,) );
console.log(impar);

let numeross = [2,43,54,56,89,1,4,5,9];
console.log(numeross.sort((b, a) => b-a));

console.log(numeross.sort((b, a) => a-b));
