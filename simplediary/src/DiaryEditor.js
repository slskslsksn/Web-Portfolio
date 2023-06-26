import { useState, useRef } from 'react';

const DiaryEditor = () => {
  const [state, setState] = useState({
    author: '',
    content: '',
    emotion: 1,
  });

  const authorInput = useRef();
  const contentInput = useRef();

  const handleChangeState = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    alert('저장 성공!!');
  };
  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input ref={authorInput} name="author" value={state.author} onChange={handleChangeState} />
      </div>
      <div>
        <textarea ref={contentInput} name="content" value={state.content} onChange={handleChangeState} />
      </div>
      <div>
        <span>오늘의 감정점수 : </span>
        <select name="emotion" value={state.emotion} onChange={handleChangeState}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <din>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </din>
    </div>
  );
};

export default DiaryEditor;
