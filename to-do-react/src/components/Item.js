import React from "react";

export default function Item() {
  return (
    <li>
      <span className="cate">물주기</span>
      <h4 className="title">몬스테라 물주기</h4>
      <em className="time">14:00 ~ 15:00</em>
      <input type="checkbox" title="완료 체크" id="checkDone"></input>
      <label htmlFor="checkDone">체크</label>
    </li>
  );
}
