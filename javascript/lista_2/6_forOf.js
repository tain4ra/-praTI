/*
Filtrando Arrays de Objetos
    Objetivo: Crie um array de objetos funcionarios, onde cada objeto
    contém informações como nome, cargo, e salario. Use for of para filtrar
    e exibir apenas os funcionários cujo salário seja maior que um valor
    específico.
*/

let funcionarios = [
    {nome: "Maria", cargo: "orçamentista", salario: 2200},
    {nome: "Julia", cargo: "gerente", salario: 5000},
    {nome: "Roberto", cargo: "estagiário", salario: 900},
]

for(let funcionario of funcionarios){
    if(funcionario.salario > 1000){
        console.log(`Funcionário: ${funcionario.nome}, salário: ${funcionario.salario}.`)
    }
}