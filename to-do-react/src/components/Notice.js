import React from "react";
import { Link } from "react-router-dom";
import { Alarm } from "../styles/Custom";
import { LightBlueButton } from "../styles/Button";

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
