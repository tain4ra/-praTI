/*
Agrupando Elementos com forEach
    Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
    cliente, produto, e quantidade. Use forEach para criar um objeto que
    agrupa a quantidade total de produtos por cliente.
*/

let pedidos = [
    {cliente: "Mateus", produto: "pós-barba", quantidade: 3},
    {cliente: "Lucas", produto: "perfume", quantidade: 5},
    {cliente: "Mateus", produto: "espuma de barbear", quantidade: 4},
    {cliente: "Tiago", produto: "hidratante", quantidade: 2},
    {cliente: "Lucas", produto: "sabonete", quantidade: 1},
]

let pedidosCount = {};

pedidos.forEach(pedido =>{
    if (pedidosCount[pedido.quantidade]) {
        pedidosCount[pedido.quantidade] += pedido.quantidade;
    } else {
        pedidosCount[pedido.cliente] = pedido.quantidade
    }
});

console.log(pedidosCount)