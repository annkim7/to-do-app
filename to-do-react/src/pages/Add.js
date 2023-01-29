import { apiAdd } from "../util/api";
import { ButtonBox, FormArea } from "../styles/Layout";

import Input from "../components/Input";
import useInput from "../util/useInput";
import Choice from "../components/Choice";
import useChoice from "../util/useChoice";
import Modal from "../components/Modal";
import useModal from "../util/useModal";

import Button from "../ButtonComponents/Button";

export default function Add({ data }) {
  const [titleValue, titleBind] = useInput("");
  const [timeValue, timeBind] = useInput("");
  const [cateValue, cateBind] = useChoice("");
  const [modalValue, modalBind, modalTime] = useModal(false);

  const cateArr =
    data &&
    data.filter((el, idx, arr) => {
      return arr.findIndex((item) => item.category === el.category) === idx;
    });

  const handleSumbit = (e) => {
    e.preventDefault();

    const item = {
      id: data.length + 1,
      category: cateValue,
      title: titleValue,
      time: timeValue,
      done: false,
    };

    apiAdd(`http://localhost:3001/data`, item);
    modalBind();
    modalTime(2000);
  };

  return (
    <FormArea onSubmit={handleSumbit}>
      <Input label={"제목"} values={titleBind} />
      <Input label={"시간"} values={timeBind} />
      <Choice
        label={"분류"}
        array={cateArr}
        values={cateValue}
        event={cateBind}
      />
      <ButtonBox>
        <Button text="추가" />
      </ButtonBox>

      {modalValue ? (
        <Modal label={"등록"} eventModal={modalBind}></Modal>
      ) : null}
    </FormArea>
  );
}
