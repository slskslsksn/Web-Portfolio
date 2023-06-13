const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');
const todoRadio = document.querySelector('#todo-radio');
const trashRadio = document.querySelector('#trash-radio');
const nocontent = document.querySelectorAll('.nocontent');
const TODO_KEY = 'todo';
let todos = [];
const savedTodo = localStorage.getItem(TODO_KEY);
if (savedTodo !== null && savedTodo !== '[]') {
  const parseTodo = JSON.parse(savedTodo);
  // console.log(parseTodo);
  todos = parseTodo;
  // for(const todo of parseTodo){
  //   todos.push(todo);
  //   paintTodo(todo);
  // }
  parseTodo.forEach(paintTodo);
}
toggleEmptyString();
function toggleEmptyString() {
  if (todos.length == 0) nocontent[0].classList.remove('none');
  else nocontent[0].classList.add('none');
}

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newTodo = todoInput.value;
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
    done: false,
  };
  paintTodo(newTodoObj);
  todos.push(newTodoObj);
  saveTodo();
  todoInput.value = '';
});

function saveTodo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
  toggleEmptyString();
}

// function paintTodo(newTodo) {
//   const li = document.createElement('li');
//   li.id = newTodo.id;
//   const span = document.createElement('span');
//   span.innerText = newTodo.text;
//   const button = document.createElement('button');
//   button.addEventListener('click', (event) => {
//     // todos.splice(todos.indexOf(newTodo),1);
//     // console.log(li.id);
//     todos = todos.filter((todo) => String(todo.id) !== li.id);
//     li.remove();
//     saveTodo();
//     // if(todos.length == 0) localStorage.removeItem(TODO_KEY);
//   });
//   // button.innerText = '❌';
//   button.innerHTML = '<i class="fa-solid fa-trash"></i>';
//   li.appendChild(span);
//   li.appendChild(button);
//   todoList.appendChild(li);
// }

function paintTodo(newTodo) {
  // div.todo-line
  const todoLine = document.createElement('div');
  todoLine.classList.add('todo-line');
  todoList.appendChild(todoLine);

  // checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.name = 'todo-area-check';
  checkbox.id = newTodo.id;
  if (newTodo.done === true) {
    checkbox.checked = true;
  }
  checkbox.addEventListener('change', (event) => {
    let idx = todos.findIndex((todo) => todo.id === newTodo.id);
    console.log(todos[idx].id);
    if (event.target.checked) todos[idx].done = true;
    else todos[idx].done = false;
    saveTodo();
  });
  todoLine.appendChild(checkbox);

  // label
  const label = document.createElement('label');
  label.setAttribute('for', newTodo.id);
  label.classList.add('todo-line-label');
  todoLine.appendChild(label);
  // span for checkbox icon
  const checkIconSpan = document.createElement('span');
  checkIconSpan.classList.add('todo-check');
  label.appendChild(checkIconSpan);

  // i for square icon
  const sqaureIcon = document.createElement('i');
  sqaureIcon.classList.add('fa-regular', 'fa-square');
  checkIconSpan.appendChild(sqaureIcon);

  // i for cehcekd icon
  const checkedIcon = document.createElement('i');
  checkedIcon.classList.add('fa-regular', 'fa-square-check');
  checkIconSpan.appendChild(checkedIcon);

  // span for comment
  const commentSpan = document.createElement('span');
  commentSpan.classList.add('todo-comment');
  commentSpan.textContent = newTodo.text;
  label.appendChild(commentSpan);

  const trashIconDiv = document.createElement('div');
  trashIconDiv.classList.add('todo-trash-icon');
  todoLine.appendChild(trashIconDiv);

  // i for x icon
  const xButton = document.createElement('i');
  xButton.classList.add('fa-solid', 'fa-rectangle-xmark');
  xButton.setAttribute('id', 'todo-main-x');
  xButton.addEventListener('click', (event) => {
    // todos.splice(todos.indexOf(newTodo),1);
    // console.log(li.id);
    todos = todos.filter((todo) => String(todo.id) !== checkbox.id);
    todoLine.remove();
    saveTodo();
    // if(todos.length == 0) localStorage.removeItem(TODO_KEY);
  });
  trashIconDiv.appendChild(xButton);
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
  // console.log(todoRadioState);
}
todoRadio.addEventListener('click', uncheck);
trashRadio.addEventListener('click', uncheck);
