import { useEffect } from 'react';
import DiaryEditor from '../components/DiaryEditor';

const New = () => {
  useEffect(() => {
    const title = document.querySelector('title');
    title.innerText = `감정 일기장 | 새 일기 쓰기`
  }, [])

  return (
    <div>
      <DiaryEditor />
    </div>
  );
};

export default New;
