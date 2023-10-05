/* CONSTANT */
// update
const VERSION_NUM = '231005';

// for url
const GIT_HOST = 'slskslsksn.github.io';
const GIT_ROOT = '/Web-Portfolio/';


const links = [
  ['tt_hour_rule/10000hours.html', '1만 시간의 법칙'],
  ['order-matching-game/omg.html', 'Order Matching Game'],
  ['momentum', '모멘텀 (to-do web app)'],
  ['https://slskslsksn-emotion-diary.web.app/', '감정 일기장(React)'],
  // ['shortpost/index.html', 'Short Post']
];

const host = document.location.host;
const ol = document.querySelector('#link-list');

function createLi(link, value){
  if(host === GIT_HOST)
    link = GIT_ROOT + link;
  const li = `<li><a href=${link} target="_blank">${value}</a></li>`;
  ol.innerHTML += li;
}

for(const link of links){
  createLi(link[0], link[1]);
}


/* footer */
const footer = document.querySelector('footer');
// version
const version = document.getElementById('footer-version');
version.innerText = `Version ${VERSION_NUM}`

// email
const EMAIL_ADDRESS = 'yjm3623@gmail.com';
const email = document.getElementById('footer-email');
email.addEventListener('click', () => {
  navigator.clipboard.writeText(EMAIL_ADDRESS);
})
// navigator.clipboard.writeText("복사할 텍스트") 