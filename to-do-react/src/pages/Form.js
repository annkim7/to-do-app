import React from "react";
import { Icon } from "@iconify/react";
import { ThreeColumns } from "../styles/Layout";
import { Category, WriteArea } from "../styles/Custom";
import {
  FormCheck,
  ButtonBox,
  BigGreenButton,
  SmallButton,
} from "../styles/Button";
import styled from "styled-components";

const FormArea = styled.article`
  margin-top: -1rem;

  h3 {
    margin-top: 1rem;
    margin-bottom: 1.1rem;
  }
`;

export default function Form({ page }) {
  return (
    <FormArea>
      <h3>제목</h3>
      <WriteArea type="text" title="제목 쓰기"></WriteArea>
      <h3>시간</h3>
      <WriteArea type="text" title="시간 쓰기"></WriteArea>
      <h3>분류</h3>
      <ThreeColumns>
        <Category symbol={({ theme }) => theme.cateBlue}>
          <Icon icon="material-symbols:water-drop" />
        </Category>
        <Category symbol={({ theme }) => theme.cateGreen}>
          <Icon icon="fluent:leaf-two-20-filled" />
        </Category>
        <Category symbol={({ theme }) => theme.cateOrange}>
          <Icon icon="material-symbols:potted-plant-outline" />
        </Category>
      </ThreeColumns>
      <h3>완료</h3>
      <ThreeColumns>
        <FormCheck>
          <input type="checkbox" title="완료 체크" id="checkDone"></input>
          <label htmlFor="checkDone">
            <Icon icon="material-symbols:done"></Icon>
          </label>
        </FormCheck>
      </ThreeColumns>

      {page === "add" ? (
        <ButtonBox>
          <BigGreenButton colorType={({ theme }) => theme.checkGreen}>
            추가
          </BigGreenButton>
        </ButtonBox>
      ) : (
        <ButtonBox>
          <SmallButton colorType={({ theme }) => theme.checkGreen}>
            수정
          </SmallButton>
          <SmallButton colorType={({ theme }) => theme.mainRed}>
            삭제
          </SmallButton>
        </ButtonBox>
      )}
    </FormArea>
  );
}
