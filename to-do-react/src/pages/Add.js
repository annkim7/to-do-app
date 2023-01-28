import { ButtonBox, FormArea } from "../styles/Layout";

import Input from "../components/Input";
import useInput from "../util/useInput";
import Choice from "../components/Choice";
import useChoice from "../util/useChoice";
import Modal from "../components/Modal";
import useModal from "../util/useModal";

import Button from "../ButtonComponents/Button";

export default function Add({ data, setData }) {
  const [titleValue, titleBind] = useInput("");
  const [timeValue, timeBind] = useInput("");
  const [cateValue, cateBind] = useChoice("");
  const [modalValue, modalBind, modalTime] = useModal(false);

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
      <ButtonBox>
        <Button text="추가" onClick={addList} />
      </ButtonBox>

      {modalValue ? (
        <Modal label={"등록"} eventModal={modalBind}></Modal>
      ) : null}
    </FormArea>
  );
}
