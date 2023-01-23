import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { Icon } from "@iconify/react";
import { CategoryLi, ItemLi, Check } from "../styles/Custom";

const ListTitle = styled.h4`
  padding: 0.8rem 0.6rem 0 0.6rem;
`;

const Time = styled.span`
  padding: 0 0.6rem 0.5rem 0.6rem;
  font-size: 0.75rem;
  font-weight: 400;
  color: ${({ theme }) => theme.timeGray};
`;

export default function Item() {
  return (
    <ItemLi>
      <Link to="/edit">
        <CategoryLi symbol="water">
          <Icon icon="material-symbols:water-drop" />
        </CategoryLi>
        <ListTitle>몬스테라 물주기</ListTitle>
        <Time>14:00 ~ 15:00</Time>
        <Check>
          <input type="checkbox" title="완료 체크" id="checkDone"></input>
          <label htmlFor="checkDone">
            <Icon icon="material-symbols:done"></Icon>
          </label>
        </Check>
      </Link>
    </ItemLi>
  );
}
