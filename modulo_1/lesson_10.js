/*ARRAYS BIDIMENSIONAIS E FUNÇOES*/
// let fruitsList = []

// fruitsList[0] = 'Maça'
// fruitsList[1] = 'Banana'
// fruitsList[2] = 'Melancia'
// fruitsList[3] = 'Morango'
// fruitsList[4] = 'Laranja'

// console.log(fruitsList.indexOf('Maça')) //se não corresponde retorna -1
// let index = fruitsList.indexOf('Laranja')

// if(index === -1){
//     console.log('Elemento não existe')
// } else {
//     console.log(`Elemento existe e está na posição ${index}`)
// }


//Orçanizar uma lista em ordem crescente
// let numberList = []

// numberList[0] = 10
// numberList[1] = 12
// numberList[2] = 8
// numberList[3] = 16
// numberList[4] = 7
// numberList[5] = 10
// console.log(numberList.sort((a, b) => a - b))
// //compara dois numeros, se é maior é dps se é menor é antes

/*FUNÇÃO*/
function calculateLandArea(num1, num2){
    let area = num1 * num2
    return area //função sempre retorna algo
}

let width = 10
let height = 10

let area = calculateLandArea(width, height)
console.log(`A área possui ${area} m².`)

/* TEM 3 ESCOPOS:
- ESCOPO GLOBAL: pode ser chamado em qualquer momento
- ESCOPO FUNÇÃO: só responde numa função especifica
- ESCOPO BLOCO: criadas dento de if e switch*/

//Exercicio: função que ordene alfabeticamente o array
function alphabeticalOrder (letters){
    return letters.sort()
}
let vogals = ['o', 'i', 'u', 'e', 'a']

console.log(alphabeticalOrder(vogals))