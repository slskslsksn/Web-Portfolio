const imgSrc = ['./img/rock2.png', './img/paper2.png', './img/scissors2.png']
const imgAlt = ['바위', '보자기', '가위'];


// 버튼
function updateImageData(btn){
  if(++btn.value >= imgSrc.length) btn.value = 0;
  const img = btn.querySelector('img');
  img.src = imgSrc[btn.value];
  img.alt = imgAlt[btn.value];
}