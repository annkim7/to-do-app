import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { Icon } from "@iconify/react";
import { ThreeColumns } from "../styles/Layout";
import { Category, FormCheck, WriteArea } from "../styles/Custom";
import { ButtonBox, BigGreenButton, SmallButton } from "../styles/Button";

import Modal from "../components/Modal";

const FormArea = styled.article`
  margin-top: -1rem;

  h3 {
    margin-top: 1rem;
    margin-bottom: 1.1rem;
  }
`;

export default function Form({ page }) {
  const [modal, setModal] = useState(false);
  const [alert, setAlert] = useState(false);

  const modalHandler = () => {
    setModal(!modal);
  };

  const alertHander = () => {
    setModal(!modal);
    setAlert(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
      setModal(false);
    }, 2000);
  }, [alert]);

  return (
    <FormArea>
      <h3>제목</h3>
      <WriteArea type="text" title="제목 쓰기"></WriteArea>
      <h3>시간</h3>
      <WriteArea type="text" title="시간 쓰기"></WriteArea>
      <h3>분류</h3>
      <ThreeColumns>
        <Category symbol="water">
          <Icon icon="material-symbols:water-drop" />
        </Category>
        <Category symbol="leaf">
          <Icon icon="fluent:leaf-two-20-filled" />
        </Category>
        <Category symbol="pot">
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
          <BigGreenButton
            colorType={({ theme }) => theme.checkGreen}
            onClick={alertHander}
          >
            추가
          </BigGreenButton>
        </ButtonBox>
      ) : (
        <ButtonBox>
          <SmallButton colorType={({ theme }) => theme.checkGreen}>
            수정
          </SmallButton>
          <SmallButton
            colorType={({ theme }) => theme.mainRed}
            onClick={modalHandler}
          >
            삭제
          </SmallButton>
        </ButtonBox>
      )}

      {modal ? (
        <Modal
          modalHandler={modalHandler}
          alert={alert}
          alertHander={alertHander}
        ></Modal>
      ) : null}
    </FormArea>
  );
}
