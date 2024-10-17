/*ESTRUTURA DE DADOS: Listas encadeadas*/
/*
    Listas são formadas por nós (node), cada nó é composto 
    por: nome, valor e ponteiro apontando para o prox elemento.
    Um array é uma forma de lista.
    O primeiro elemento é sempre o HEAD,
    cada elemento obrigatoriamente é conectado
    a outro.
*/

class Node { //criou um obj node
    constructor(data){
        this.data = data
        this.next = null //inicia null pq ainda nao vai p lugar nenhum
    }
}


class LinkedList { //criou obj linkedlist, como um obj array que instancia
    constructor(){
        this.head = null
        this.size = 0
    }

    add(data) {
        //primeira etapa: criar o node
        let newNode = new Node(data)
        //ordem se for o primeiro:
        if(this.head === null){//se o valor de head for nulo, a lista está vazia
            this.head = newNode //aqui definimos que head é o novo nó, para iniciarmos a partir de 0
        } else {
            let current = this.head
            while(current.next !== null){
                /*
                aqui é onde descobrimos o tamanho da lista
                ele vai transformando o prox em current ate ser null
                quando o proximo for null ele para = fim da lista
                */
                current = current.next
                /*
                aqui ele vai se transformando no proximo
                até que o proximo seja nulo
                */
            }
            //dizer que meu current.next é o novo node
            current.next = newNode
        }
        //aumentar o tamanho
        this.size++ 
        /*
        se o head existir, adiciona, se existir proximo vai 
        adicionando ate que seja nulo
        */
    }
    insertAt(data,index){
        if(index < 0 || index > this.size){
            return console.log('Index fora dos limites')
        } //aqui verifica se é uma posiçao valida

        let newNode = new Node(data) //cria um novo espaço
        let current = this.head
        let previous
        
        if (index === 0){
            newNode.next = this.head
            this.head = newNode
        } else {
        for(let i = 0; i < index; i++){
            previous = current
            current = current.next
        }
        newNode.next = current
        previous.next = newNode
        }
        this.size++ 
    }

    removeFrom(index){ //remover do inicio
        if(index < 0 || index > this.size){
            return console.log('Index fora dos limites')
        }

        let current = this.head
        let previous

        if(index === 0){
            this.head = current.next
            //nesse caso o primeiro se desconecta da lista e fica a esmo
        } else {
            for(let  i = 0; i < index; i++){
                previous = current
                current = current.next
            }
            previous.next = current.next
        }
        this.size-- //= this.size -1
        return current.data //pode retornar os dados excluidos, opcional
    }

    indexOf(data){
        let current = this.head //sempre inicia no 0
        let index = 0

        while(current !== null){
            if(current.data === data){
                return index
            }
            index++
            current = current.next
        }
        return -1
    }

    printlist(){
        let current = this.head
        while(current !== null){
            console.log(current.data)
            current = current.next
        }
    }
}

let list = new LinkedList()

list.add("Elemento 0")
list.add("Elemento 1")
list.add("Elemento 2")
list.add("Elemento 3")
// list.insertAt("Novo elemento", 0)
list.removeFrom(0)
list.printlist()
console.log(list.indexOf("Elemento 3"))
