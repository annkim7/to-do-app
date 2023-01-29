import { useParams } from "react-router-dom";

import { ButtonBox, FormArea } from "../styles/Layout";

import Input from "../components/Input";
import useInput from "../util/useInput";
import Choice from "../components/Choice";
import useChoice from "../util/useChoice";
import Check from "../components/Check";
import useCheck from "../util/useCheck";
import Modal from "../components/Modal";
import useModal from "../util/useModal";

import Button from "../ButtonComponents/Button";
import { apiDelete, apiEdit } from "../util/api";

export default function Edit({ data }) {
  const { id } = useParams();

  const [titleValue, titleBind] = useInput("");
  const [timeValue, timeBind] = useInput("");
  const [cateValue, cateBind] = useChoice(null);
  const [checkValue, checkBind] = useCheck(false);
  const [modalValue, modalBind, modalTime] = useModal(false);
  const [alertValue, alertBind, alertTime] = useModal(false);

  const cateArr =
    data &&
    data.filter((el, idx, arr) => {
      return arr.findIndex((item) => item.category === el.category) === idx;
    });

  const handleDelete = () => {
    apiDelete(`http://localhost:3001/data/${id}`);
    alertBind();
    alertTime(2000);
  };

  const handleEdit = () => {
    const item = {
      category: cateValue,
      title: titleValue,
      time: timeValue,
      done: checkValue,
    };
    apiEdit(`http://localhost:3001/data/${id}`, item);
    modalBind();
    modalTime(2000);
  };

  return (
    <FormArea>
      {data && (
        <>
          <Input label={"제목"} values={titleBind} />
          <Input label={"시간"} values={timeBind} />
          <Choice
            label={"분류"}
            array={cateArr}
            values={cateValue}
            event={cateBind}
          />
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

          {modalValue ? (
            <Modal
              label={"수정"}
              alert={alertValue}
              eventModal={modalBind}
              handleDelete={handleDelete}
            ></Modal>
          ) : null}
        </>
      )}
    </FormArea>
  );
}
