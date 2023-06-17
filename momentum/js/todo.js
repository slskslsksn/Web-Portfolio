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
  todoRadio.checked = true;
  todoList.scrollTop = todoList.scrollHeight;
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
  let editOnOffList = [];
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
    const idx = todos.findIndex((todo) => todo.id === newTodo.id);
    // console.log(todos[idx].id);
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

  // div for comment container
  const commentDiv = document.createElement('div');
  commentDiv.classList.add('todo-comment');
  label.appendChild(commentDiv);

  // span for todo comment text
  const commentSpan = document.createElement('span');
  commentSpan.classList.add('todo-comment-text');
  commentSpan.textContent = newTodo.text;
  commentDiv.appendChild(commentSpan);

  // input for todo edit
  const editInput = document.createElement('input');
  editInput.type = 'text';
  editInput.classList.add('todo-comment-input', 'none');
  commentDiv.appendChild(editInput);
  editInput.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
      const editedTodo = editInput.value;
      const index = todos.findIndex((todo) => todo.id === newTodo.id);
      todos[index].text = editedTodo;
      commentSpan.textContent = editedTodo;
      saveTodo();
      elementOnOff(editOnOffList);
    } else if (event.key == 'Escape') {
      // console.log('esc');
      elementOnOff(editOnOffList);
    }
  });

  // div for input border
  const editInputBorder = document.createElement('div');
  editInputBorder.classList.add('todo-comment-input', 'none');
  commentDiv.appendChild(editInputBorder);

  // div for right buttons container
  const rightBtnsDiv = document.createElement('div');
  rightBtnsDiv.classList.add('todo-right-buttons');
  todoLine.appendChild(rightBtnsDiv);

  // i for edit button
  const editButton = document.createElement('i');
  editButton.classList.add('fa-solid', 'fa-pen-to-square', 'todo-edit-button');
  editButton.addEventListener('click', (event) => {
    // change editInput.value from commentSpan.innerText
    editInput.value = commentSpan.innerText;
    setTimeout(() => {
      editInput.focus();
    }, 10);

    // change buttons and commentSpan & editInput
    elementOnOff(editOnOffList);
  });
  rightBtnsDiv.appendChild(editButton);

  // i for x button
  const xButton = document.createElement('i');
  xButton.classList.add('fa-solid', 'fa-rectangle-xmark', 'todo-x-button', 'none');
  xButton.addEventListener('click', () => {
    elementOnOff(editOnOffList);
  });
  rightBtnsDiv.appendChild(xButton);
  // i for x icon
  const trashButton = document.createElement('i');
  trashButton.classList.add('fa-solid', 'fa-trash-can', 'todo-trash-icon');
  trashButton.addEventListener('click', (event) => {
    toTrash(newTodo);
    todos = todos.filter((todo) => String(todo.id) !== checkbox.id);
    todoLine.remove();
    saveTodo();
    // if(todos.length == 0) localStorage.removeItem(TODO_KEY);
    console.log(todos, trashCan);
  });
  rightBtnsDiv.appendChild(trashButton);

  // adding editOnOffList
  editOnOffList.push(editInput);
  editOnOffList.push(editInputBorder);
  editOnOffList.push(commentSpan);
  editOnOffList.push(editButton);
  editOnOffList.push(xButton);
}

function elementOnOff(elements) {
  for (const element of elements) {
    element.classList.toggle('none');
  }
}

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

window.addEventListener('keydown', (event) => {
  const tag = document.activeElement.tagName;
  if (event.key == 'Enter' && tag === 'BODY') {
    setTimeout(() => {
      todoInput.focus();
    }, 10);
  }
});
