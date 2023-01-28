import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ButtonBox, FormArea } from "../styles/Layout";

import Input from "../components/Input";
import useInput from "../util/useInput";
import Choice from "../components/Choice";
import useChoice from "../util/useChoice";

import Button from "../components/Button";
import Modal from "../components/Modal";

export default function Add({ data, setData }) {
  const [modal, setModal] = useState(false);
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();

  const [titleValue, titleBind] = useInput("");
  const [timeValue, timeBind] = useInput("");
  const [cateValue, cateBind] = useChoice("");

  const modalHandler = () => {
    setModal(!modal);
    periodHandler(2000);
  };

  const periodHandler = (time) => {
    setTimeout(() => {
      navigate(`/`);
    }, time);
  };

  const cateArr =
    data &&
    data.filter((el, idx, arr) => {
      return arr.findIndex((item) => item.category === el.category) === idx;
    });

  const addList = (e) => {
    e.preventDefault();
    setData([
      ...data,
      {
        id: data.length,
        category: cateValue,
        title: titleValue,
        time: timeValue,
        done: false,
      },
    ]);

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
      <Choice
        label={"분류"}
        array={cateArr}
        values={cateValue}
        event={cateBind}
      />
      <ButtonBox>
        <Button text="추가" onClick={addList} />
      </ButtonBox>

      {modal ? <Modal alert={alert} modalHandler={modalHandler}></Modal> : null}
    </FormArea>
  );
}
