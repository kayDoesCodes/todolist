const addBtn = document.getElementById('add');
const todoInput = document.querySelector('.js-name-input');
const todoListContainer = document.querySelector('.js-todo-list');
const dateInputElement = document.querySelector(".js-date-input");
const darkModeToggle = document.querySelector('.js-moon');
const lightModeToggle = document.querySelector('.js-sun');

let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

function renderTodoList() {

  let todoListHTML = '';

  todoList.forEach( (todoObject, index) => {
    /*const name = todoObject.name;
    const dueDate = todoObject.dueDate;*/
    // Destructuring the todoObject to get name and dueDate
    const {name, dueDate} = todoObject;

    const html = `
    <div class="one">${name}</div>
    <div class="two">${dueDate}</div> 
      <button class="js-delete-todolist-button">
        Delete
      </button>`;

    todoListHTML += html;
  });

  /*for(let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    // Destructuring the todoObject to get name and dueDate
    const {name, dueDate} = todoObject;

    const html = `
    <div class="one">${name}</div>
    <div class="two">${dueDate}</div> 
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
        saveTodoList();
        localStorage.removeItem('todoList');"
      >Delete</button>`;

    todoListHTML += html;
  };*/

  todoListContainer.innerHTML = todoListHTML;
  // Clear the input fields after rendering the list

  document.querySelectorAll(".js-delete-todolist-button").forEach((deleteButton, index) => {
    deleteButton.addEventListener("click", () => {
      todoList.splice(index, 1);
        renderTodoList();
        saveTodoList();
        localStorage.removeItem('todoList');
    })
  });
};

saveTodoList(); // Save the initial empty list to localStorage
// Save to localStorage
function saveTodoList() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
};

function addTodo(){
  const inputElement = todoInput;
  const name = inputElement.value;
  const dueDate = dateInputElement.value;

  if(!name || !dueDate) {
    remove(addTodo());
  };
  
  todoList.push({name, dueDate});

  inputElement.value = ''; // Clear the input field after adding

  renderTodoList();
  saveTodoList();

  dateInputElement.value = ''; // Clear the date input field after adding 
};

addBtn.addEventListener("click", () => {addTodo()});

function toggleDarkMode() {
  darkModeToggle.classList.add('is-active');
  const body = document.body;
  body.classList.add('dark-mode');
};

darkModeToggle.addEventListener('click', () => {
  toggleDarkMode();
});

lightModeToggle.addEventListener('click', () => {
  darkModeToggle.classList.remove('is-active');
  const body = document.body;
  body.classList.remove('dark-mode');
});

document.body.addEventListener("keydown", (event) => {
  if(event.key === 'Enter') {
    addTodo();
  }
});

/*const todoList = [
  'make dinner',
  'get food',
  'codding with team'
];

for(let i = 0; i < todoList.length; i++) {
  const value = todoList[i];
  console.log(value);
}*/

//calculate the sum of all numbers in an array.

/*const nums = [1, 1, 3];
let total = 0;

for(let i = 0; i < nums.length; i++) {
  const num = nums[i];
  total += num;
}

console.log(total);*/