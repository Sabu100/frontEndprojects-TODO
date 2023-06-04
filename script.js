document.addEventListener('DOMContentLoaded', function() {
  const addButton = document.getElementById('add-button');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');
  const taskCounter = document.getElementById('task-counter');

  // Add button click event listener
  addButton.addEventListener('click', function() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
      const listItem = createListItem(todoText);
      todoList.appendChild(listItem);
      updateTaskCounter();
      todoInput.value = '';
    }
  });

  // Todo list click event listener
  todoList.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('delete-button')) {
      const listItem = target.parentNode;
      todoList.removeChild(listItem);
      updateTaskCounter();
    } else if (target.tagName === 'INPUT' && target.type === 'checkbox') {
      const listItem = target.parentNode;
      listItem.classList.toggle('completed');
    }
  });

  // Function to create a new list item
  function createListItem(text) {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const span = document.createElement('span');
    span.textContent = text;
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Delete';
    
    listItem.appendChild(checkbox);
    listItem.appendChild(span);
    listItem.appendChild(deleteButton);
    
    return listItem;
  }
  
  // Function to update the task counter
  function updateTaskCounter() {
    const totalTasks = todoList.children.length;
    taskCounter.textContent = `Total tasks: ${totalTasks}`;
  }
});
