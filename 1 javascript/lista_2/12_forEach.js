/*
Atualizando um Array de Objetos
    Objetivo: Crie um array de objetos estoque, onde cada objeto tem
    produto, quantidade e minimo. Use forEach para atualizar a quantidade
    dos produtos que estão abaixo do mínimo, duplicando suas quantidades.
*/
let estoque = [
    {produto: "vinho", quantidade: 10, minimo: 50},
    {produto: "pão", quantidade: 45, minimo: 5},
    {produto: "queijo", quantidade: 17, minimo: 38},
    {produto: "tomate", quantidade: 26, minimo: 7},
    {produto: "manjericão", quantidade: 7, minimo: 18},
]
console.log(estoque)

estoque.forEach(item =>{
    if (item.quantidade < item.minimo){
        item.quantidade *= 2;
        console.log(`Estoque de ${item.produto} atualizado para ${item.quantidade}`);
    }
});

console.log(estoque)