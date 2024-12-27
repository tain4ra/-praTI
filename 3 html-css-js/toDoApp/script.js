document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const saveTasks = () => localStorage.setItem('tasks', JSON.stringify(tasks));

    const renderTasks = () => {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';

            li.innerHTML = `
                <div>
                    <strong>${task.description}</strong> <br>
                    <small>${task.date} - ${task.type} - ${task.weight}</small>
                </div>
                <div>
                    <button class="btn btn-sm btn-warning" onclick="editTask(${index})">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteTask(${index})">Delete</button>
                </div>
            `;

            taskList.appendChild(li);
        });
    };

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const description = document.getElementById('description').value;
        const date = document.getElementById('date').value;
        const type = document.getElementById('type').value;
        const weight = document.getElementById('weight').value;

        tasks.push({ description, date, type, weight });
        saveTasks();
        renderTasks();
        taskForm.reset();
    });

    window.editTask = (index) => {
        const task = tasks[index];
        document.getElementById('description').value = task.description;
        document.getElementById('date').value = task.date;
        document.getElementById('type').value = task.type;
        document.getElementById('weight').value = task.weight;

        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    };

    window.deleteTask = (index) => {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    };

    renderTasks();
});
