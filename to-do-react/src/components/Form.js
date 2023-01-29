import { useParams } from "react-router-dom";
import { apiDelete, apiEdit } from "../util/api";

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

  const [title, titleBind] = useInput(datum.title || "");
  const [time, timeBind] = useInput(datum.time || "");
  const [category, cateBind] = useChoice(datum.category || null);
  const [done, checkBind] = useCheck(datum.done || false);
  const [modal, modalBind, modalTime] = useModal(false);
  const [alert, alertBind, alertTime] = useModal(false);

  const handleDelete = () => {
    apiDelete(`http://localhost:3001/data/${id}`);
    alertBind();
    alertTime(2000);
  };

  const handleEdit = () => {
    const item = { category, title, time, done };
    apiEdit(`http://localhost:3001/data/${id}`, item);
    modalBind();
    modalTime(2000);
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
          }}
        />
      </ButtonBox>

      {modal ? (
        <Modal
          label={"수정"}
          alert={alert}
          eventModal={modalBind}
          handleDelete={handleDelete}
        ></Modal>
      ) : null}
    </>
  );
}
