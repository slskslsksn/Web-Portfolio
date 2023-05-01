
// 정답목록
const rpsSet = [];
// 버튼 목록
let btns = [];
// 플레이어가 원하는 숫자(num)에 맞게 rpsSet에 0,1,2중 랜덤으로 뽑아서 삽입
// 플레이어가 가위바위보를 선택할 수 있는 이미지 버튼 생성
function settingGame(num){
  const div = document.querySelector('.choice');
  // 생성할 가위바위보 버튼 html 코드
  const createCode = '<button type="button" class="btn-choice img-btn"><img src="./img/rock2.png" alt="주먹"></button>';
  // num 만큼 rps 정하고 btn 생성
  for(let i=0; i<num; i++){
    rpsSet.push( Math.floor(Math.random() * 3));
    const btn = crerateDOM(createCode);
    // 제출 버튼이 이미 div에 있어서 제출버튼 앞으로 btn 삽입
    div.insertBefore(btn, div.lastElementChild);
  }
  // 생성된 btn 목록을 가져와 클릭이벤트 추가
  btns = document.querySelectorAll('.btn-choice');
  for(const btn of btns){
    btn.value = 0;
    btn.addEventListener('click', () => {
      // 버튼 클릭시 바위->보자기-> 주먹 순으로 변경
      updateImageData(btn)
    });
  }
  for(const i of rpsSet){
    console.log(i);
  }
}

// 이미지 버튼을 생성하기 위한 방식
function crerateDOM(htmlString){
  // div 생성
  const div = document.createElement('div');
  // div에 자식으로 dom 생성
  div.innerHTML = htmlString.trim();
  // 생성된 자식 dom 반환
  return div.firstChild;
}