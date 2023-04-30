const btnStart = document.getElementById('btn-start');
// const pmtMsg = "게임에서 맞출 개수를 정하세요(5~10)";
btnStart.addEventListener('click', () => {
  if(document.getElementById('input-div').style.display==='block')
    document.getElementById('input-div').style.display='none';
  else 
    document.getElementById('input-div').style.display='block'
  // let input = prompt(pmtMsg);
  // if(input != null){
  //   // 숫자 체크
    btnStart.style.display = 'none';  
  // }

});
const rspSet = [];

function openGame(num){
  const div = document.querySelector('.choice');
  const createCode = '<button type="button" class="btn-choice img-btn"><img src="./img/rock2.png" alt="주먹"></button>';
  for(let i=0; i<num; i++){
    rspSet.push( Math.floor(Math.random() * 3));
    const btn = crerateDOM(createCode);
    div.insertBefore(btn, div.lastElementChild);
  }
  btns = document.querySelectorAll('.btn-choice');
  for(const btn of btns){
    btn.value = 0;
    btn.addEventListener('click', () => {
      updateImageData(btn)
    });
  }
  for(const i of rspSet){
    console.log(i);
  }
}

function crerateDOM(htmlString){
  const div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
}
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
    
    openGame(inputNum.value);
    document.getElementById('input-div').style.display='none';
    document.getElementById('game').style.display='block';
  });
  console.log(document.querySelectorAll('#btn-test'));
  let btns = [];
  const imgSrc = ['./img/rock2.png', './img/paper2.png', './img/scissors2.png']
  const imgAlt = ['바위', '보자기', '가위'];
  
  // const data = updateImageData(btnData);
  function updateImageData(btn){
    if(++btn.value >= imgSrc.length) btn.value = 0;
    const img = btn.querySelector('img');
  img.src = imgSrc[btn.value];
  img.alt = imgAlt[btn.value];
}

const btnSubmit = document.querySelector('.btn-submit');
const tbody = document.querySelector('tbody');
let num = 1;

btnSubmit.addEventListener('click', () => {
  let result = 0;
  for(let i=0; i<btns.length; i++){
    if(btns[i].value == rspSet[i])
    result++;
  }
  console.log(result);
  // if(result == rspSet.length) alert('정답');
  // else alert(`${result}`);
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