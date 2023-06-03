// TODO 나중에 정리하기

const images = ['0.jpg', '1.jpg', '2.jpg', '3.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');
// const unsplashUrl = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_API_KEY}`;
const unsplashUrl = `https://source.unsplash.com/random/?`;
bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);
// document.body.style.backgroundImage = `url(img/${chosenImage})`;
// document.body.style.backgroundImage = `url('https://source.unsplash.com/random')`;
// document.body.style.backgroundRepeat = 'no-repeat';
// document.body.style.backgroundSize = 'cover';
// document.body.style.backgroundAttachment = 'fixed';
// document.body.style.backgroundPosition = 'center center';
// document.body.style.backgroundImage = `url(${unsplashUrl})`;
// fetch(unsplashUrl)
//   .then((response) => response.json())
//   .then((data) => {
//     document.body.style.backgroundImage = `url(${data.urls.regular})`;
//     console.log(data.urls.regular);
// });

function setBackground(weather) {
  document.body.style.backgroundImage = `url(${unsplashUrl + weather})`;
}
