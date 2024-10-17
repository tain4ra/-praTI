/*
Manipulando Objetos Complexos
    Objetivo: Crie um objeto empresa com uma propriedade departamentos,
    que é um array de objetos. Cada departamento tem um nome e uma lista
    de funcionarios. Use for in e for of para iterar sobre os departamentos
    e seus funcionários, exibindo o nome de cada funcionário junto com o
    departamento ao qual pertence.
*/
let empresa = {
    departamentos: [
        {
            nome: "administração",
            funcionarios: ["Maria", "Melissa", "Manuela"],
        },
        {
            nome: "RH",
            funcionarios: ["Natacha", "Natalia", "Natanael"],
        },
        {
            nome: "almox",
            funcionarios: ["Otávio", "Otacílio", "Osvaldo"],
        },
    ]
}

for(let indice in empresa.departamentos){
    let departamento = empresa.departamentos[indice]

    for (let funcionario of departamento.funcionarios) {
        console.log(`Funcionário: ${funcionario}, Departamento: ${departamento.nome}`);
    }
}