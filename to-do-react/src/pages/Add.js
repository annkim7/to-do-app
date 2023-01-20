import React from "react";
import { Icon } from "@iconify/react";
import { Category, WriteArea } from "../styles/Custom";
import {
  Check,
  ButtonBox,
  BigGreenButton,
  SmallButton,
} from "../styles/Button";
import styled from "styled-components";

const FormArea = styled.article`
  .categoryBox {
    display: flex;
  }
`;

export default function Add() {
  return (
    <FormArea>
      <h3>제목</h3>
      <WriteArea type="text" title="제목 쓰기"></WriteArea>
      <h3>시간</h3>
      <WriteArea type="text" title="시간 쓰기"></WriteArea>
      <h3>분류</h3>
      <div className="categoryBox">
        <Category symbol={({ theme }) => theme.cateBlue}>
          <Icon icon="material-symbols:water-drop" />
        </Category>
        <Category symbol={({ theme }) => theme.cateGreen}>
          <Icon icon="fluent:leaf-two-20-filled" />
        </Category>
        <Category symbol={({ theme }) => theme.cateOrange}>
          <Icon icon="material-symbols:potted-plant-outline" />
        </Category>
      </div>
      <h3>완료</h3>
      <Check>
        <input type="checkbox" title="완료 체크" id="checkDone"></input>
        <label htmlFor="checkDone">
          <Icon icon="material-symbols:done"></Icon>
        </label>
      </Check>
      <ButtonBox>
        <BigGreenButton colorType={({ theme }) => theme.checkGreen}>
          추가
        </BigGreenButton>
        <SmallButton colorType={({ theme }) => theme.checkGreen}>
          수정
        </SmallButton>
        <SmallButton colorType={({ theme }) => theme.mainRed}>삭제</SmallButton>
      </ButtonBox>
    </FormArea>
  );
}
