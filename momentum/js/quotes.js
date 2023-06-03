// source - https://www.amazingtalker.co.kr/blog/ko/kr-en/46456/
// TODO 나중에 번역도 추가해서 '번역보기 옵션' 추가해보기
const quotes = [
  {
    quote: 'You will face many defeats in life, but never let yourself be defeated',
    author: 'Maya Angelou',
  },
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall',
    author: 'Nelson Mandela',
  },
  {
    quote: 'In the end, it’s not the years in your life that count. It’s the life in your years',
    author: 'Abraham Lincoln',
  },
  {
    quote: 'Success is going from failure to failure without a loss of enthusiasm',
    author: 'Winston Churchill',
  },
  {
    quote: 'Try not to become a man of success but rather try to become a man of value',
    author: 'Albert Einstein',
  },
  {
    quote: 'find that the harder I work, the more luck I seem to have',
    author: 'Thomas Jefferson',
  },
  {
    quote: 'I never dreamed about success, I worked for it',
    author: 'Estee Lauder',
  },
  {
    quote: 'Do not try to be original, just try to be good',
    author: 'Paul Rand',
  },
  {
    quote: 'If you really want to do something, you’ll find a way. If you do not, you’ll find an excuse',
    author: 'Jim Rohn',
  },
  {
    quote: 'Love, free as air at sight of human ties, Spreads his light wings, and in a moment flies',
    author: 'Alexander Pope',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQoute = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQoute.quote;
author.innerText = todaysQoute.author;
