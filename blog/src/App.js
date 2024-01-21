/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['블로그 글제목 1', '블로그 글제목2', '블로그 글제목3']);
  let [따봉, 따봉변경] = useState(0);
  let posts = "난 정말 귀여워"
  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '블로그뿡빵이';
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className='black-nav'>
     
        <div> react 배우는 Blog</div>
      </div>
      <div className='list'>
        <h3>{ 글제목[0] } <span onClick={ () => {따봉변경 (따봉+1) } } >❤️</span> {따봉} </h3>
        <p>1월 17일 발행</p>
        <hr/>
    </div>
    <div className='list'>    
        <h3>{ 글제목[1] }</h3><button onClick={제목바꾸기}>버튼</button>
        <p>1월 17일 발행</p>
        <hr/>
    </div>
    <div className='list'>
        <h3>{ 글제목[2] }</h3>
        <p>1월 17일 발행</p>
        <hr/>
    </div>

  
      <Modal></Modal>

    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    )
  }

export default App;
