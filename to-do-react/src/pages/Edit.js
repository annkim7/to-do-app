import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ButtonBox, FormArea } from "../styles/Layout";

import Input from "../components/Input";
import useInput from "../util/useInput";
import Choice from "../components/Choice";
import useChoice from "../util/useChoice";
import Check from "../components/Check";

import Button from "../components/Button";
import Modal from "../components/Modal";

export default function Edit({ data, setData, idx }) {
  const [modal, setModal] = useState(false);
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();

  const thisItem = data.filter((el) => el.id === idx)[0];

  const [titleValue, titleBind] = useInput(thisItem ? thisItem.title : "");
  const [timeValue, timeBind] = useInput(thisItem ? thisItem.time : "");
  const [cateValue, cateBind] = useChoice(thisItem ? thisItem.category : null);

  const [isCheck, setCheck] = useState("");

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

  const cateArr =
    data &&
    data.filter((el, idx, arr) => {
      return arr.findIndex((item) => item.category === el.category) === idx;
    });

  const checkHander = () => {
    setCheck(!isCheck);
    console.log(isCheck);
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
          return {
            id: idx,
            category: cateValue,
            title: titleValue,
            time: timeValue,
            done: true,
          };
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
      <Input label={"제목"} values={titleBind} />
      <Input label={"시간"} values={timeBind} />
      <Choice
        label={"분류"}
        array={cateArr}
        values={cateValue}
        event={cateBind}
      />
      <Check label={"완료"} checked={isCheck} checkHander={checkHander} />

      <ButtonBox>
        <Button size="sm" text="수정" onClick={() => editList(idx)} />
        <Button color="red" size="sm" text="삭제" onClick={alertHandler} />
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
