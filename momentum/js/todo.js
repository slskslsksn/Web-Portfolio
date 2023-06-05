const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');
const todoRadio = document.querySelector('#todo-radio');
const trashRadio = document.querySelector('#trash-radio');

const TODO_KEY = 'todo';
let todos = [];
const savedTodo = localStorage.getItem(TODO_KEY);
if (savedTodo !== null && savedTodo !== '[]') {
  const parseTodo = JSON.parse(savedTodo);
  console.log(parseTodo);
  todos = parseTodo;
  // for(const todo of parseTodo){
  //   todos.push(todo);
  //   paintTodo(todo);
  // }
  parseTodo.forEach(paintTodo);
}

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newTodo = todoInput.value;
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  paintTodo(newTodoObj);
  todos.push(newTodoObj);
  saveTodo();
  todoInput.value = '';
});

function saveTodo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

function paintTodo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  const button = document.createElement('button');
  button.addEventListener('click', (event) => {
    // todos.splice(todos.indexOf(newTodo),1);
    // console.log(li.id);
    todos = todos.filter((todo) => String(todo.id) !== li.id);
    li.remove();
    saveTodo();
    // if(todos.length == 0) localStorage.removeItem(TODO_KEY);
  });
  // button.innerText = '❌';
  button.innerHTML = '<i class="fa-solid fa-trash"></i>';
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

//FIXME 나중에 옮기든 아니든 고민해볼것
const xButton = document.querySelector('#todo-main-x');
const todoMain = document.querySelector('#todo-main');
xButton.addEventListener('click', () => {
  todoMain.classList.add('hidden');
  // todoMain.parentNode.removeChild(todoMain);
  setTimeout(function () {
    todoMain.classList.remove('hidden');
  }, 1000);
});
let todoRadioState = 'none';
function uncheck() {
  if (this.value === todoRadioState) {
    todoRadioState = 'none';
    this.checked = false;
  } else {
    todoRadioState = this.value;
  }
  console.log(todoRadioState);
}
todoRadio.addEventListener('click', uncheck);
trashRadio.addEventListener('click', uncheck);
