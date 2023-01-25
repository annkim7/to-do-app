import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { Icon } from "@iconify/react";
import { ThreeColumns, ButtonBox } from "../styles/Layout";
import { FormCheck } from "../styles/Custom";

import Category from "../components/Category";
import Button from "../components/Button";
import Modal from "../components/Modal";

import Input from "../components/Input";
import useInput from "../util/useInput";

const FormArea = styled.form`
  margin-top: -1rem;

  h3 {
    margin-top: 1rem;
    margin-bottom: 1.1rem;
  }
`;

export default function Form({ page, data, setData, idx }) {
  const [modal, setModal] = useState(false);
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();

  const thisItem = data.filter((el) => el.id === idx)[0];

  const [category, setCate] = useState(thisItem ? thisItem.category : "");

  const [titleValue, titleBind, titleReset] = useInput("");
  const [timeValue, timeBind, timeReset] = useInput("");

  const modalHandler = () => {
    setModal(!modal);
    periodHandler(2000);
  };

  const periodHandler = (time) => {
    setTimeout(() => {
      navigate(`/`);
    }, time);
  };

  const cateHandler = (symbol) => {
    setCate(symbol);
  };

  const addList = (e) => {
    e.preventDefault();
    setData([
      ...data,
      {
        id: data.length,
        category,
        title: titleValue,
        time: timeValue,
        done: false,
      },
    ]);

    titleReset();
    timeReset();
    setModal(!modal);
    periodHandler(2000);
  };

  useEffect(() => {
    setAlert(false);
    setModal(false);
  }, []);

  return (
    <FormArea>
      <Input label={"제목"} values={titleBind} />
      <Input label={"시간"} values={timeBind} />
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
        <Button text="추가" onClick={addList} />
      </ButtonBox>

      {modal ? <Modal alert={alert} modalHandler={modalHandler}></Modal> : null}
    </FormArea>
  );
}
