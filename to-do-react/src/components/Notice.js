import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Alarm = styled.section`
  padding: ${({ theme }) => theme.pd25};
  background: ${({ theme }) => theme.mainGreen};

  h2 {
    font-size: 2.063rem;
    letter-spacing: -0.025em;
    font-weight: 500;
    color: #fff;
  }
`;

const LightBlueButton = styled.button`
  background: ${({ theme }) => theme.mainSky};
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
