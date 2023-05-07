const clock = document.querySelector('h2#clock');

function getClock(){
  const date = new Date();
  const mm = String(date.getMinutes()).padStart(2, '0');
  const hh = String(date.getHours()).padStart(2, '0');
  const ss = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hh}:${mm}:${ss}`;
  // console.log(`${hh}:${mm}:${ss}`);
}

const MM = 0;
const HH = 0;

function changeTime(){
  
}

getClock();
setInterval(getClock, 1000);