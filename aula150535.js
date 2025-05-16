let estudante1 = {
    matricula: 112235,
    nome : "Rickson",
    DN : "25/02/2007",
    UF : "DF"

}

let estudante2 = {
    matricula: 125633,
    nome : "Rafael",
    NASCIMENTO : "05/05/2005",
    LOCALNASC : "CE"

}


let pessoa = {
    tamanho: 120,
    salario : 3000,
    datadacarteira : "25/05/2010",
    LOCALNASC : "DF "

}


let casa = {
    tamanhocozinha: "10x10",
    tamanhobanheiro: "5x10",
    tamanhosala: "20x10",
    tamanhoquarto: "5x8",

}


let componentes = {
    volatil: "RAM",
    Naovolatil : "ROM",
    datalancamento : "05/05/2005",
    tipo : "desktop"

}


let academia = {
    quantidadeAparelhos: 12,
    nomeAluno : "Richard",
    nascAluno : "05/05/2005",
    Nacionalidade : "Brasileiro"

}

console.log(estudante1)
console.log(estudante2)
console.log(pessoa)
console.log(casa)
console.log(componentes)
console.log(academia)

console.log('='.repeat(70))

for(const atributo in estudante1){
    console.log(   estudante1[atributo]);
}

for(const atributo in estudante2){
    console.log(   estudante2[atributo]);
}
for(const atributo in pessoa){
    console.log(   pessoa[atributo]);
}
for(const atributo in casa){
    console.log(   casa[atributo]);
}

for(const atributo in componentes){
    console.log(componentes[atributo]);
}
for(const atributo in academia){
    console.log(   academia[atributo]);
}


console.log(Object.keys(estudante1));
console.log(Object.keys(estudante1));
console.log(Object.entries(estudante1));
console.log('='.repeat(70))

console.log(Object.keys(estudante2));
console.log(Object.values(estudante2));
console.log(Object.entries(estudante2));
console.log('='.repeat(70))

console.log(Object.keys(casa));
console.log(Object.values(casa));
console.log(Object.entries(casa));
console.log('='.repeat(70))

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));
console.log('='.repeat(70))

console.log(Object.keys(componentes));
console.log(Object.values(componentes));
console.log(Object.entries(componentes));
console.log('='.repeat(70))

console.log(Object.keys(academia));
console.log(Object.values(academia));
console.log(Object.entries(academia));