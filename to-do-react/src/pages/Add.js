import Input from "../components/Input";
import useInput from "../util/useInput";
import Choice from "../components/Choice";
import useChoice from "../util/useChoice";
import Modal from "../components/Modal";
import useModal from "../util/useModal";

import { ButtonBox, FormArea } from "../styles/Layout";
import Button from "../ButtonComponents/Button";

import { useDispatch } from "react-redux";
import { addData } from "../actions/index";

export default function Add() {
  const [title, titleBind] = useInput("");
  const [time, timeBind] = useInput("");
  const [category, cateBind] = useChoice("");
  const [modalValue, modalBind] = useModal(false);

  const dispatch = useDispatch();

  const handleSumbit = (e) => {
    e.preventDefault();

    const item = { category, title, time, done: false };
    dispatch(addData("/data", item));
    modalBind();
  };

  return (
    <FormArea onSubmit={handleSumbit}>
      <Input label={"제목"} values={titleBind} />
      <Input label={"시간"} values={timeBind} />
      <Choice label={"분류"} values={category} event={cateBind} />
      <ButtonBox>
        <Button text="추가" />
      </ButtonBox>

      {modalValue ? (
        <Modal label={"등록"} eventModal={modalBind}></Modal>
      ) : null}
    </FormArea>
  );
}
