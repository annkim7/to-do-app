import { useDispatch } from "react-redux";
import { delData, editData } from "../actions/index";
import { useParams } from "react-router-dom";

import Input from "../components/Input";
import useInput from "../util/useInput";
import Choice from "../components/Choice";
import useChoice from "../util/useChoice";
import Check from "../components/Check";
import useCheck from "../util/useCheck";
import Modal from "../components/Modal";
import useModal from "../util/useModal";

import { ButtonBox } from "../styles/Layout";
import Button from "../ButtonComponents/Button";

export default function Form({ datum }) {
  const { id } = useParams();

  console.log(datum);

  const [title, titleBind] = useInput(datum.title || "");
  const [time, timeBind] = useInput(datum.time || "");
  const [category, cateBind] = useChoice(datum.category || null);
  const [done, checkBind] = useCheck(datum.done || false);
  const [modal, modalBind] = useModal(false);
  const [alert, alertBind] = useModal(false);
  const [del, delBind] = useModal(false);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(delData(`http://localhost:3001/data/${id}`, id));
    alertBind();
  };

  const handleEdit = () => {
    const item = { category, title, time, done };
    dispatch(editData(`http://localhost:3001/data/${id}`, item));
    modalBind();
  };

  return (
    <>
      <Input label={"제목"} values={titleBind} />
      <Input label={"시간"} values={timeBind} />
      <Choice label={"분류"} values={category} event={cateBind} />
      <Check label={"완료"} values={checkBind} />

      <ButtonBox>
        <Button size="sm" text="수정" type="button" onClick={handleEdit} />
        <Button
          color="red"
          size="sm"
          text="삭제"
          type="button"
          onClick={() => {
            modalBind();
            alertBind();
            delBind();
          }}
        />
      </ButtonBox>

      {modal ? (
        <Modal
          label={del ? "삭제" : "수정"}
          alert={alert}
          eventModal={modalBind}
          handleDelete={handleDelete}
        ></Modal>
      ) : null}
    </>
  );
}
