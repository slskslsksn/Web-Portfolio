const links = [
  ['tt_hour_rule/10000hours.html', '1만 시간의 법칙'],
  ['order-matching-game/omg.html', 'Order Matching Game'],
  // ['shortpost/index.html', 'Short Post']
];

const GIT_HOST = 'slskslsksn.github.io';
const host = document.location.host;

const IMSI = '/Web-Portfolio/';
const ol = document.querySelector('#link-list');

function createLi(link, value){
  if(host === GIT_HOST)
    link = IMSI + link;
  const li = `<li><a href=${link}>${value}</a></li>`;
  console.log(ol.innerHTML);
  ol.innerHTML += li;
}

for(const link of links){
  createLi(link[0], link[1]);
}
