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
  const dispatch = useDispatch();

  const [title, titleBind] = useInput(datum[0].title);
  const [time, timeBind] = useInput(datum[0].time);
  const [category, cateBind] = useChoice(datum[0].category);
  const [done, checkBind] = useCheck(datum[0].done);

  const [modal, modalBind] = useModal(false);
  const [alert, alertBind] = useModal(false);
  const [del, delBind] = useModal(false);

  const handleDelete = () => {
    dispatch(delData(`${process.env.REACT_APP_REST_API}/to-do-app/data/${id}`));
    alertBind();
  };

  const handleEdit = () => {
    const item = { category, title, time, done };
    dispatch(
      editData(`${process.env.REACT_APP_REST_API}/to-do-app/data/${id}`, item)
    );
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
