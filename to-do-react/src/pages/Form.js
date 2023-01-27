import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { Icon } from "@iconify/react";
import { ThreeColumns, ButtonBox } from "../styles/Layout";
import { FormCheck } from "../styles/Custom";

import Category from "../components/Category";
import Button from "../components/Button";
import Modal from "../components/Modal";

const FormArea = styled.form`
  margin-top: -1rem;

  h3 {
    margin-top: 1rem;
    margin-bottom: 1.1rem;
  }
`;

const WriteArea = styled.input`
  height: 1.625rem;
  padding: 0.5rem;
  color: ${({ theme }) => theme.editGray};
  border-radius: 0.313rem;
  box-shadow: ${({ theme }) => theme.borderShadow};
`;

export default function Form({ page, data, setData, idx }) {
  const [modal, setModal] = useState(false);
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();

  const thisItem = data.filter((el) => el.id === idx)[0];

  const [title, setTitle] = useState(thisItem ? thisItem.title : "");
  const [time, setTime] = useState(thisItem ? thisItem.time : "");
  const [category, setCate] = useState(thisItem ? thisItem.category : "");

  const modalHandler = () => {
    setModal(!modal);
    periodHandler(2000);
  };

  const alertHandler = () => {
    setAlert(!alert);
    setModal(!modal);
  };

  const periodHandler = (time) => {
    setTimeout(() => {
      navigate(`/`);
    }, time);
  };

  const titleHandler = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const timeHandler = (e) => {
    e.preventDefault();
    setTime(e.target.value);
  };

  const cateHandler = (symbol) => {
    setCate(symbol);
  };

  const addList = (e) => {
    e.preventDefault();
    setData([...data, { id: data.length, category, title, time, done: false }]);

    setModal(!modal);
    periodHandler(2000);
  };

  const removeList = (idx) => {
    setData(data.filter((el) => el.id !== idx));

    setAlert(!alert);
    periodHandler(2000);
  };

  const editList = (idx) => {
    setData(
      data.map((el) => {
        if (el.id === idx) {
          return { id: idx, category, title, time, done: true };
        } else {
          return el;
        }
      })
    );
    setModal(!modal);
    periodHandler(2000);
  };

  useEffect(() => {
    setAlert(false);
    setModal(false);
  }, []);

  return (
    <FormArea>
      <h3>제목</h3>
      <WriteArea
        type="text"
        title="제목 쓰기"
        value={title}
        onChange={titleHandler}
      ></WriteArea>
      <h3>시간</h3>
      <WriteArea
        type="text"
        title="시간 쓰기"
        value={time}
        onChange={timeHandler}
      ></WriteArea>
      <h3>분류</h3>
      <ThreeColumns>
        <Category symbol="water" onClick={() => cateHandler("water")} />
        <Category symbol="leaf" onClick={() => cateHandler("leaf")} />
        <Category symbol="pot" onClick={() => cateHandler("pot")} />
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

      <ButtonBox>
        {page === "add" ? (
          <Button text="추가" onClick={addList} />
        ) : (
          <>
            <Button size="sm" text="수정" onClick={() => editList(idx)} />
            <Button color="red" size="sm" text="삭제" onClick={alertHandler} />
          </>
        )}
      </ButtonBox>

      {modal ? (
        <Modal
          alert={alert}
          modalHandler={modalHandler}
          removeList={removeList}
          idx={idx}
        ></Modal>
      ) : null}
    </FormArea>
  );
}
