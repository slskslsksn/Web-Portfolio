import { TRASH_KEY } from './constants.js';
import { create } from './creater.js';

const trashList = document.querySelector('#trash-list');

// TODO: trash 관련 정리
const trashCan = [];

const savedTrash = localStorage.getItem(TRASH_KEY);
// toTrash
function toTrash(todo) {
  //  trash date 생성
  todo.delDate = Date.now();
  trashCan.push(todo);
  const cd = new Date(todo.id);
  const dd = new Date(todo.delDate);
  console.log(cd.getDate(), dd.getDate());
}
// return -> return시  id 순으로 정렬
// clean for 5days
function cleanTrashCan() {
  // 5일 계산하기
  // if 5일 안지남
  // trashList 추가
  // trashCan에 trashList 넣기
}
// FIXME 날짜 비교 참고해서 바꾸기
function compareDate(date11, date22) {
  const time1 = new Date('2023-06-01T23:59:00Z'); // May 30, 2023 at 23:59 UTC
  const time2 = new Date('2023-06-02T00:01:00Z'); // June 2, 2023 at 00:01 UTC

  // Adjust the dates to the local time zone
  const localTime1 = new Date(time1.getTime() + time1.getTimezoneOffset() * 60000);
  const localTime2 = new Date(time2.getTime() + time2.getTimezoneOffset() * 60000);

  const date1 = new Date(localTime1.getFullYear(), localTime1.getMonth(), localTime1.getDate());
  const date2 = new Date(localTime2.getFullYear(), localTime2.getMonth(), localTime2.getDate());

  const differenceInMilliseconds = Math.abs(date2 - date1); // Absolute difference in milliseconds

  const differenceInDays = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24)); // Difference in days

  console.log(differenceInDays); // Output: 3
}

function paintTrash(trash) {
  let editOnOffList = [];
  // div.todo-line
  const trashLine = create('div', 'todo-line');
  trashList.appendChild(trashLine);

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
  editInput.classList.add('todo-comment-input', NONE);
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
      elementOnOff(editOnOffList);
    }
  });

  // div for input border
  const editInputBorder = document.createElement('div');
  editInputBorder.classList.add('todo-comment-input', NONE);
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
  xButton.classList.add('fa-solid', 'fa-rectangle-xmark', 'todo-x-button', NONE);
  xButton.addEventListener('click', () => {
    elementOnOff(editOnOffList);
  });
  rightBtnsDiv.appendChild(xButton);
  // i for x icon
  const trashButton = document.createElement('i');
  trashButton.classList.add('fa-solid', 'fa-trash-can', 'todo-trash-icon');
  trashButton.addEventListener('click', (event) => {
    Trash.toTrash(newTodo);
    todos = todos.filter((todo) => String(todo.id) !== checkbox.id);
    todoLine.remove();
    saveTodo();
    // if(todos.length == 0) localStorage.removeItem(TODO_KEY);
    console.log(todos, Trash.trashCan);
  });
  rightBtnsDiv.appendChild(trashButton);

  // adding editOnOffList
  editOnOffList.push(editInput);
  editOnOffList.push(editInputBorder);
  editOnOffList.push(commentSpan);
  editOnOffList.push(editButton);
  editOnOffList.push(xButton);
}

export default {
  trashCan,
  toTrash,
};
