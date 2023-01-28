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

export default function Edit({ data, setData }) {
  const { id } = useParams();
  const thisItem = data.filter((el) => el.id === id)[0];

  const [titleValue, titleBind] = useInput(thisItem ? thisItem.title : "");
  const [timeValue, timeBind] = useInput(thisItem ? thisItem.time : "");
  const [cateValue, cateBind] = useChoice(thisItem ? thisItem.category : null);
  const [checkValue, checkBind] = useCheck(thisItem ? thisItem.done : false);
  const [modalValue, modalBind, modalTime] = useModal(false);
  const [alertValue, alertBind, alertTime] = useModal(false);

  const cateArr =
    data &&
    data.filter((el, idx, arr) => {
      return arr.findIndex((item) => item.category === el.category) === idx;
    });

  const removeList = (idx) => {
    setData(data.filter((el) => el.id !== idx));
    alertBind();
    alertTime(2000);
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
            done: checkValue,
          };
        } else {
          return el;
        }
      })
    );
    modalBind();
    modalTime(2000);
  };

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
      <Check label={"완료"} values={checkBind} />

      <ButtonBox>
        <Button size="sm" text="수정" onClick={() => editList(id)} />
        <Button
          color="red"
          size="sm"
          text="삭제"
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
          removeList={removeList}
          idx={id}
        ></Modal>
      ) : null}
    </FormArea>
  );
}
