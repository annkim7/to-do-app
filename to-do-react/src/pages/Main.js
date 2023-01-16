import React from "react";
import Notice from "../components/Notice";
import Item from "../components/Item";

export default function Main() {
  return (
    <article>
      <Notice />
      <h3 className="mainTitle">할일 목록</h3>
      <ul>
        <Item></Item>
      </ul>
    </article>
  );
}