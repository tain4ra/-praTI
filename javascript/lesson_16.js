// Estrutura de dados: Listas duplamente encadeadas
    /* Ela aponta para os dois lados, é mais complexa
    Arrays: acesso rapido
    Lista duplamente encadeada: manipular de forma flexivel
    Lista simplesmente encadeada: Muita inserçao e remoçao
    Jr. trabalha mais com arrays */

class Node {
    constructor(data){
        this.data = data
        this.next = null
        this.previous = null
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    add(data){
        let newNode = new Node(data)

        if(this.head === null){ //o primeiro elemento que chega se torna head e tail
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode //Aponta a cauda atual para o novo nó como o próximo elemento.
            newNode.previous = this.tail //Conecta o novo nó ao nó que era a antiga cauda como seu elemento anterior
            this.tail = newNode //Define a nova tail como o último elemento adicionado
        }

        this.size++ //lembrar de aumentar o tamanho da lista
    }
    insertAt(data, index){
        if(index < 0 || index > this.size){
            return console.log('Index fora dos limites!')
        }
        let newNode = new Node(data)
        let current = this.head //current ajuda a percorrer pela lista

        if(index === 0){
            if(this.head === null){
                this.head = newNode
                this.tail = newNode
            } else {
                newNode.next = this.head
                this.head.previous = newNode
                this.head = newNode
            }
        } else if(index === this.size){
            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode
        } else {
            for(let i = 0; i < index; i++){
                current = current.next
            }

            newNode.next = current
            newNode.previous = current.previous

            current.previous.next = newNode
            current.previous = newNode
        }
        this.size++
    }
    removeAt(index) {
        if(index < 0 || index >= this.size){
            return console.log("Index fora dos limites!")
        }
        let current = this.head

        if(index === 0){
            this.head = this.head.next

            if(this.head !== null){ //verificamos se a lista nao vai ficar fazia aos a remoçao
                this.head.previous = null
            } else {
                this.tail = null //caso fique vazia
            }
        } else if(index === this.size - 1) { //se for o ultimo elemento
            this.tail = this.tail.previous
            this.tail.next = null
        } else { //remover de uma posiçao especifica
            for(let i = 0; i < index; i++){
                current = current.next
            }
            current.previous.next = current.next
            current.next.previous = current.previous
        }
        this.size--
    }
    getData(index){
        if(index < 0 || index >= this.size){
            return console.log("Index fora dos limites!")
        }

        let current = this.head

        for(let i = 0; i < index; i++){
            current = current.next
        }
        return current.data
    }
    print(){
        let current = this.head
        let result = []

        while(current !== null){
            result.push(current.data)
            current = current.next
        }

        console.log(result.join(' <=> '))
    }
    getSize(){
        return this.size
    }
    isEmpty(){
        return this.size === 0
    }

    clear(){
        this.head = null
        this.tail = null
        this.size = 0

        console.log("Lista limpa!")
    }
}

let lista = new DoublyLinkedList()

lista.add(10)
lista.add(20)
lista.add(30)
lista.add(40)
lista.add(50)

lista.print()

lista.insertAt(5, 0)
lista.insertAt(15, 3)
lista.insertAt(55, lista.getSize())
lista.print()

lista.removeAt(0)
lista.removeAt(3)
lista.removeAt(lista.getSize() - 1)
lista.print()

console.log("Elemento na posição 2: ", lista.getData(2))
console.log("A lista está vazia? ", lista.isEmpty())
console.log("Tamanho da lista: ", lista.getSize())

