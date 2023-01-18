import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const ItemLi = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  input {
    display: none;
  }
`;

const Category = styled.span`
  ${({ theme }) => theme.flexBox("row", "center", "center")}
  width: 3.625rem;
  height: 3.625rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.cateBlue};
  font-size: 1.85rem;
  color: #fff;
`;

export default function Item() {
  return (
    <ItemLi>
      <Category symbol="water">
        <Icon icon="material-symbols:water-drop" />
      </Category>
      <h4 className="title">몬스테라 물주기</h4>
      <em className="time">14:00 ~ 15:00</em>
      <input type="checkbox" title="완료 체크" id="checkDone"></input>
      <label htmlFor="checkDone">체크</label>
    </ItemLi>
  );
}
