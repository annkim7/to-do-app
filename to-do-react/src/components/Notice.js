import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Alarm = styled.section`
  margin-bottom: 1.563rem;
  padding: ${({ theme }) => theme.pd20};
  background: ${({ theme }) => theme.mainGreen};
  border-radius: 1rem;
  h2 {
    margin-top: 0.5rem;
    margin-bottom: 0.65rem;
    font-size: 1.68rem;
    letter-spacing: -0.025em;
    font-weight: 400;
    line-height: 1.2;
    color: #fff;
  }
  .date {
    font-size: 0.65rem;
    color: #fff;
    letter-spacing: -0.025em;
    font-weight: 300;
  }
`;

const LightBlueButton = styled.button`
  display: flex;
  margin-left: auto;
  padding: 0.3rem 1.1rem;
  background: ${({ theme }) => theme.mainSky};
  font-size: 0.65rem;
  border-radius: 1.15rem;
  letter-spacing: -0.025em;
  font-weight: 500;
`;

export default function Notice() {
  return (
    <Alarm>
      <span className="date">2023년 1월 10일 화요일</span>
      <h2 className="alarm">오늘 3개의 할 일을 완료하였습니다</h2>
      <LightBlueButton>
        <Link to="/list">확인하러 가기</Link>
      </LightBlueButton>
    </Alarm>
  );
}
