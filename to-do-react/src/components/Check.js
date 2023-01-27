import styled from "styled-components";
import { ItemLi } from "./Layout";

export const CheckArea = styled.div`
  ${ItemLi} > a & {
    grid-area: d;
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
    width: 1rem;
    height: 100%;
    opacity: 0;
  }
  input:checked + label svg {
    opacity: 1;
  }
`;

export default function Check1() {
  return (
    <CheckArea>
      <input type="checkbox" title="완료 체크" id="checkDone"></input>
      <label htmlFor="checkDone">
        <Icon icon="material-symbols:done"></Icon>
      </label>
    </CheckArea>
  );
}
