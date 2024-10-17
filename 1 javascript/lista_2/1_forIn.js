/*
Acessando Propriedades de Objetos
    Objetivo: Crie um objeto carro com propriedades como marca, modelo,
    ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
    alores no console.
*/
let carro = {
    marca: "Citroen",
    modelo: "C4 Lounge Tendance",
    ano: 2016,
    cor: "Chumbo",
}

for(let key in carro){
    console.log(`${key}: ${carro[key]}`)
}