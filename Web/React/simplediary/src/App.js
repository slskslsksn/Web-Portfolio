import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: 'yjm',
    content: 'hi yjm',
    emotion: 5,
    create_date: new Date().getTime(),
  },
  {
    id: 2,
    author: '홍길동',
    content: 'hi 홍길동',
    emotion: 3,
    create_date: new Date().getTime(),
  },
  {
    id: 3,
    author: '아무개',
    content: 'hi 아무개',
    emotion: 2,
    create_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
