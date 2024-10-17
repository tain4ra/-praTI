let taskList = document.getElementById('task-list')
let taskInput = document.getElementById('task-input')
let addTaskBtn = document.getElementById('add-task-btn')

let filters = document.querySelectorAll('.filter-btn')

addTaskBtn.addEventListener('click', () =>{
    let taskText = taskInput.ariaValueMax.trim()

    if(taskText) {
        let li = createTaskElement(taskText)

        taskList.appendChild(li)

        taskInput.value = ''
    }
})

function createTaskElement(text) {
    let li = document.createTaskElement('li')

    li.textContext = text

    let removeBtn = document.createElement('span')
    removeBtn.textContent = 'Remover'
    removeBtn.classList.add('remove-btn')

    removeBtn.addEventListener('click', li.remove())//parenteses diz q a funçao vai ser automaticamente chamada

    li.appendChild(removeBtn)

    let editBtn = document.createElement('span')
    editBtn.textContent = 'Editar'
    editBtn.classList.add('edit-btn')

    editBtn.addEventListener('click', ediTask(li))

    li.appendChild(editBtn)
}

function editTask(li){
    if(li.classList.contains('editing')){
        li.class
    }
}