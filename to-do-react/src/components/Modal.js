import React from "react";

import styled from "styled-components";
import { ButtonBox, ModalButton } from "../styles/Button";

const ModalBox = styled.section`
  ${({ theme }) => theme.positionCenter()}
  width:100%;
  height: 100%;
`;

const ModalBg = styled.div`
  ${({ theme }) => theme.modalBg()}
  ${({ theme }) => theme.flexBox("row", "center", "center")}
`;

const ModalCon = styled.div`
  ${({ theme }) => theme.flexBox("column", "center", "space-between")}
  width: 15rem;
  height: 11rem;
  padding: 2rem 1.563rem;
  background: #fff;
  box-shadow: ${({ theme }) => theme.modalShadow};
  border-radius: 1rem;
  font-size: 0.95rem;
  line-height: 1.35;
  text-align: center;
  font-weight: 400;
`;

export default function Modal({ modalHandler, alert, alertHander }) {
  return (
    <ModalBox>
      <ModalBg onClick={modalHandler}>
        {alert ? (
          <ModalCon onClick={(event) => event.stopPropagation()}>
            <span>할 일이 등록되었습니다!</span>
          </ModalCon>
        ) : (
          <ModalCon onClick={(event) => event.stopPropagation()}>
            <span>
              등록된 할 일이 삭제됩니다.
              <br />
              진행하시겠습니까?
            </span>
            <ButtonBox>
              <ModalButton
                colorType={({ theme }) => theme.mainRed}
                onClick={alertHander}
              >
                삭제
              </ModalButton>
              <ModalButton
                colorType={({ theme }) => theme.checkGreen}
                onClick={modalHandler}
              >
                취소
              </ModalButton>
            </ButtonBox>
          </ModalCon>
        )}
      </ModalBg>
    </ModalBox>
  );
}
