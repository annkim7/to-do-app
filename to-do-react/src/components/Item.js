import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { Icon } from "@iconify/react";
import { Check } from "../styles/Custom";
import Category from "./Category";
import { ItemLi } from "../styles/Layout";

const ListTitle = styled.h4`
  padding: 0.8rem 0.6rem 0 0.6rem;
`;

const Time = styled.span`
  padding: 0 0.6rem 0.5rem 0.6rem;
  font-size: 0.75rem;
  font-weight: 400;
  color: ${({ theme }) => theme.timeGray};
`;

export default function Item({ item }) {
  const [done, setDone] = useState(false);

  const doneHander = (e) => {
    setDone(done);
  };

  return (
    <ItemLi key={item.id}>
      <Link to="/edit">
        <Category symbol={item.category} />
        <ListTitle>{item.title}</ListTitle>
        <Time>{item.time}</Time>
        <Check>
          <input
            type="checkbox"
            title="완료 체크"
            id="checkDone"
            checked={item.done}
            onChange={doneHander}
          ></input>
          <label htmlFor="checkDone">
            <Icon icon="material-symbols:done"></Icon>
          </label>
        </Check>
      </Link>
    </ItemLi>
  );
}
