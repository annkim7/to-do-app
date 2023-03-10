import styled from "styled-components";
import { ButtonBox } from "../styles/Layout";
import Button from "../ButtonComponents/Button";

const ModalBox = styled.section`
  ${({ theme }) => theme.positionCenter()}
  width:100%;
  height: 100%;
`;

const ModalBg = styled.div`
  ${({ theme }) => theme.modalBg()}
  ${({ theme }) => theme.flexBox("row", "center", "center")}
`;

const ModalCon = styled.div`
  ${({ theme }) => theme.flexBox("column", "center", "center")}
  width: 15rem;
  height: 11rem;
  padding: 2rem 1.563rem;
  background: #fff;
  box-shadow: ${({ theme }) => theme.modalShadow};
  border-radius: 1rem;
  font-size: 0.95rem;
  line-height: 1.35;
  text-align: center;
  font-weight: 400;
  white-space: pre-wrap;
`;

export default function Modal({
  label,
  alert,
  eventAlert,
  eventModal,
  handleDelete,
}) {
  return (
    <ModalBox>
      <ModalBg onClick={eventModal}>
        <ModalCon onClick={(event) => event.stopPropagation()}>
          <span>
            {alert
              ? `등록된 할 일이 삭제됩니다.\n진행하시겠습니까?`
              : `할 일이 ${label}되었습니다!`}
          </span>

          {alert ? (
            <ButtonBox>
              <Button
                color="red"
                size="sm"
                modal="true"
                text="삭제"
                type="button"
                onClick={handleDelete}
              />
              <Button
                size="sm"
                modal="true"
                text="취소"
                onClick={() => {
                  eventModal();
                  eventAlert();
                }}
              />
            </ButtonBox>
          ) : null}
        </ModalCon>
      </ModalBg>
    </ModalBox>
  );
}
