const prompt = require('prompt-sync')()

/*INTRODUÇAO A OBJETOS*/
// Um objeto tem: caracteristicas, açoes e estado
/*CANECA
Cilindrica, rosa, funda
Receber liquidos e mante-los quentes
Vazia e suja*/

let serie = { //obj declarado com chaves
    nome: "This is us",
    genero: ["Drama", "vida real"],
    classificacao: 18,
    status: "Concluida",
    nrTemporadas: 7,
    nrEps: { //pode-se adc obbj dentro de obj
        temp1: 15,
        temp2: 18,
        temp3: 12
    },

    mostrarCaracteristicas: function(){
        return `O nome da série é: ${this.nome} e sua classificaçao é ${this.classificacao}`
    } //this faz ref ao proprio obj
}
console.log(serie)
console.log(serie.nome)
console.log(serie.genero[0])
console.log(serie.mostrarCaracteristicas())

let livro = {
    title: "It Ends with Us",
    encadernacao: "brochura",
    autor: "Colleen Hoover",
    idioma: "Inglês",
    estado: "Em andamento",  // Corrigido: vírgula adicionada
    mostrarCaracteristicas: function() {
        return this.title + " foi escrito por " + this.autor
    } //sempre q nao tiver um return vai retornar undefinet (padrao padrao)
}
console.log(livro.mostrarCaracteristicas())

// //Adicionar caracteristicas
// livro.nrPags = 384,
// livro.semelhantes = {
//     adulto: "outro1",
//     juvenil: "outro2"
// }

// livro.confirmarVenda = () => {return "VENDIDO"} //é uma maneira mais curta de escrever uma função anônima
// console.log(livro)
// console.log(livro.confirmarVenda())

// É possível atribuir uma variavel para o obj
let tipo = "tenis"
let marca = "asics"
let modelo = "japan"

let calcado = {
    tipo: tipo, //tipo do objeto = tipo definido fora do objeto
    marca: marca,
    modelo: modelo
}
calcado.numero = 38

console.log(calcado)

//FUNÇAO CONSTRUTORA: uma funçao que serve como base para construçao de outra coisa
//é uma função que constroi um obj
// function computador(processador, gpu, ram, armazenamento) {
//     this.processador = processador
//     this.gpu = gpu
//     this.ram = ram
//     this.armazenamento = armazenamento

//     this.ligar = function () {
//         console.log(`O ${this.processador} está funcionando`)
//     }

//     this.mostrarEspecificacoes = function () {
//         console.log(`processador: ${this.processador}
//                     gpu: ${this.gpu}
//                     ram: ${this.ram}
//                     armazenamento: ${this.armazenamento}`)
//     }
// }

//Agora posso construir meu pc
//atenção para o new, que é responsavel por de fato construir esse novo objeto com base na funçao definida
//é possivel fazer a mesma coisa usando o metodo design pattern
// let pc = new computador("i9", "RTX4090", "16GB", "500GB SSD")
// console.log(pc.mostrarEspecificacoes())

/*DESIGN PATTERNS: Factory*/
function jogos(titulo, genero, anoLancamento, empresa, jogar){
    return{
        titulo,
        genero,
        anoLancamento,
        empresa,
        jogar
    }
}

let jogo1 = jogos("Final Fantasy", "RPG", "1997", "Square Soft", () => console.log("Jogando"))
// console.log(jogo1)
// console.log(jogo1.jogar())


/*
ESTRUTURAS DE REPETIÇÃO
for in
for while
for each
*/

/* FOR IN */
for(let key in jogo1){
    console.log(`${key}: ${jogo1[key]}`)
}
//a key simula a posiçao de todas as caracteristicas atribuidas ao obj
//for in é ideal para objetos

/* FOR OF */
//ideal para arrays, obrigatoriamente tem q ser iteravel (string ou outras coisas tambem da certo)
const jogadores = ['Pelé', 'Messi', 'Ronaldo']

for(let jogador of jogadores){
    console.log(jogador)
}

for(let key in calcado){
    console.log(`${key}: ${calcado[key]}`)
}

for(let tenis of Object.keys(calcado)){
    console.log(calcado[tenis])
}
