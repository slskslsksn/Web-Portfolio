const btnStart = document.getElementById('btn-start');
btnStart.addEventListener('click', () => {
  document.getElementById('input-div').style.display='block';
  btnStart.style.display = 'none';  
});



const resultDiv = document.querySelector('.result');
const inputNum = document.getElementById('input-num');
// inputNum.addEventListener('input', (event) => {
  //   if(inputNum.value < 5) inputNum.value = 5;
  // });
  
inputNum.addEventListener('keydown', (event) => {
  const arrows = ['ArrowUp', 'ArrowDown'];
  // if(event.key == 'ArrowUp' || event.key=='ArrowDown')
  if(arrows.includes(event.key))
  event.preventDefault();
});

const btnGo = document.getElementById('btn-go');
btnGo.addEventListener('click', () => {
  if(inputNum.value < 5) inputNum.value = 5;
  else if(inputNum.value > 10) inputNum.value = 10;
  
  settingGame(inputNum.value);
  document.getElementById('input-div').style.display='none';
  document.getElementById('game').style.display='block';
});
console.log(document.querySelectorAll('#btn-test'));


const btnSubmit = document.querySelector('.btn-submit');
const tbody = document.querySelector('tbody');
let num = 1;

btnSubmit.addEventListener('click', () => {
  let result = 0;
  for(let i=0; i<btns.length; i++){
    if(btns[i].value == rpsSet[i])
    result++;
  }
  console.log(result);
  const row = tbody.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  const cell3 = row.insertCell();
  cell1.innerText = num++;
  cell2.innerHTML = getResultImg();
  cell3.innerText = result;
  resultDiv.scrollTop = resultDiv.scrollHeight;
});

function getResultImg(){
  let htmlString = '';
  for(btn of btns){
    htmlString += `<img src="${imgSrc[btn.value]}" class="img-result" alt="${imgAlt[btn.value]}">`

  }
  return htmlString;
}