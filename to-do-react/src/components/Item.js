import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const ItemLi = styled.li`
  display: grid;
  grid: "a b d" "a c d";
  grid-template-columns: 3.625rem auto 1rem;
  max-height: 3.625rem;
`;

const Category = styled.span`
  ${({ theme }) => theme.flexBox("row", "center", "center")}
  grid-area: a;
  width: 3.625rem;
  height: 3.625rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.cateBlue};
  font-size: 1.85rem;
  color: #fff;
`;

const ListTitle = styled.h4`
  padding: 0.8rem 0.6rem 0 0.6rem;
`;

const Time = styled.span`
  padding: 0 0.6rem 0.5rem 0.6rem;
  font-size: 0.75rem;
  font-weight: 400;
  color: ${({ theme }) => theme.timeGray};
`;

const Check = styled.div`
  ${({ theme }) => theme.flexBox("row", "center", "center")}
  grid-area: d;
  color: ${({ theme }) => theme.checkGreen};
  input {
    display: none;
  }
  label {
    height: 100%;
    cursor: pointer;
  }
  input + label svg {
    width: 1rem;
    height: 100%;
    opacity: 0;
  }
  input:checked + label svg {
    opacity: 1;
  }
`;

export default function Item() {
  return (
    <ItemLi>
      <Category symbol="water">
        <Icon icon="material-symbols:water-drop" />
      </Category>
      <ListTitle>몬스테라 물주기</ListTitle>
      <Time>14:00 ~ 15:00</Time>
      <Check>
        <input type="checkbox" title="완료 체크" id="checkDone"></input>
        <label htmlFor="checkDone">
          <Icon icon="material-symbols:done"></Icon>
        </label>
      </Check>
    </ItemLi>
  );
}
