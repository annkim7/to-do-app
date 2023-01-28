import styled from "styled-components";
import { ItemLi } from "../styles/Layout";
import { Icon } from "@iconify/react";
import { ThreeColumns } from "../styles/Layout";

export const CheckArea = styled.div`
  ${ItemLi} > a & {
    grid-area: d;
    input + label svg {
      width: 1rem;
    }
  }
  ${({ theme }) => theme.flexBox("row", "center", "center")}
  color: ${({ theme }) => theme.checkGreen};
  input {
    display: none;
  }
  label {
    height: 100%;
    cursor: pointer;
  }
  input + label svg {
    width: 2.28rem;
    height: 100%;
    color: ${({ theme }) => theme.uncheckGray};
  }
  input:checked + label svg {
    color: ${({ theme }) => theme.checkGreen};
  }
`;

export default function Check({ label, values }) {
  return (
    <>
      <h3>{label}</h3>
      <ThreeColumns>
        <CheckArea>
          <input type="checkbox" title="완료 체크" id="checkDone" {...values} />
          <label htmlFor="checkDone">
            <Icon icon="material-symbols:done"></Icon>
          </label>
        </CheckArea>
      </ThreeColumns>
    </>
  );
}
