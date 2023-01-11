import React from "react";

export default function Add() {
  return (
    <article>
      <h3>제목</h3>
      <input type="text" title="제목 쓰기"></input>
      <h3>시간</h3>
      <input type="text" title="시간 쓰기"></input>
      <h3>분류</h3>
      <ul>
        <li>물주기 아이콘</li>
      </ul>
      <h3>완료</h3>
      <input type="checkbox" title="완료 체크" id="checkDone"></input>
      <label htmlFor="checkDone">체크</label>
      <button>추가</button>
      <button>수정</button>
      <button>삭제</button>
    </article>
  );
}
