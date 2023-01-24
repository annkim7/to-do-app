import styled from "styled-components";
import { ItemLi } from "./Layout";

export const Check = styled.div`
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

export const FormCheck = styled(Check)`
  input + label svg {
    width: 2.28rem;
    color: ${({ theme }) => theme.uncheckGray};
    opacity: 1;
  }
  input:checked + label svg {
    color: ${({ theme }) => theme.checkGreen};
  }
`;

export const WriteArea = styled.input`
  height: 1.625rem;
  padding: 0.5rem;
  color: ${({ theme }) => theme.editGray};
  border-radius: 0.313rem;
  box-shadow: ${({ theme }) => theme.borderShadow};
`;
