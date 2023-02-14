import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

export default function Notice({ data }) {
  const doneArr = data && data.filter((el) => el.done);

  const now = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <Alarm>
      <span className="date">{`${now.getFullYear()}년 ${
        now.getMonth() + 1
      }월 ${now.getDate()}일 ${week[now.getDay()]}요일`}</span>
      <h2 className="alarm">
        {`오늘 ${doneArr.length}개의 할 일을 완료하였습니다`}
      </h2>
      <LightBlueButton>
        <Link to="/to-do-app/list">확인하러 가기</Link>
      </LightBlueButton>
    </Alarm>
  );
}
