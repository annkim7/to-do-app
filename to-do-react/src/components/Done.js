import styled from "styled-components";
import { ItemLi } from "../styles/Layout";
import { Icon } from "@iconify/react";

export const CheckArea = styled.div`
  ${ItemLi} > a & {
    grid-area: d;
  }
  ${ItemLi} & input + label svg {
    opacity: 0;
  }
  ${ItemLi} & input:checked + label svg {
    opacity: 1;
  }

  input {
    display: none;
  }
  label {
    ${({ theme }) => theme.flexBox("row", "center", "center")}
    height: 100%;
    cursor: pointer;
  }
  input + label svg {
    width: 2.28rem;
    height: 2.28rem;
    color: ${({ theme }) => theme.uncheckGray};
  }

  input:checked + label svg {
    color: ${({ theme }) => theme.checkGreen};
  }
`;

export default function Done({ label, values }) {
  return (
    <CheckArea>
      <input
        type="checkbox"
        title={`${label} 체크`}
        id="checkDone"
        {...values}
      />
      <label htmlFor="checkDone">
        <Icon icon="material-symbols:done"></Icon>
      </label>
    </CheckArea>
  );
}
