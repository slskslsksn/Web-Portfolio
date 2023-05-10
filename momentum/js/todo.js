const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');

const TODO_KEY = 'todo';
let todos = [];
const savedTodo = localStorage.getItem(TODO_KEY);
if(savedTodo !== null && savedTodo !== '[]'){
  const parseTodo = JSON.parse(savedTodo);
  console.log(parseTodo);
  todos = parseTodo
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
  }
  paintTodo(newTodoObj);
  todos.push(newTodoObj);
  saveTodo();
  todoInput.value='';
});

function saveTodo(){
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

function paintTodo(newTodo){
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  const button = document.createElement('button');
  button.addEventListener('click', (event) => {
    // todos.splice(todos.indexOf(newTodo),1);
    // console.log(li.id);
    todos = todos.filter(todo => String(todo.id) !== li.id);
    li.remove();
    saveTodo();
    // if(todos.length == 0) localStorage.removeItem(TODO_KEY);
  });
  button.innerText = '❌';
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}



