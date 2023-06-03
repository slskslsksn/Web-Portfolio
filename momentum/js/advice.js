const adviceUrl = 'https://api.adviceslip.com/advice';
fetch(adviceUrl)
  .then((response) => response.json())
  .then((data) => {
    const adviceSpan = document.querySelector('#advice span');
    const advice = data.slip.advice;
    adviceSpan.innerText = `"${advice}"`;
  });
