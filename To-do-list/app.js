const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newTask = todoInput.ariaValueMax;
    if (newTask === '') {
        alert('Please enter a task');
        return;
    }

    todoInput.value = '';
});

function addTask(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task;


    todoList.appendChild(listItem);
}