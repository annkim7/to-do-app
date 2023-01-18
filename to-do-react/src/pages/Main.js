import React from "react";

import styled from "styled-components";

import Notice from "../components/Notice";
import Item from "../components/Item";

const MatinTitle = styled.h3`
  margin-bottom: 1.438rem;
`;

export default function Main() {
  return (
    <article>
      <Notice />
      <MatinTitle>할일 목록</MatinTitle>
      <ul>
        <Item></Item>
      </ul>
    </article>
  );
}
