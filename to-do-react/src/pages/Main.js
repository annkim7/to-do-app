import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { ListRows } from "../styles/Layout";

import Notice from "../components/Notice";
import Item from "../components/Item";

const MatinTitle = styled.h3`
  margin-bottom: 1.456rem;
`;

export default function Main({ data }) {
  const [notList, setNotList] = useState([]);

  useEffect(() => {
    setNotList(data.filter((el) => el.done === false));
  }, [data]);

  return (
    <article>
      <Notice />
      <MatinTitle>할일 목록</MatinTitle>
      <ListRows>
        {notList.map((item, idx) => (
          <Item key={idx} item={item} />
        ))}
      </ListRows>
    </article>
  );
}
